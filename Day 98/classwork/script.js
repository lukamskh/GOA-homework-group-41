function Person(name, lastName, phoneNumber, email, password, confirmPassword) {
  this.name = name;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.password = password;
  this.confirmPassword = confirmPassword;
}

let user1 = new Person(
  "Luka",
  "Mskhaladze",
  "591929***",
  "this_isnt_my_email@gmail.com",
  1234567,
  1234567
);
console.log(
  `Hello ${user1.name} ${user1.lastName}, your phone number is ${user1.phoneNumber} and your email is ${user1.email}.`
);

let user2 = new Person(
  "Bob",
  "BobsLastName",
  "88005553535",
  "bobs_email@gmail.com",
  1234,
  1234
);
console.log(
  `Hello ${user2.name} ${user2.lastName}, your phone number is ${user2.phoneNumber} and your email is ${user2.email}.`
);

let user3 = new Person(
  "ბატონი",
  "ბატონის გვარი",
  "05919291**",
  "რაღაცა_ემაილი@gmail.com",
  54321,
  54321
);
console.log(
  `Hello ${user3.name} ${user3.lastName}, your phone number is ${user3.phoneNumber} and your email is ${user3.email}.`
);
