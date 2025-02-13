// შევქმნათ university ობიექტი
const university = {
  name: "name",
  departments: 10,
  website: "google.com",
  ratings: {
    student1: 4,
    student2: 5,
    student3: 1,
  },
};

for (const key in university) {
  if (university.hasOwnProperty(key)) {
    console.log(`${key}: ${university[key]}`);
  }
}

console.log(university.scholarship);

const newProps = { studentsCount: 20000 };
const updatedUniversity = Object.assign({}, university, newProps);

console.log(updatedUniversity);

Object.freeze(updatedUniversity);

updatedUniversity.name = "განახლებული სახელი";

console.log(Object.isFrozen(updatedUniversity));

// შევქმნათ sportsClub ობიექტი
const sportsClub = {
  clubName: "pro112",
  sportType: "footbal",
  foundedYear: 1925,
  achievements: {
    title1: "ttle3",
    title2: "ttle2",
    title3: "ttle1",
  },
};

const properties = Object.keys(sportsClub);
console.log(properties);

const values = Object.values(sportsClub);
console.log(values);

console.log(sportsClub.sponsors);

const newPropsClub = { stadiumCapacity: 55000 };
const updatedSportsClub = Object.assign({}, sportsClub, newPropsClub);

console.log(updatedSportsClub);

Object.freeze(updatedSportsClub);

updatedSportsClub.clubName = "new";

console.log(Object.isFrozen(updatedSportsClub));

const hotel = {
  hotelName: "Holiday",
  stars: 4,
  location: "საქართველო",
  guestReviews: {
    guest1: 4.8,
    guest2: 4.5,
    guest3: 4.9,
  },
};

for (const key in hotel) {
  if (hotel.hasOwnProperty(key)) {
    console.log(`${key}: ${hotel[key]}`);
  }
}

console.log(hotel.spa);

const newPropsHotel = { roomsCount: 150 };
const updatedHotel = Object.assign({}, hotel, newPropsHotel);

console.log(updatedHotel);

Object.freeze(updatedHotel);

updatedHotel.hotelName = "New Holiday Inn";

console.log(Object.isFrozen(updatedHotel));

// შევქმნათ cinema ობიექტი
const cinema = {
  cinemaName: "კავეა კინოთეატრი",
  moviesCount: 10,
  location: "თბილისი მოლი",
  movieReviews: {
    user1: 4.2,
    user2: 4.7,
    user3: 4.5,
  },
};

// გამოვიტანოთ ობიექტის თვისებები და მათი მნიშვნელობები
for (const key in cinema) {
  if (cinema.hasOwnProperty(key)) {
    console.log(`${key}: ${cinema[key]}`);
  }
}

// შევამოწმოთ, გააჩნია თუ არა vipSeats ველი
if (cinema.vipSeats) {
  console.log("კინოთეატრს აქვს vipSeats ველი.");
} else {
  console.log("კინოთეატრს არ აქვს vipSeats ველი.");
}

// დავამატოთ ticketPrice ახალი ობიექტის გაერთიანებით
const newPropsCinema = { ticketPrice: 15 };
const updatedCinema = Object.assign({}, cinema, newPropsCinema);

console.log("განახლებული კინოთეატრის ობიექტი:", updatedCinema);

// გავყინოთ ობიექტი და ვცადოთ მისი შეცვლა
Object.freeze(updatedCinema);

try {
  updatedCinema.cinemaName = "განახლებული კავეა";
} catch (error) {
  console.error("შეცდომა ობიექტის შეცვლის მცდელობისას:", error);
}

console.log(Object.isFrozen(updatedCinema));
