import "./sidebar.scss"
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from "react-router-dom";




const Sidebar = () => {
  return (
    <div className="sidebar">
                
      <div className="top">
      <Link to="/admin/" style={{ textDecoration: "none", color: "grey" }}>
        <span className="logo"> <img src={require("./bookworms_logo.png")} alt=""/></span>
      </Link>
   </div>
   <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/admin/" style={{ textDecoration: "none", color: "grey" }}>
          <li>
          <DashboardRoundedIcon className="icon"/>
            <span>DASHBOARD</span>  
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/admin/users" style={{ textDecoration: "none", color: "grey"}}>

          <li>
            <GroupRoundedIcon className="icon"/>
            <span>USERS</span>
          </li>
          </Link>
          <Link to="/admin/books" style={{ textDecoration: "none", color: "grey" }}>
          <li>
            <MenuBookRoundedIcon className="icon"/>
            <span>BOOKS</span>
          </li>
          </Link>
          <Link to="/admin/orders" style={{ textDecoration: "none", color: "grey" }}>
          <li>
            <ShoppingCartCheckoutRoundedIcon className="icon"/>
            <span>ORDERS</span>
          </li>
          </Link>
          
          <p className="title">USEFUL</p>
          <Link to="/admin/" style={{ textDecoration: "none", color: "grey" }}>
          <li>
            <BarChartRoundedIcon className="icon"/>
            <span>STATS</span>
          </li>
          </Link>
          <Link to="/admin/" style={{ textDecoration: "none", color: "grey" }}>

          </Link>

          <Link to="/admin/" style={{ textDecoration: "none", color: "grey" }}>

          </Link>
          <p className="title">USER </p>
          <Link to="/admin/user" style={{ textDecoration: "none", color: "grey" }}>
          <li>
            <AssignmentIndRoundedIcon className="icon"/>
            <span>PROFILE</span>
          </li>
          </Link>
          <Link to="/admin/" style={{ textDecoration: "none", color: "grey" }}>
          <li>
            <LogoutRoundedIcon className="icon"/>
            <span>LOGOUT</span>
          </li>
          </Link>
        </ul>
       
      </div>
      
    </div>
  )
}

export default Sidebar