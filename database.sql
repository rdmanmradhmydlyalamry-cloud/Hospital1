-- قاعدة بيانات مستشفى أورا كير (AuraCare Hospital Database)
-- صالحة للاستخدام في MySQL / MariaDB (عبر phpMyAdmin) أو SQLite

CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ticket_id VARCHAR(50) NOT NULL UNIQUE,
    patient_name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255) DEFAULT NULL,
    clinic VARCHAR(100) NOT NULL,
    doctor VARCHAR(100) NOT NULL,
    appointment_date DATE NOT NULL,
    time_slot VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- بيانات تجريبية أولية
INSERT INTO appointments (ticket_id, patient_name, phone, email, clinic, doctor, appointment_date, time_slot)
VALUES 
('TKT-101010', 'محمد عبد الرحمن', '01012345678', 'mohamed@example.com', 'أمراض القلب', 'د. يوسف علي', '2026-11-20', '10:00 AM - 10:30 AM'),
('TKT-202020', 'سارة أحمد', '01123456789', 'sara@example.com', 'طب الأطفال', 'د. سارة محمود', '2026-11-21', '12:30 PM - 01:00 PM');
