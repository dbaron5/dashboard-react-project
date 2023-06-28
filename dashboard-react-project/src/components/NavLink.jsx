/* eslint-disable react/prop-types */
const NavLink = ({ link, isMenuOpen }) => {
  return (
    <div className="text=white hover:bg-white hover:text-lilac ease-in duration-200 h-10 flex items-center pl-2 rounded-1-full hover:cursor-pointer rounded-l-lg rounded-r-lg">
      <img src={link.icon} className="h-5 w-5 mr-2" alt={link.name}></img>
      {isMenuOpen && <>{link.name}</>}
    </div>
  );
};

export default NavLink;
