import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdFacebook } from "react-icons/md";
import { ImPinterest, ImTwitter, ImWhatsapp, ImYoutube } from "react-icons/im";
import Logo from "./Logo";
import "./NavBar.css";

const NavLinkItem = ({ to, text }) => (
  <Link to={to} className="flex items-center gap-2 font-medium text-sm">
    <HiOutlineArrowNarrowRight className="text-primary text-xl" />
    {text}
  </Link>
);

const socialMediaLinks = [
  { Icon: MdFacebook, color: "text-blue-500", text: "Facebook" },
  { Icon: ImYoutube, color: "text-red-500", text: "Youtube" },
  { Icon: ImPinterest, color: "text-red-700", text: "Pinterest" },
  { Icon: ImTwitter, color: "text-sky-400", text: "Twitter" },
  { Icon: ImWhatsapp, color: "text-green-500", text: "Whatsapp" },
];

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/availableFoods", text: "Available Food" },
  { to: "/manageMyFood", text: "Manage My Foods" },
  { to: "/myFoodRequest", text: "My Food Request" },
  { to: "/addFood", text: "Add Food" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="px-5 md:px-44 lg:px-52 mt-8 border-t-2">
      <div className="pt-6 lg:pt-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-7">
        <div className="flex justify-start">
          <div>
            <Logo></Logo>
            <p className="text-sm text-gray-500 font-medium mt-3">
              @ {currentYear} FoodBuddy.dev
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold cart">Page</h1>
          <div className="my-3 space-y-2">
            {navLinks.map((link, index) => (
              <NavLinkItem key={index} to={link.to} text={link.text} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-semibold cart">Legal</h1>
          <div className="my-3 space-y-2">
            <NavLinkItem to="/" text="Terms & Conditions" />
            <NavLinkItem to="/" text="License" />
            <NavLinkItem to="/" text="Contact" />
          </div>
        </div>
        <div>
          <h1 className="font-semibold cart">Social</h1>
          <div className="my-3 space-y-2">
            {socialMediaLinks.map(({ Icon, color, text }, index) => (
              <div key={index} className="flex items-center gap-1">
                <Icon className={`${color} text-xl`} />
                <p className="font-medium text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm font-medium text-center cart mt-5 pb-6 lg:pt-8 lg:pb-8">
        © theFoodBuddy. {currentYear}, Bangladesh. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
