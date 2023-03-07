import "./booksingle.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";


const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">EDIT</div>
            <h1 className="title">BOOK INFORMATION</h1>
            <div className="item">
              <img
                src="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Atomic Habits</h1>
                <div className="detailItem">
                  <span className="itemKey">Author:</span>
                  <span className="itemValue">James Clear</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">1234</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <div id="description"></div>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Stock:</span>
                  <span className="itemValue">35</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <h1 className="title">User Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};




export default Single;


