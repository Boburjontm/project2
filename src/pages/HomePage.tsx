import PostCard from '../components/PostCard';

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Feed</h1>
      <PostCard /> {/* Har bir postni ko'rsatadi */}
    </div>
  );
};

export default HomePage;
