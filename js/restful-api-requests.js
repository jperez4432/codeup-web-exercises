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
            console.log(books);
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
        .then(getBooks);
});

// PUT
let putThis = {
    "title": "Percy Jackson & The Sea of Monsters",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
}

let putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(putThis),
}


// Patch
let patchThis = {
    "title": "Percy Jackson & The Titans Curse",
    "author": {
        "firstName": "TRick",
        "lastName": "Riordan"
    }
}

let patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchThis),
}




// PUT
fetch("https://childlike-trapezoidal-whippet.glitch.me/books/6", putOptions).then(getBooks);
fetch("https://childlike-trapezoidal-whippet.glitch.me/books/7", patchOptions).then(getBooks);

getBooks()

// DELETE

let deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    }
};



$("#uniqueBooks").click(() => {
    let inputVal = $("#id-to-delete").val();
    fetch(`https://childlike-trapezoidal-whippet.glitch.me//${inputVal}`, dele)


        })
})
// fetch("https://childlike-trapezoidal-whippet.glitch.me/books/11", deleteOptions).then(getBooks);
// fetch(`https://childlike-trapezoidal-whippet.glitch.me/books/${book.id}`, deleteOptions).then(getBooks);