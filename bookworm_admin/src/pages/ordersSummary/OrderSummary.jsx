import "./orderSummary.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Summarytable from "../../components/summeryTable/Summarytable";

const Orderlist = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
          <Navbar/>
          <Summarytable/>
        </div>
      </div>
   
  );
};

export default Orderlist;
