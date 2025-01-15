const book = {
    title: "titlePlaceholder",
    author: "authorName",
    year: "some year I don't know like 1895.3 or somthing",
    getSummary: function (){
        return `${this.title} ${this.author} ${this.year}`
    }

}

book.genre = "horror";
delete book.year;
console.log(book)