import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Tables from "../../components/usertable/Usertable.jsx"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Tables/>
      </div>
    </div>
  )
}

export default List
