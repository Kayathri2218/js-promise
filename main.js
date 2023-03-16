
let getNumber = parseInt(prompt("Enter the number : "));
let findPalindrom = num => {
    let number = num, y = 0;
    while (num > 0) {
        x = num % 10;
        num = parseInt(num / 10);
        y = y * 10 + x;
    }
    return y;
}
let number = findPalindrom(getNumber);

let myPromise = new Promise((resolve, reject) => {

    if (number == getNumber) {
        resolve(`${getNumber} is palindrom`)
    }
    else {
        reject(`${getNumber} is not a palindrom`)
    }
})

