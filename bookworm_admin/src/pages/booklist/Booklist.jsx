import "./booklist.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Booktable from "../../components/booktable/Booktable"

const Booklist = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Booktable/>
      </div>
    </div>
  )
}

export default Booklist