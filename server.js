const express = require('express');
const cors = require('cors');
const path = require('path');
const { DatabaseSync } = require('node:sqlite');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize SQLite Database (hospital.db)
const dbPath = path.join(__dirname, 'hospital.db');
const db = new DatabaseSync(dbPath);

// Create table if not exists
db.exec(`
    CREATE TABLE IF NOT EXISTS appointments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ticket_id TEXT NOT NULL UNIQUE,
        patient_name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT DEFAULT '',
        clinic TEXT NOT NULL,
        doctor TEXT NOT NULL,
        appointment_date TEXT NOT NULL,
        time_slot TEXT NOT NULL,
        created_at TEXT DEFAULT (datetime('now', 'localtime'))
    );
`);

console.log('✅ Connected to SQLite database:', dbPath);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// API: Check server and database status
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        database: 'SQLite (hospital.db)',
        message: 'AuraCare Hospital Server is running with Database integration!',
        timestamp: new Date().toISOString()
    });
});

// API: Get all appointments from database
app.get('/api/appointments', (req, res) => {
    try {
        const query = db.prepare('SELECT * FROM appointments ORDER BY id DESC');
        const list = query.all();
        res.json({ success: true, count: list.length, data: list });
    } catch (err) {
        console.error('Error fetching appointments:', err);
        res.status(500).json({ success: false, message: 'Database query error' });
    }
});

// API: Create new booking appointment in database
app.post('/api/appointments', (req, res) => {
    const { patientName, phone, email, clinic, doctor, date, timeSlot } = req.body;

    if (!patientName || !phone || !clinic || !doctor || !date || !timeSlot) {
        return res.status(400).json({
            success: false,
            message: 'جميع الحقول الأساسية مطلوبة (Name, Phone, Clinic, Doctor, Date, TimeSlot)'
        });
    }

    const ticketId = 'TKT-' + Math.floor(100000 + Math.random() * 900000);

    try {
        const insertStmt = db.prepare(`
            INSERT INTO appointments (ticket_id, patient_name, phone, email, clinic, doctor, appointment_date, time_slot)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);

        insertStmt.run(
            ticketId,
            patientName,
            phone,
            email || '',
            clinic,
            doctor,
            date,
            timeSlot
        );

        console.log(`[DB Inserted] ${ticketId} - ${patientName} (${clinic} - ${doctor})`);

        res.status(201).json({
            success: true,
            message: 'تم حفظ الحجز بنجاح في قاعدة البيانات',
            ticket: {
                ticketId,
                patientName,
                phone,
                email: email || '',
                clinic,
                doctor,
                date,
                timeSlot
            }
        });
    } catch (err) {
        console.error('Database insertion error:', err);
        res.status(500).json({ success: false, message: 'فشل حفظ الحجز في قاعدة البيانات' });
    }
});

// Fallback to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`  🏥 AuraCare Hospital Server (Node.js + SQLite Database)`);
    console.log(`  🚀 Server listening on: http://localhost:${PORT}`);
    console.log(`=======================================================`);
});
