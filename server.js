const express = require("express");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const itemRoutes = require("./routes/items");
const requestRoutes = require("./routes/requests");
const path = require("path");
const app = express();
const fs = require('fs');
const uploadDir = path.join(__dirname, 'uploads');

// ตรวจสอบว่ามีโฟลเดอร์หรือยัง ถ้าไม่มีให้สร้างใหม่
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log('📁 Created uploads directory');
}
app.use(express.json());
// ✅ เสิร์ฟโฟลเดอร์ `uploads/` ให้สามารถเข้าถึงรูปภาพที่อัปโหลดได้
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/items", itemRoutes);
app.use("/requests", requestRoutes);

app.listen(8080, () => console.log("Server running on port 8080"));
   