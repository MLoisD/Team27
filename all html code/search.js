// const searchInput = document.getElementById('search_item');
// searchInput.addEventListener('input', searchItems);

// const message = document.createElement('div');
// message.textContent = 'No items found';
// message.style.display = 'none';
// document.querySelector('.product_list').appendChild(message);

// function searchItems() {
//   const searchQuery = searchInput.value.toLowerCase();
//   const items = document.querySelectorAll('.card');
//   let matchFound = false;
  
//   items.forEach(item => {
//     const title = item.querySelector('.title').textContent.toLowerCase();
//     const author = item.querySelector('.author_name').textContent.toLowerCase();
    
//     if(title.includes(searchQuery) || author.includes(searchQuery)) {
//       item.style.display = 'block';
//       matchFound = true;
//     } else {
//       item.style.display = 'none';
//     }
//   });
  
//   if(matchFound) {
//     message.style.display = 'none';
//   } else {
//     message.style.display = 'block';
//   }
// }





const search = () =>{
    const searchbox = document.getElementById("search_item").value.toUpperCase();
    const storeitems = document.getElementById("product_container")
    const product = document.querySelectorAll (".card")
    const pname = storeitems.getElementsByTagName ("h2")

    for (var i = 0; i < pname.length; i++){
         let match = product [i].getElementsByTagName('h2')[0];
        if (match){
        let textvalue = match. textContent || match.innerHTML

        if (textvalue.toUpperCase().indexOf (searchbox) > -1) {
        product[i].style.display = "";
        }else {
       product[i].style.display = "none";
    }
}
    }
}

    






