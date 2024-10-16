import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Parollar mos kelmadi!');
      return;
    }

    try {
      const baseUrl = import.meta.env.VITE_APP_BASE_URL; // .env faylidan olingan URL
      const response = await axios.post(`${baseUrl}/api/signup`, {
        email,
        password,
      });

      if (response.status === 201) {
        const token = response.data.token; // Tokenni olish
        localStorage.setItem('authToken', token); // Tokenni saqlash
        navigate('/home'); // Ro'yxatdan muvaffaqiyatli o'tgandan so'ng "home" sahifasiga o'tish
      }
    } catch (err: any) {
      console.error('SignUp error:', err.response?.data || err.message); // Xatoliklarni konsolga chiqarish
      setError('Ro‘yxatdan o‘tishda xatolik yuz berdi'); // Xatolik xabarini ko'rsatish
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded shadow-md w-96">
        <h2 className="text-white text-2xl mb-6 text-center">Sign Up</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            className="w-full p-2 rounded bg-gray-900 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="password">Parol:</label>
          <input
            id="password"
            type="password"
            className="w-full p-2 rounded bg-gray-900 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-white mb-1" htmlFor="confirmPassword">Parolni Tasdiqlang:</label>
          <input
            id="confirmPassword"
            type="password"
            className="w-full p-2 rounded bg-gray-900 text-white"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
          Ro'yxatdan o'tish
        </button>

        <p className="text-white mt-4">
          Hisobingiz bormi? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
