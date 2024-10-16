import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Creator {
  id: number;
  name: string;
  followed_by: string;
}

const TopCreators = () => {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopCreators = async () => {
      try {
        // API manzilini .env faylidan olamiz
        const baseUrl = import.meta.env.VITE_APP_BASE_URL;
        console.log(`Fetching from: ${baseUrl}/api/top-creators`); // Tekshirish uchun konsolga yozib qo'yamiz
        
        const response = await axios.get(`${baseUrl}/api/top-creators`);
        console.log('API Response:', response.data); // API'dan kelgan ma'lumotni konsolga chiqazamiz
        
        setCreators(response.data); // Ma'lumotni holatga saqlaymiz
        setLoading(false);
      } catch (err: any) {
        console.error('API Error:', err); // Xatoni konsolda ko'rsatish
        setError('Ma\'lumotni yuklashda xatolik yuz berdi');
        setLoading(false);
      }
    };

    fetchTopCreators(); // Ma'lumotni yuklash funksiyasi
  }, []);

  if (loading) {
    return <div>Yuklanmoqda...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4 bg-black text-white rounded-lg">
      <h2 className="text-xl mb-4">Top Creators</h2>
      <ul>
        {creators.map((creator) => (
          <li key={creator.id} className="mb-2 flex justify-between items-center">
            <span>{creator.name}</span>
            <span className="text-gray-400">Followed by: {creator.followed_by}</span>
            <button className="ml-4 bg-blue-500 px-3 py-1 rounded">Follow</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCreators;
