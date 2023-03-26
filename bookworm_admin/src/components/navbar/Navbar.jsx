import "./navbar.scss"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
       
        <div className="items">
          
          <div className="item">
            <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({ type: "TOGGLE" })}/>
          </div>
          <Link to="/user" style={{ textDecoration: "none" }}>
          <div className="item">
           <PersonOutlineIcon/>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar