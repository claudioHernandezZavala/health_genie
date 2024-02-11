import React from 'react';

function Header() {
  return (
    <header className="bg-blue-500 text-white py-4 px-8 flex justify-between items-center">
      <div className="text-xl font-bold">Health_genie</div>
      <nav className="space-x-4">
        <a href="#faq" className="hover:underline">FAQ</a>
        <a href="#about" className="hover:underline">About This Project</a>
        <a href="#tips" className="hover:underline">Diabetes Tips</a>
      </nav>
    </header>
  );
}

export default Header;
