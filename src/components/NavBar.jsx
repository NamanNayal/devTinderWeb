import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const NavBar = () => {
  const user = useSelector((store) => store.user);

  const handleLogout = async () =>{
    try{
      const res = await axios.post(BASE_URL+"/logout",{},{withCredentials:true});
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to= "/" className="btn btn-ghost text-xl">DevTinder</Link>
        </div>
        {user && (
        <div className="flex gap-2">
            <div className="dropdown dropdown-end mx-5 flex items-center">
              <p className="px-4">Welcome, {user.firstName}</p>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full flex">
                  <img alt="Tailwind CSS Navbar component" src={user.photoUrl} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          
        </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
