const info1 = {
  name: "Alice",
  age: 28,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};
console.log(info1.name);
console.log(info1.age);
info1.greet();

const name1 = "BoB";
const age = 30;
const info2 = {
  // მონაცემის შეცვლა შეიძლება ობიექტში, ობიეთის გარეთ მდებარე მონაცემის შეცვლისგარეშე
  [name1]: "Luka",
  // მონაცემის შეტანა შესაძლებელია ობიექტში ობიექტის გარედან
  age1: age,
  // ფუნქციის გამოძახაბის დროს functions-ს აღარ ვიყენებთ
  greet() {
    console.log(
      `Hello, my name is ${this.name1} and I am ${this.age1} years old.`
    );
  },
};
console.log(info2.name1);
console.log(info2.age1);
info2.greet();
