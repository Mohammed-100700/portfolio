import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Navbar = () => {
  const icons = [
    { url: "/", icon: <FaGithub color="white" size={25} /> },
    { url: "/", icon: <FaLinkedin color="white" size={25} /> },
    { url: "/", icon: <FaFacebook color="white" size={25} /> },
    { url: "/", icon: <MdOutlineEmail color="white" size={25} /> },
  ];

  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between md:justify-evenly items-center p-4">
      {/* Logo */}
      <img
        className="w-[100px] rounded-full"
        src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-m-design_460848-10168.jpg"
        alt=""
      />

      {/* Menu */}
      <ul className={`hidden md:flex text-white items-center gap-16`}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Mobile Menu and icons */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col text-white justify-center items-center md:hidden"
        }
      >
        <li className="text-4xl py-6">Home</li>
        <li className="text-4xl py-6">About</li>
        <li className="text-4xl py-6">Projects</li>
        <li className="text-4xl py-6">Contact</li>

        <ul className="flex gap-4 mt-9">
          {icons.map((icon, index) => (
            <li>
              <a key={index} href={icon.url}>
                {icon.icon}
              </a>
            </li>
          ))}
        </ul>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars color="white" /> : <FaTimes color="white" />}
      </div>

      {/* Social icons */}
      <ul className="hidden md:flex gap-4">
        {icons.map((icon, index) => (
          <li>
            <a key={index} href={icon.url}>
              {icon.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
