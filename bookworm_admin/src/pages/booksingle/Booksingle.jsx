import React, { useCallback } from "react";
import "./booksingle.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import {PageTitle} from "../../components/pageTitle/PageTitle";
import {InvoiceIcon} from "./InvoiceIcon";
import {Button} from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import {InvoiceTable} from "./InvoiceTable";



const Single = () => {
    const navigate = useNavigate();

    const goToNewInvoice = useCallback(() => {
        navigate("/orders/orderSummary");
    }, [navigate]);

    return (
      <>
          <div className="single">
              <Sidebar />
           <div className="singleContainer">
               <Navbar />
               <div className="top">
                 <div className="left">
          <div>
              <div className="flex flex-col sm:flex-row flex-wrap p-4">
                  <div className="sm:mr-4">
                      <PageTitle  title="Orders"/>
                  </div>
                  <div className="flex-1">
                      <Button onClick={goToNewInvoice} block={1} size="sm">
                          <InvoiceIcon />
                          <span className="inline-block ml-2"> Add New Order </span>
                      </Button>
                  </div>
              </div>
              <div className="bottom">
              <div className="flex flex-wrap">
                  <div className="w-full px-4 mb-4 sm:mb-1">
                      <InvoiceTable showAdvanceSearch />
                  </div>
              </div>
              </div>
          </div>
                 </div>
               </div>
           </div>

          </div>
        </>
    // <div className="single">
    //   <Sidebar />
    //   <div className="singleContainer">
    //     <Navbar />
    //     <div className="top">
    //       <div className="left">
    //         <div className="editButton">EDIT</div>
    //         <h1 className="title">BOOK INFORMATION</h1>
    //         <div className="item">
    //           <img
    //             src="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
    //             alt=""
    //             className="itemImg"
    //           />
    //           <div className="details">
    //             <h1 className="itemTitle">Atomic Habits</h1>
    //             <div className="detailItem">
    //               <span className="itemKey">Author:</span>
    //               <span className="itemValue">James Clear</span>
    //             </div>
    //             <div className="detailItem">
    //               <span className="itemKey">ID:</span>
    //               <span className="itemValue">1234</span>
    //             </div>
    //             <div className="detailItem">
    //               <span className="itemKey">Description:</span>
    //               <div id="description"></div>
    //             </div>
    //             <div className="detailItem">
    //               <span className="itemKey">Stock:</span>
    //               <span className="itemValue">35</span>
    //             </div>
    //             <div className="detailItem">
    //               <span className="itemKey">Age Rating:</span>
    //               <span className="itemValue">14</span>
    //             </div>
    //             <div className="detailItem">
    //               <span className="itemKey">Cover Type:</span>
    //               <span className="itemValue">Hardback</span>
    //             </div>
    //             <div className="detailItem">
    //               <span className="itemKey">Price:</span>
    //               <span className="itemValue">£19.90</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //
    //     <div className="bottom">
    //       <h1 className="title">Book Orders</h1>
    //       <List />
    //     </div>
    //   </div>
    // </div>
  );
};




export default Single;


