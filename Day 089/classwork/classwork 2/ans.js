function grow(x) {
    let num = 1;
    for (let i = 0; i < x.length; i++) {
      num *= x[i];
    }
    return num;
  }