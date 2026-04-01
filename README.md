# 💰 Finance Dashboard

## 📌 Overview
This is a frontend finance dashboard built to help users track and understand their financial activity. The project focuses on UI design, component structure, and state management.

---

## 🚀 Features

### 📊 Dashboard Overview
- Summary cards (Balance, Income, Expenses)
- Line chart (Balance trend)
- Pie chart (Spending breakdown)

### 🧾 Transactions
- View transaction list
- Search by category
- Filter by income/expense
- Delete transactions (Admin only)

### 👤 Role-Based UI
- Viewer → Can only view data
- Admin → Can delete transactions

### 💡 Insights
- Highest spending category
- Total expenses
- Savings calculation
- Spending percentage analysis

### 💾 Data Persistence
- Transactions stored in localStorage
- Data remains after page refresh

### 🌙 UI Enhancements
- Clean and responsive design

---

## 🛠 Tech Stack
- React (Vite)
- Tailwind CSS
- Recharts

---

## 📂 Project Structure

- src/
- components/
- cards/
- charts/
- transactions/
- insights/
- pages/
- Dashboard.jsx

---

## ⚙️ Setup Instructions

```bash
git clone <your-repo-link>
cd finance-dashboard
npm install
npm run dev