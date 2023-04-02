import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import {bookRows} from "../../datatablesource";

import "./edit.scss";
const Edit = ({ inputs, title }) => {
  const params = useParams();
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const location = useLocation();


  const handleCancel = () => {
    navigate((`/books/${id}`), { replace: true })
  }


  const id = params.id

  const [data, setData] = useState(bookRows)
  const [bookMap, setBookMap] = useState([])

  const handleBookMap = () => {
    if (id === params.bookId) {
      const book = data.filter(item => item.id === parseInt(id));
      setBookMap(book);
    }else {
      setBookMap([]);
    }
  }

  useEffect((handleBookMap), []);

  const [valId, setId] = useState("");
  const [bookname, setBookname] = useState("");
  const [author, setAuthor] = useState("");
  const [stock, setStock] = useState("");
  const [genre, setGenre] = useState("");

  const handleChangeId = (e) => {
    setId( e.target.value)
  }
  const handleChangebookname= (e) => {
    setBookname(e.target.value)
  }
  const handleChangeauthor= (e) => {
    setAuthor(e.target.value)
  }
  const handleChangestock= (e) => {
    setStock(e.target.value)
  }
  const handleChangegenre= (e) => {
    setGenre(e.target.value)
  }

  const handleUpdate = (e) => {
     e.preventDefault();
    const itemObj = {
      id: valId,
      bookname: bookname,
      author: author,
      stock: stock,
      genre: genre,
      img: file
    }
    let arr = []
    arr.push(itemObj);
    console.log("arr", arr);
  }


      return (
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>{title}</h1>
          </div>
          {bookMap ? bookMap.map((item, key) =>
          <div className="bottom" key={item.id}>
            <div className="left">
              <img
                  src={
                    file
                        ? URL.createObjectURL(file)
                        : item.img
                  }
                  alt=""
              />
            </div>
            <div className="right">
              <form onSubmit={handleUpdate}>
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                      type="file"
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      style={{ display: "none" }}
                  />
                </div>
                    <div className="formInput">
                      <label>ID</label>
                      <input type="text" value={valId ? valId : item.id} placeholder={item.id} onChange={handleChangeId}/>

                      <label>TITLE</label>
                      <input type="text" value={bookname ?  bookname : "" } placeholder={ item.bookname } onChange={handleChangebookname} />

                      <label>AUTHOR</label>
                      <input type="text" value={author ? author : ""} placeholder={item.author} onChange={handleChangeauthor}/>

                      <label>STOCK</label>
                      <input type="text"  value={stock ? stock : ""} placeholder={item.stock} onChange={handleChangestock}/>

                      <label>GENRE</label>
                      <input type="text"  value={genre ? genre : ""} placeholder={item.genre} onChange={handleChangegenre}/>
                    </div>
              </form>
              <button onClick={handleCancel}>CANCEL</button>
              <button onClick={handleUpdate}>UPDATE</button>
            </div>
          </div>
          ) :
              (
                  <div className="new">
                    <Sidebar />
                    <div className="newContainer">
                      <Navbar />
                      <div className="top">
                        <h1>{title}</h1>
                      </div>
                      <div className="bottom">
                        <div className="left">
                          <img
                              src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                              }
                              alt=""
                          />
                        </div>
                        <div className="right">
                          <form>
                            <div className="formInput">
                              <label htmlFor="file">
                                Image: <DriveFolderUploadOutlinedIcon className="icon" />
                              </label>
                              <input
                                  type="file"
                                  id="file"
                                  onChange={(e) => setFile(e.target.files[0])}
                                  style={{ display: "none" }}
                              />
                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                  <label>{input.label}</label>
                                  <input type={input.type} placeholder={input.placeholder} />
                                </div>

                            ))}

                          </form>
                          <button>Send</button>
                        </div>
                      </div>

                    </div>
                  </div>
              )

          }
        </div>
      </div>
  );
};

export default Edit;


