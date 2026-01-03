# PSA App: UX Flow & Backend Integration Guide

This document outlines the user flow, button actions, and the corresponding backend API endpoints required to make the application functional.

---

## 🔐 1. Authentication Flow

### **A. Coach Login**
*   **Screen:** `app/auth/coach-login.tsx`
*   **User Action:** User enters Email & Password -> Taps **"Login"**.
*   **Backend Task:** Verify credentials and return an access token.
*   **Recommended API:**
    *   `POST /api/v1/auth/login`
    *   **Request:** `{ "email": "coach@psa.com", "password": "...", "role": "coach" }`
    *   **Response:** `{ "token": "jwt_token", "coachId": "123", "name": "Coach Name" }`

### **B. Parent Login**
*   **Screen:** `app/auth/parent-login.tsx`
*   **User Action:** User enters Mobile Number -> Taps **"Get OTP"** (Implicit step) -> Enters OTP -> Taps **"Login"**.
*   **Backend Task:** 
    1.  Send OTP to registered mobile number.
    2.  Verify OTP and link to the specific child/student account.
*   **Recommended APIs:**
    *   `POST /api/v1/auth/send-otp` -> `{ "phone": "+1234567890" }`
    *   `POST /api/v1/auth/verify-otp` -> `{ "phone": "...", "otp": "123456" }`
    *   **Response:** `{ "token": "jwt_token", "parentId": "456", "linkedStudents": [...] }`

---

## 👨‍🏫 2. Coach Panel Flow

### **A. Dashboard / Batch Selection**
*   **Screen:** `app/(coach)/batches.tsx`
*   **User Action:** Screen loads.
*   **Backend Task:** Fetch list of batches assigned to the logged-in coach.
*   **Recommended API:**
    *   `GET /api/v1/coach/batches` (Auth Header required)
    *   **Response:** `[ { "id": "b1", "name": "Elite Football U-14", "time": "4PM", "days": "MWF" }, ... ]`

### **B. Student List (Mark Attendance)**
*   **Screen:** `app/(coach)/attendance/[id].tsx`
*   **User Action:** Coach taps on a Batch Card.
*   **Backend Task:** Fetch all students in that batch along with their current fee status and (optional) pre-filled attendance for today.
*   **Recommended API:**
    *   `GET /api/v1/batches/{batchId}/students?date=YYYY-MM-DD`
    *   **Response:** 
        ```json
        [
          { "studentId": "s1", "name": "Aarav", "feeStatus": "paid", "photoUrl": "..." },
          { "studentId": "s2", "name": "Vihaan", "feeStatus": "pending", "photoUrl": "..." }
        ]
        ```

### **C. Submit Attendance**
*   **Screen:** `app/(coach)/attendance/[id].tsx`
*   **User Action:** Taps Green/Red toggles for students -> Taps **"Submit Attendance"** sticky button.
*   **Backend Task:** Save the attendance record for the specific batch and date.
*   **Recommended API:**
    *   `POST /api/v1/attendance`
    *   **Request:**
        ```json
        {
          "batchId": "b1",
          "date": "2023-10-24",
          "records": [
            { "studentId": "s1", "status": "present" },
            { "studentId": "s2", "status": "absent" }
          ]
        }
        ```

### **D. Reports**
*   **Screen:** `app/(coach)/reports.tsx`
*   **User Action:** Taps "Reports" tab.
*   **Backend Task:** Aggregate attendance data for the current month.
*   **Recommended API:**
    *   `GET /api/v1/coach/stats/monthly?month=10&year=2023`

---

## 👪 3. Parent Panel Flow

### **A. Child Dashboard**
*   **Screen:** `app/(parent)/child-dashboard.tsx`
*   **User Action:** Screen loads.
*   **Backend Task:** Fetch child's profile, overall stats, fee status, and recent activity.
*   **Recommended API:**
    *   `GET /api/v1/student/{studentId}/dashboard`
    *   **Response:** 
        ```json
        {
          "profile": { "name": "Aarav", "batch": "Football" },
          "fees": { "status": "paid" },
          "stats": { 
              "attendancePercentage": 85, 
              "attendanceLabel": "Excellent",
              "nextSession": {
                  "label": "Today",
                  "time": "04:00 PM"
              }
          },
          "recentActivity": [...]
        }
        ```

### **B. Attendance History**
*   **Screen:** `app/(parent)/attendance.tsx`
*   **User Action:** Taps "History" tab -> Changes Month.
*   **Backend Task:** Fetch calendar data for attendance (Present/Absent days).
*   **Recommended API:**
    *   `GET /api/v1/student/{studentId}/attendance?month=10&year=2023`

### **C. Fees & Invoices**
*   **Screen:** `app/(parent)/fees.tsx`
*   **User Action:** Taps "Fees" tab.
*   **Backend Task:** Fetch current due amount and payment history.
*   **Recommended API:**
    *   `GET /api/v1/student/{studentId}/fees`

---

## 🛠 Database Schema Recommendations

To support this flow, your database should likely have these core tables:

1.  **Users** (id, email, password_hash, role, phone)
2.  **Batches** (id, coach_id, name, timing, days)
3.  **Students** (id, parent_id, batch_id, name, fee_status)
4.  **Attendance** (id, batch_id, student_id, date, status)
5.  **Payments** (id, student_id, amount, date, status)
