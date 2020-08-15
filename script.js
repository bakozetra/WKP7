const books = [
    {
        title : "the alchemist",
        author : "persone",
        genre :["Mystery", "Thriller", "Fiction", "Non-fiction", "Fantasy", "Design", "Memoirs"],
        pages: "125 ", 
        status: ['Read' ,'not'],
        id: "firstBook",
    },
    {
        title : "the alchemist",
        author : "persone",
        genre :["Mystery", "Thriller", "Fiction", "Non-fiction", "Fantasy", "Design", "Memoirs"],
        pages: "125 ", 
        status: ['Read' ,'not'],
        id: "secondtBook",
    },
    {
        title : "the alchemist",
        author : "persone",
        genre :["Mystery", "Thriller", "Fiction", "Non-fiction", "Fantasy", "Design", "Memoirs"],
        pages: "125 ", 
        status: ['Read' ,'not'],
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
                <td>${book.genre.find(genr => `<li>${genr.genre}</li>`)}</td>
                <td>
                  <input type="checkbox" id="scales" name="scales"
                  checked>
                </td>
            </tr>
        `  
        )
        aboutBook.innerHTML = detailBook.join(' ') ;
};
// grab the option
const unread = document.querySelector('.notread');
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
          

        
}
addButton.addEventListener('click',checkbutton);