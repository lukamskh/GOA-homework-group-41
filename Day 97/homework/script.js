let book = {
  title: "smth",
  author: "me",
  pages: 3,
  publishYear: 2025,
  getSummary: function () {
    console.log(
      `books name is ${this.title} it was written by ${this.author} in ${this.publishYear} and it has ${this.pages} pages`
    );
  },
};
console.log(book.getSummary());

let costumer = {
  firstName: "luka",
  lastName: "mskhaladze",
  email: "this_isnt_my_email.gmail.com",
  fullName: function () {
    console.log(`full name is ${this.firstName} ${this.lastName}`);
  },
  updateEmail: function () {
    costumer.email = prompt("enter new email");
  },
};
console.log(costumer);
console.log(costumer.updateEmail());
console.log(costumer);

let movie = {
  title: "ford v ferrari",
  director: "james mangold",
  releaseYear: 2019,
  duration: 152,
  getMovieInfo: function () {
    console.log(
      `the movie is called ${this.title}, it came out in year ${this.releaseYear} and it's length is ${this.duration} minutes, the movie was directed by ${this.director} and personally I reccomend it`
    );
  },
};
console.log(movie.getMovieInfo());

let ticket = {
  eventName: "name",
  eventDate: "10/7/24",
  price: "240$",
  isAvailable: false,
  purchaseTicket: function () {
    if (this.isAvailable == true) {
      console.log("you can still purchase it");
    } else {
      console.log("sorry the tickets are sold out");
    }
  },
};
console.log(ticket);
console.log(ticket.purchaseTicket());
