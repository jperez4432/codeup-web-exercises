let getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};

const getBooks = () => {
    fetch("https://childlike-trapezoidal-whippet.glitch.me/books")
        .then(resp => resp.json())
        .then(books => {
            let htmlStr = "";
            for (let book of books) {
                htmlStr += `<h1>${book.title}</h1><p>by: ${book.author.firstName} ${book.author.lastName}</p>`;
            }
            $("#container").html(htmlStr);
        });
}
fetch("https://childlike-trapezoidal-whippet.glitch.me/books/1")
    .then(resp => resp.json())
    .then(book => console.log(book));

//  POST
let newBook = {
    "title": "Percy Jackson & The Lightning Thief",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
};

let postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
}

$("#addPercy").click(() => {
    fetch("https://childlike-trapezoidal-whippet.glitch.me/books", postOptions)
        .then(resp => resp.json())
        .then(getBooks);
});