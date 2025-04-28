// Strict mode (მკაცრი რეჟიმი) არის JavaScript-ის გამკაცრებული რეჟიმი, რომელიც ხელს უშლის ზოგიერთ შეცდომას და აუმჯობესებს კოდის უსაფრთხოებას. 
// Strict mode-ის გამოყენება ამცირებს პროპლემების ქუქლის ვერსიებს, შეცდომების მშვიდად გამოსწორებას. 
// ის ასევე უკრძალავს ისეთი ვიზუალური ელემენტების გამოყენებას, რომლებიც JavaScript-ის სტანდარტების წინააღმდეგ მიდიან.
// ფაილის დონეზე: ამოდის JavaScript-ის ფაილზე ზედა ხაზზე "use strict;".

"use strict";

let myVariable = "Hello";

let obj = {
    name: "Alice",
    showName: function() {
        "use strict";
        console.log(this.name);
    }
};

obj.showName();

function myFunction() {
    'use strict';
    undeclaredVariable = 10;
}

try {
    myFunction();
} catch(e) {
    console.error(e.message); 
}

function anotherFunction() {
    'use strict';
    return this;
}

console.log(anotherFunction());

function example() {
    'use strict';
    let obj = { a: 3 };
    Object.defineProperty(obj, 'a', { writable: false });
}

try {
    example();
} catch(e) {
    console.error(e.message);
}