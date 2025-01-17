function fakeBin(x) {
    let ans = '';
    for (let i = 0; i < x.length; i++) {
        if (Number(x[i]) >= 5) {
            ans += "1";
        } else {
            ans += "0";
        }
    }
    return ans;
}