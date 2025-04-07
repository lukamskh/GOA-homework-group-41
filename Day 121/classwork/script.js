function named(num) {
  if (num % 2 === 0) {
    console.log("ლუწი");
  } else {
    console.log("კენტი");
  }
}

named(4);

const anonymous = function (num) {
  if (num % 2 === 0) {
    console.log("ლუწი");
  } else {
    console.log("კენტი");
  }
};

anonymous(3);

const arrow = (num) => (num % 2 === 0 ? "ლუწი" : "კენტი");

console.log(arrow(10));
