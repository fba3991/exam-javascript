

 const book = {
    title: "Il Grande Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

book.rating = 6;


book.increaseRating = function(valoreIncremento) {
    this.rating += valoreIncremento;
}
book.increaseRating (Math.floor(Math.random() * 5));;

delete book.year;

const keys = Object.keys(book);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    console.log((`${key}: ${book[key]}`));
}


