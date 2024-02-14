import { PiFileLock } from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";


const links = [
  {
    name: "Dashboard",
    route: "/dashboard",
  },
  {
    name: "Appointments",
    route: "/appointments",
  },
  {
    name: "Donations",
    route: "/donations",
  },
  {
    name: "Community Forum",
    route: "/community",
},
  {
    name: "Learning Center",
    route: "/learning",
  },
];

const Navlinks = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <nav className="w-full">
      <ul>
        {links.map((link) => (
          <li key={link.route}>
            <NavLink
              to={link.route}
              className={`flex flex-row   items-center mb-5 px-3 ${
                pathname === link.route
                  ? "rounded-lg bg-red bg-opacity-65 text-white py-[.4rem] lgss:w-[220px] w-[200px] pl-4"
                  : pathname.includes(link.route)
                  ? "rounded-lg bg-red bg-opacity-65 text-white py-[.4rem] lgss:w-[220px] w-[200px] pl-4"
                  : ""
              }`}
            >
              <span className="text-[1.1rem] font-semibold leading-7 whitespace-nowrap">
                {link.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navlinks;