export const orderColumns = [
    { field: "id", headerName: " Order ID", width: 100 },
    {
      field: "customer",
      headerName: "Customer",
      width: 230,
    },
  
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
      <div className={`cellWithStatus ${params.row.amount}`}>
           <span className={`status ${params.row.status}`}>{params.row.status}</span>
          </div>
         );
        },
    },
    {
      field: "items",
      headerName: "Items",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.amount}`}>
            {params.row.amount}
          </div>
        );
      },
    },

  ];
  
  //temporary data
  export const orderRows = [
    {
      id: 7872387,
      bookname: "12 Rules for Life",
      img: "https://cdn.waterstones.com/bookjackets/large/9780/1419/9780141988511.jpg",
      customer: "Jane Doe",
      amount: "2",
      status: "Declined",
      stock: "63"
      
    },
    
    {
      id: 9257934,
      bookname: "Atomic Habits",
      img: "https://cdn.waterstones.com/override/v1/large/9781/8479/9781847941831.jpg",
      customer: "Jane Doe",
      amount: "3",
      status: "Fulfiled",
      stock: "35"

    },
  
    {
      id: 2344345,
      bookname: "Spare",
      customer: "Micheal Doe",
      img: "https://cdn.waterstones.com/bookjackets/large/9780/8575/9780857504791.jpg",
      amount: "1",
      status: "Pending ",
      stock: "249"

    },
    
  ];
  