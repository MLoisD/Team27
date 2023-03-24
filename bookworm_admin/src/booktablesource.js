export const bookColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "bookname",
      headerName: "Title",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.bookname}
          </div>
        );
      },
      
    },
    {
      field: "author",
      headerName: "Author",
      width: 230,
    },
  
    {
      field: "genre",
      headerName: "Category",
      width: 100,
    },
    
    {
      field: "stock",
      headerName: "Stock",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.stock}`}>
            {params.row.stock}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const bookRows = [
    {
      id: 6789,
      bookname: "12 Rules for Life",
      img: "https://cdn.waterstones.com/bookjackets/large/9780/1419/9780141988511.jpg",
      stock: "63",
      author: "Jordan B. Peterson",
      genre: "Philosophy",
      
    },
    {
      id: 1234,
      bookname: "Atomic Habits",
      img: "https://cdn.waterstones.com/override/v1/large/9781/8479/9781847941831.jpg",
      stock: "35",
      author: "James Clear",
      genre: "Self Help",
    },
  
    {
      id: 2345,
      bookname: "Spare",
      img: "https://cdn.waterstones.com/bookjackets/large/9780/8575/9780857504791.jpg",
      stock: "249",
      author: "Prince Harry",
      genre: "Biography",
    },
    
  ];
  
  