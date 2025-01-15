const book = {
    title: "titlePlaceholder",
    author: "authorName",
    year: "some year I don't know like 1895.3 or somthing",
    getSummary: function (){
        return "this is a book with words, aranged in a way that makes sence to people understanding the english lexicon."
    }

}

book.genre = "horror";
delete book.year;
console.log(book)