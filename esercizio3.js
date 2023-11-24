const book = {
  title: "Il Grande Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

book.rating = 6;

book.increaseRating = function (valoreIncremento) {
  const nuovoRaiting = (this.rating += valoreIncremento);
  if (nuovoRaiting <= 10) {
    this.rating = nuovoRaiting;
    console.log(`il rating e stato umentato a ${this.rating}`);
  } else {
    console.log("il raiting non puo superare 10.");
  }
};
book.increaseRating(Math.floor(Math.random() * 5));

delete book.year;

const keys = Object.keys(book);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(`${key}: ${book[key]}`);
}

/* 
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = book[key];
    console.log(`${key}: ${value}`);
} */
