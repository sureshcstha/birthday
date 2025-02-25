import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-gray-700 text-white px-4 py-2 rounded'
      : 'text-white hover:bg-blue-600 hover:text-white px-4 py-2 rounded';

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-xl font-semibold">
          BirthdayMails
        </NavLink>
        <div className="space-x-4">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
