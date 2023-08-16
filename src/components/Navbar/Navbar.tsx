import { useRef, useState } from "react";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow_down.svg";
import { ReactComponent as BurgerMenuIcon } from "../../assets/icons/burger-menu.svg";
import { Button } from "../common";
import { useClickOutside } from "./hooks";

export function Navbar() {
  const navbarRef = useRef<HTMLUListElement>(null);
  const [open, setIsOpen] = useState(false);
  useClickOutside({
    ref: navbarRef,
    callback: () => setIsOpen(false),
  });

  const handleNavbarState = () => {
    setIsOpen(!open);
  };

  return (
    <nav className="flex justify-between items-center h-[120px] relative">
      <img src="images/logo.png" width={120} height={45} alt="mobilink" />
      <ul className="md:flex hidden text-label font-medium">
        <li className="border-b-[1px] text-dark-blue border-dark-blue px-5 py-2">
          <span>Home</span>
        </li>
        <li className="px-5 py-2 flex items-center space-x-1">
          <span>Service</span>
          <ArrowDown />
        </li>
        <li className="px-5 py-2 flex items-center space-x-1">
          <span>Product</span>
          <ArrowDown />
        </li>
        <li className="px-5 py-2">
          <span>Testimonial</span>
        </li>
      </ul>
      <Button className="md:block hidden">Sign in</Button>
      <>
        <Button
          icon={
            <BurgerMenuIcon
              className="h-10 w-10 p-1"
              onClick={handleNavbarState}
            />
          }
          className="p-0 bg-transparent md:hidden block hover:bg-blue-500/30"
        />
        <ul
          ref={navbarRef}
          className={`md:hidden block space-y-4 p-4 bg-white w-full rounded-md shadow-md top-[100px] absolute transition-all duration-300 ease-in-out ${
            open
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-[300px] opacity-0 scale-95"
          }`}
        >
          <li className=" text-dark-blue border-dark-blue px-5 py-2">
            <span>Home</span>
          </li>
          <li className="px-5 py-2 flex items-center space-x-1">
            <span>Service</span>
            <ArrowDown />
          </li>
          <li className="px-5 py-2 flex items-center space-x-1">
            <span>Product</span>
            <ArrowDown />
          </li>
          <li className="px-5 py-2">
            <span>Testimonial</span>
          </li>
        </ul>
      </>
    </nav>
  );
}
