
function search() {
    // Get the user input from the search bar
    const input = document.getElementById("search_item").value.toLowerCase();
    
    // Get all product cards on the page
    const cards = document.querySelectorAll(".card");
    
    // Loop through each card and check if the title contains the search input
    for (let i = 0; i < cards.length; i++) {
      const title = cards[i].querySelector(".title").textContent.toLowerCase();
      const author = cards[i].querySelector(".author_name").textContent.toLowerCase();
    
      // If the title contains the search input, show the card; otherwise, hide the card
      if (title.includes(input) || author.includes(input))  {
        cards[i].style.display = "block";
      } else {
        cards[i].style.display = "none";
      }
    }
  }

  const searchBar = document.getElementById("search_item");
  searchBar.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      search();
    }
  });

    






