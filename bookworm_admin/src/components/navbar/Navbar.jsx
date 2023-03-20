import "./navbar.scss"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
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
          <div className="item">
            <NotificationsNoneRoundedIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineRoundedIcon className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListRoundedIcon className="icon"/>
          </div>
          <Link to="/user" style={{ textDecoration: "none" }}>
          <div className="item">
           <img src="https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="avatar"/>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar