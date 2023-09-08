import Search from "../search";
import { IoMdNotifications, IoMdPerson } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center">
      <h1 className="text-2xl text-brand">Dashboard</h1>
      <Search />
      <IoMdNotifications size={50} />
      <div className="flex items-center">
        <IoMdPerson size={50}/>
        Username
      </div>
    </div>
  );
};

export default Navbar;
