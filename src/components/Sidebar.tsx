import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-black text-white w-64 h-screen p-4">
      <div className="flex flex-col">
        <Link to="/" className="text-lg mb-4">Home</Link>
        <Link to="/explore" className="text-lg mb-4">Explore</Link>
        <Link to="/people" className="text-lg mb-4">People</Link>
        <Link to="/saved" className="text-lg mb-4">Saved</Link>
        <Link to="/reels" className="text-lg mb-4">Reels</Link>
        <Link to="/chats" className="text-lg mb-4">Chats</Link>
        <Link to="/login" className="mt-auto">Logout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
