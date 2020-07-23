function Book(name, author, date, pages){

    this.name = (name == "") ? "Invalid Name" : name;
    this.author = (author == "") ? "Invalid Author" : author;
    this.date = (date == "") ? "Invalid Date" : date;
    this.pages = (pages == "") ? "Invalid nº Pages" : pages;

}

let optionsMenu = document.getElementById("optionsMenu");
let titleInput = document.getElementById("titleInput");
let authorInput = document.getElementById("authorInput");
let dateInput = document.getElementById("dateInput");
let pagesInput = document.getElementById("pagesInput");

let bookshelf = document.getElementById("bookshelf");

addNew.onclick = () =>{
    clearInputs();
    bgOptions.style.visibility = "visible";
    optionsMenu.style.transform = "scale(1)";
}

cancelNew.onclick = () => closeWindow();

submitNew.onclick = () =>{

    let keyLength = Object.keys(localStorage).length // KEYS

    localStorage.setItem("book" + keyLength, JSON.stringify(new Book(titleInput.value, authorInput.value, dateInput.value, pagesInput.value)));

    closeWindow()
    render();
}

function closeWindow(){

    bgOptions.style.visibility = "hidden";
    optionsMenu.style.transform = "scale(0)";

}

function clearInputs(){

    titleInput.value = "";
    authorInput.value = "";
    dateInput.value = "";
    pagesInput.value = "";

}

function render(){

    let allKeys = Object.keys(localStorage);
    
    if (allKeys.length == 0){
        bookshelf.innerHTML = "Try to add a <b> new book </b> pressing the button upper right!";
    }else{
        bookshelf.innerHTML = "";
    }

    allKeys.forEach(key => {

        keyJson = JSON.parse(localStorage.getItem(key));
        let newBook = document.createElement("div");
        newBook.className = "book";
        newBook.id = key;

        let titleBook = document.createElement("h2")
        titleBook.innerHTML = "Title: " + keyJson.name;

        let dateBook = document.createElement("h4");
        dateBook.innerHTML = "Date: " + keyJson.date;
        
        let delBook = document.createElement("button");
        delBook.className = "deleteBook";
        delBook.style.fontWeight = "bold";
        delBook.innerHTML = "DELETE BOOK";

        let authorBook = document.createElement("h3");
        authorBook.innerHTML = "Author: " + keyJson.author;

        let pagesBook = document.createElement("h4")
        pagesBook.innerHTML = "Pages: " + keyJson.pages;

        newBook.append(titleBook, dateBook, delBook, authorBook, pagesBook);
        
        bookshelf.appendChild(newBook); 

    })
}

document.addEventListener("click", e =>{
    if (e.target.className == "deleteBook"){
        localStorage.removeItem(e.target.parentElement.id);
        render();
    }
})

window.onload = render();