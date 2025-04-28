"use strict";

function exampleFunction() {
  "use strict";

  try {
    delete Object.prototype;
  } catch (error) {
    console.error("შეცდომა: " + error.message);
  }
}

exampleFunction();
