  // function to search tables.

  function searchMenu() {
    const input = document.getElementById("menu-search").value.toLowerCase();
    const listItem = document.getElementById("menu-items");
    //alert(listItem[0]);
    //console.log(listItem);
    for (let i = 0; i < listItem.childElementCount; i++) {
      let name = listItem.children[i].children[0].textContent.toLowerCase();
      let name1 = listItem.children[i].children[2].textContent.toLowerCase();
      console.log(name1);
      if (name.indexOf(input) > -1 || name1.indexOf(input) > -1) {
       listItem.children[i].style.display = "";
      } 
      else {
        listItem.children[i].style.display = "none";
      }
    }
  }

  function searchTable() {
    const input = document.getElementById("table-search").value.toLowerCase();
    const listItem = document.getElementById("tables");
    for (let i = 0; i < listItem.childElementCount; i++) {
      let name = listItem.children[i].children[0].textContent.toLowerCase();
      
      if (name.indexOf(input) > -1 ) {
       listItem.children[i].style.display = "";
      } 
      else {
        listItem.children[i].style.display = "none";
      }
    }
  }
