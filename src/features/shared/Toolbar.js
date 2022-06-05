import logo from "../../styles/images/barber-icon.png";
import { useNavigate } from "react-router-dom";

function Toolbar({ email, signOut }) {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/dashboard', { replace: true })
  }

  const handleSignOut = () => {
    signOut();
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 hover:cursor-pointer" onClick={handleClick}>
        <img src={logo} alt="test" width="54" />
        <span className="ml-5 font-semibold text-xl tracking-tight">
          Deluxe barber
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div className="flex justify-center items-center gap-x-10 text-white">
          <p> {email} </p>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            onClick={handleSignOut}
          >
            Sign out
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Toolbar;
