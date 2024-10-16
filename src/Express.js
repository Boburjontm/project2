const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); // Parolni shifrlash uchun
const jwt = require('jsonwebtoken'); // Token yaratish uchun
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Foydalanuvchilarni saqlash uchun oddiy array (ma'lumotlar bazasi o'rniga)
let users = [];

// Ro'yxatdan o'tish endpointi
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  // Emailni tekshirish
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'Bu email allaqachon ro\'yxatdan o\'tgan.' });
  }

  // Parolni shifrlash
  const hashedPassword = await bcrypt.hash(password, 10);

  // Foydalanuvchini saqlash
  const newUser = { email, password: hashedPassword };
  users.push(newUser);

  // Token yaratish
  const token = jwt.sign({ email }, 'your_jwt_secret', { expiresIn: '1h' });

  // Muvaffaqiyatli javob
  res.status(201).json({ message: 'Ro\'yxatdan o\'tish muvaffaqiyatli amalga oshirildi', token });
});

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishga tushdi`);
});
