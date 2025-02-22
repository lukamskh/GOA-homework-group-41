function loveIs() {
  let name1 = prompt("enter name1: ");
  let name2 = prompt("enter name2: ");
  let ans = Math.random() * 101;
  ans = Math.floor(ans);
  alert(`${name1} and ${name2} will love eachother with a chance of ${ans}%`);
}

loveIs();
