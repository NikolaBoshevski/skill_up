document.addEventListener("DOMContentLoaded",function(){

    const bookWrapper = document.querySelector(".book-wrapper");

    function getBooks(){
      fetch("https://gutendex.com/books/")
      .then(res=>res.json())
      .then(data =>{
        
            data.results.map(book=>{
              let col =  document.createElement("div");
              col.innerHTML =`
                        <h2 class="title">${book.title}</h2>
                        <h4 class="author">${book.authors.map(author=>author.name)}</h4>
                        <div class="description">${book.summaries.map(sumarry =>sumarry)}</div>
                        <div class="genre">${book.bookshelves.map(genre =>genre)}</div>
                `
                console.log(book)
                col.classList.add("col")
                bookWrapper.appendChild(col)
            })
        }
      )
    }

    getBooks();
})