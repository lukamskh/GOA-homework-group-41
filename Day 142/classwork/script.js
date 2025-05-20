let global = "luka";

function testScope() {
  let local = "Bob";
  console.log(global);
  console.log(local);
}

testScope();
console.log(global);
