const books = [
    {
        title : "the alchemist",
        author : "person",
        genre :"Mystery",
        pages: "125 ", 
        status: 'Read',
        id: "firstBook",
    },
    {
        title : "the bible",
        author : "persone",
        genre :"Mystery",
        pages: "125 ", 
        status: 'Read',
        id: "secondtBook",
    },
    {
        title : "the good book",
        author : "persone",
        genre :"Thriller",
        pages: "125 ", 
        status:'not',
        id: "thirdBook",
    },
    
];
console.log(books);
const addBook = document.querySelector('.add-book');
const aboutBook = document.querySelector('.aboutBook');
const addButton = document.querySelector('.btnadd');

// grab  all of  inputs
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector("#pages");
const genreInput = document.querySelector(".select-form");

    const aboutBooks = () => {
        
        const detailBook = books.map(book => 
             `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.genre}</td>
                <td>
                  <input type="checkbox" id="input" name="scales">
                  <button class = "delete">delete</button>
                </td>
            </tr>
        `  
        )
        aboutBook.innerHTML = detailBook.join(' ') ;
};
// grab the option

console.log(aboutBooks());
const inputBook = (e) => {    
    e.preventDefault();
    const html = 
    `
    <tr>
        <td>${titleInput.value}</td>
        <td>${authorInput.value}</td>
        <td>${pagesInput.value}</td>
        <td>${genreInput.value}</td>
        <td>
          <input type="checkbox" id="scales" name="scales"
          checked>
          <button class = "delete" value="${item.id}">delete</button>
        </td>
    </tr>
`  
  aboutBook.innerHTML += html;
}

// event llistener
addButton.addEventListener('click', inputBook);

// ather methode 

const checkbutton = () => {
    const readers = document.querySelector('.readers');
    const btn = document.querySelector('.btnadd');
        btn.onclick = () => {
            const result = readers.value;
            console.log(result); 
        };
        console.log(btn.onclick());
    const unread = document.querySelector('.notread'); 
    btn.onclick = () => {
        
    }   
}
addButton.addEventListener('click',checkbutton);
//  deletet the book 
const deleteBtn = (id) => {
console.log('deleting item');
}
aboutBook.addEventListener('click', function (e) {
    const id = Number(e.target.value)
    if(e.target.matches('button')) {
        deleteBtn(id);
    }
    // if(e.target.matches('input[type ="checkbox"]')) {
    //     markAsComplete(id);
    // }
});
