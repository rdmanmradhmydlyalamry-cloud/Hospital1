# 🏥 مستشفى أورا كير (AuraCare Hospital)

موقع ويب متكامل وحديث لمستشفى، مجهز بأحدث معايير التصميم البرمجي (Clean Architecture) ليكون جاهزاً للعرض الرسمي والرفع على **GitHub** واستضافته على السيرفرات الرسمية.

---

## 🌟 مميزات المشروع

- **واجهة مستخدم احترافية (Bilingual Frontend):**
  - دعم كامل للغتين **العربية (RTL)** و **الإنجليزية (LTR)** مع التبديل الفوري بنقرة واحدة.
  - دعم الوضع الليلي والنهاري (**Dark / Light Theme**) مع حفظ تفضيلات المستخدم.
  - تصميم متجاوب 100% مع كافة الشاشات (الهواتف، الأجهزة اللوحية، والشاشات الكبيرة).
  - نظام حجز مواعيد ذكي ومتعدد الخطوات (Multi-step Booking Wizard) مع التحقق من صحة البيانات.
  - تذكرة حجز فورية مع إمكانية تحميل التذكرة كملف نصي للطباعة أو الاستقبال.
  - ودجت محادثة ومساعد افتراضي تفاعلي (Interactive Chat Widget).
  - معرض للأقسام الطبية، قائمة الأطباء مع الفلترة، عدادات إحصائية متحركة، وآراء المرضى.

- **خلفية برمجية مرنة (Full-Stack Backend):**
  - **Node.js & Express Server:** خادم سريع وخفيف جاهز للتشغيل مباشرة.
  - **PHP Backend:** متاح في مجلد `php-backend` ليتوافق مع استضافات الويب التقليدية (CPanel / Apache / Nginx / XAMPP).
  - **قاعدة البيانات:** مجهزة للعمل مع **SQLite** بدون أي إعدادات إضافية، وكذلك مع **MySQL / MariaDB** عبر ملف `database.sql`.

---

## 📁 هيكلية المشروع (Project Structure)

```text
hospital-website/
├── public/                 # ملفات الواجهة الأمامية (Frontend)
│   ├── index.html          # الصفحة الرئيسية للموقع
│   ├── style.css           # التصميم والتنسيقات ونظام الألوان HSL
│   ├── app.js              # البرمجة التفاعلية ونظام الترجمة وربط الـ API
│   └── assets/             # الصور الطبية وصور الأطباء عالية الجودة
├── php-backend/            # الباك اند بلغة PHP
│   ├── db.php              # إعدادات والاتصال بقاعدة البيانات (SQLite / MySQL)
│   └── api_appointments.php# واجهة برمجة التطبيقات (API) لجلب وحفظ الحجوزات
├── database.sql            # مخطط قاعدة البيانات (Schema) متوافق مع MySQL / MariaDB
├── server.js               # خادم Node.js & Express الرئيسي
├── package.json            # إعدادات المشروع وحزم Node.js
├── .gitignore              # حماية الملفات الحساسة وعدم رفع node_modules إلى Git
└── README.md               # التوثيق الرسمي للمشروع
```

---

## 🚀 تشغيل المشروع

### الخيار الأول: التشغيل عبر Node.js (الموصى به)
1. افتح موجه الأوامر في مجلد المشروع:
   ```bash
   npm install
   ```
2. شغّل الخادم:
   ```bash
   npm start
   ```
3. افتح المتصفح على:
   ```text
   http://localhost:3000
   ```

### الخيار الثاني: التشغيل عبر PHP
1. ضع مجلد المشروع داخل مجلد `htdocs` في XAMPP أو مجلد السيرفر المحلي.
2. يمكنك تجربة الـ API مباشرة:
   ```text
   http://localhost/hospital-website/php-backend/api_appointments.php
   ```
3. يدعم الاتصال المباشر بـ MySQL بعد استيراد ملف `database.sql` من خلال phpMyAdmin.

---

## 📤 خطوات الرفع على GitHub (Ready for Git)

المشروع يحتوي على ملف `.gitignore` جاهز ومحكم. لرفع المشروع إلى حسابك في GitHub:

```bash
git init
git add .
git commit -m "Initial commit: AuraCare Hospital Full-Stack Website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git
git push -u origin main
```
*(استبدل الرابط برابط المستودع الخاص بك على GitHub)*.
