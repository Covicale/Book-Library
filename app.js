function Book(name, author, date, pages){

    this.name = (name == "") ? "Invalid Name" : name;
    this.author = (author == "") ? "Invalid Author" : author;
    this.date = (date == "") ? "Invalid Date" : date;
    this.name = (pages == "") ? "Invalid nº Pages" : pages;

}

let optionsMenu = document.getElementById("optionsMenu");
let titleInput = document.getElementById("titleInput");
let authorInput = document.getElementById("authorInput");
let dateInput = document.getElementById("dateInput");
let pagesInput = document.getElementById("pagesInput");

let bookshelf = document.getElementById("bookshelf");
let originalBook = document.getElementById("originalBook");

addNew.onclick = () => render();

/*addNew.onclick = () =>{
    bgOptions.style.visibility = "visible";
    optionsMenu.style.transform = "scale(1)";
}*/

function render(){

    alert("work");

    let bookDiv = originalBook.cloneNode(true);
    try{
    let allKeys = Object.keys(localStorage);
    }catch{
        localStorage.setItem();
        let allKeys = Object.keys(localStorage);
    }
}