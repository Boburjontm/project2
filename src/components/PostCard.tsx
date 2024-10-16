const PostCard = () => {
  return (
    <div className="bg-black text-white p-4 rounded-lg mb-4">
      <h3 className="text-xl">Lewis Hamilton</h3>
      <p>It’s a big world out there - explore! #nature #mountains</p>
      <div className="mt-2">
        <img src="/path-to-image" alt="Post" className="rounded-lg" />
      </div>
      <div className="flex mt-4 space-x-4">
        <span>120 Likes</span>
        <span>68 Comments</span>
        <span>74 Shares</span>
      </div>
    </div>
  );
};

export default PostCard;
