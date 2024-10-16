import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const baseUrl = import.meta.env.VITE_APP_BASE_URL; // .env faylidan olingan URL
      const response = await axios.post(`${baseUrl}/api/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token; // Tokenni olish
        localStorage.setItem('authToken', token); // Tokenni saqlash
        navigate('/home'); // Logindan muvaffaqiyatli o'tgandan so'ng "home" sahifasiga o'tish
      }
    } catch (err: any) {
      console.error('Login error:', err.response?.data || err.message); // Xatoliklarni konsolga chiqarish
      setError('Loginda xatolik yuz berdi'); // Xatolik xabarini ko'rsatish
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded shadow-md w-96">
        <h2 className="text-white text-2xl mb-6 text-center">Login</h2>

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

        <div className="mb-6">
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

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Kirish
        </button>

        <p className="text-white mt-4">
          Hisobingiz yo'qmi? <Link to="/signup" className="text-blue-500">Ro'yxatdan o'tish</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
