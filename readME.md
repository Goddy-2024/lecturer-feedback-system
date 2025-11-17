#  Lecturer Performance Review & Feedback System

![License](https://img.shields.io/badge/License-MIT-green) ![Language](https://img.shields.io/badge/Language-JavaScript-blue) ![Framework](https://img.shields.io/badge/Framework-React-red)

A system for collecting anonymous lecturer feedback, analyzing performance, and generating actionable reports for academic improvement.

---

##  Table of Contents

- [Problem Definition](#problem-definition)  
- [Key Users](#key-users)  
- [MVP Features](#mvp-features)  
- [System Functional Requirements](#system-functional-requirements)  
- [Data Flow](#data-flow)  
- [MVP Screens / Pages](#mvp-screens--pages)  
- [API Endpoints](#api-endpoints)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [License](#license)  

---

##  Problem Definition

Universities need a solution to:

- Collect **anonymous feedback** from students  
- Evaluate lecturer performance using **quantitative scores**  
- Generate **reports** for departments to improve teaching quality  

---

##  Key Users

### Lecturers
- Log in and create feedback forms  
- Share form links via email or manually  
- View performance trends  

### Students
- Receive feedback links  
- Submit feedback anonymously  
- No login required  

### Admin
- Manage courses, lecturers, and departments  
- View analytics dashboard  
- Export PDF/Excel reports  

---

## MVP Features

### Lecturer
- Login as Lecturer  
- Create and share feedback forms  
- View feedback results and trends  

### Student
- Open public form link  
- Rate lecturer on metrics (1–5 scale)  
- Submit anonymously  

### Admin
- Login as Admin  
- Manage lecturers, courses, and departments  
- View all feedback  
- Export PDF/Excel reports  

---

## System Functional Requirements

### Authentication
- Admin and Lecturer login  
- Students access forms without login  

### Lecturer Functional Requirements
- Create feedback forms  
- Generate and share unique links  
- View:
  - Number of responses  
  - Average score per metric  
  - Overall averages  
  - Performance trend graph  

### Student Functional Requirements
- Rate lecturers on:
  - Clarity  
  - Engagement  
  - Preparedness  
  - Explanation  
- Submit feedback anonymously  
- Cannot edit submissions  

### Admin Functional Requirements
- CRUD operations for lecturers, courses, and departments  
- Assign courses to lecturers  
- View all system feedback  
- Export summary (PDF) and raw data (Excel)  
- Generate system analytics  

---

##  Data Flow

1. **Lecturer logs in** → creates feedback form → system generates unique link  
2. **Lecturer shares link** via email/WhatsApp/LMS  
3. **Student submits feedback** → stored anonymously  
4. **Lecturer views results** → dashboard shows averages, responses, trends  
5. **Admin monitors system** → exports reports, manages entities  

---

## MVP Screens / Pages

**Lecturer:**
- Dashboard, Create Feedback Form, My Results, Performance Trend  

**Student:**
- Feedback Form Page  

**Admin:**
- Admin Dashboard, Manage Lecturers/Courses/Departments, View All Feedback, Export Reports  

---

## API Endpoints

### Lecturer
```http
POST /login
POST /feedback/create
GET  /feedback/:lecturerId/results
GET  /feedback/:lecturerId/trends
Student
h
Copy code
GET  /form/:id
POST /form/:id/submit
Admin
http
Copy code
POST /admin/login
CRUD /admin/lecturers
CRUD /admin/courses
CRUD /admin/departments
GET  /admin/reports
GET  /admin/export/pdf
GET  /admin/export/excel
```
### Tech Stack
Frontend: React, TailwindCSS, Axios, Recharts
Backend: Django REST Framework
Reports: pdfkit, json2csv / exceljs

### Installation
Clone the repo:

```bash
git clone https://github.com/Goddy-2024/lecturer-feedback-system.git
cd lecturer-feedback-system
```
Install backend dependencies:
 ```bash
pip install -r requirements.txt
Install frontend dependencies:
```

```bash
cd frontend
npm install
Run the backend server:
```
```bash
python manage.py runserver
```

Run the frontend server:
```bash
npm start
Open http://localhost:3000 in your browser
```

 License
This project is licensed under the MIT License.