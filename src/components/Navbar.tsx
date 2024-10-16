import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-black text-white p-4 flex items-center justify-between">
      {/* Logotip yoki ism */}
      <div className="text-xl font-bold">
        Snapgram
      </div>

      {/* Hikoyalar qismi */}
      <div className="flex space-x-4">
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-sm">My Story</span>
        </div>
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-sm">johnsc</span>
        </div>
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-sm">ednamz</span>
        </div>
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-sm">Harrypres</span>
        </div>
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-sm">joeburto</span>
        </div>
      </div>

      {/* Foydalanuvchi avatar qismi */}
      <div className="flex items-center space-x-4">
        <div className="text-sm">Lewis Hamilton</div>
        <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
