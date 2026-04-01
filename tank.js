
function redirectToNewPage(url) {
    window.location.href = url;
  }
  
  document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const searchTerm = document.getElementById("searchTerm").value;
  
    // Your logic to compare searchTerm with desired term(s) here
  
    if (searchTerm === "who is Drish's crush") {
      redirectToNewPage(/PT4/index11 .html);
    } 
    
    else {
       //Handle cases where searchTerm doesn't match any desired terms
      redirectToNewPage("index19.html");
     }
  });




  