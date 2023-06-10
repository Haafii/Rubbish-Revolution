import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/home"} className="flex items-center text-base">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/leaderbord"} className="flex items-center text-base">
          Rankings
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/chat"} className="flex items-center text-base">
          Chat
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/scanner"} className="flex items-center text-base">
          Scanner
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/reminder"} className="flex items-center text-base">
        Reminder
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/cleaning"} className="flex items-center text-base">
        Clean
        </Link>
      </Typography>
    </ul>
  );

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    localStorage.removeItem('userQr');
    localStorage.removeItem('status');
    localStorage.removeItem('garbageQr');
    localStorage.removeItem('productQr');
    localStorage.removeItem('admincontrolbuttonvalue');
    localStorage.removeItem('money');
  };

  return (
    <Navbar className="rounded-none border-none  bg-primary mx-auto max-w-screen-3xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="# "
          variant="small"
          className="mr-4 cursor-pointer py-1.5 "
        >
          <span className="">LOGO</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Link to={"/"}>
          <Button variant="gradient" size="sm" className="hidden lg:inline-block bg-sky-500 hover:drop-shadow-sm hover:bg-sky-600 rounded-2xl delay-100 hover:translate-y-0.5 hover:scale-110 duration-300" onClick={handleLogout}>
            <span>Log Out</span>
          </Button>
        </Link>
        <IconButton
          variant="text"
          className="flex ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Link to={"/"}>
            <Button variant="gradient" size="sm" fullWidth className="mb-2 bg-sky-500 hover:drop-shadow-sm hover:bg-sky-600 hover:translate-y-0.5 hover:scale-105 duration-300" onClick={handleLogout}>
              <span>Log Out</span>
            </Button>
          </Link>
        </div>
      </MobileNav>
    </Navbar>
  );
}