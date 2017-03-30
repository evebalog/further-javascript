var assert = {
   isTrue: function(assertionToCheck, testName) {
     if (!assertionToCheck) {
       console.log("Assertion failed: " + testName + " is not truthy");
     }
     else {
      console.log("Your " + testName + " test has passed. Lovely-jubbly");
     }
   },

   isEqual: function(expected, actual, testName) {
     if (expected !== actual) {
       console.log("Assertion failed: expected: " + expected + " but got:" + actual + ".");
     }
       else {
         console.log("Your " + testName + " test has passed. Lovely-jubbly!");
     }
   },

   contains: function(searchElement, actual, testName) {
     if (actual.includes(searchElement)) {
       console.log("Your " + testName + " test has passed. Yay!");
     }
     else {
       console.log("Expected " + actual + " to include" + searchElement + " but it doesn't...what have you done?!");
     }
   }
 };


 function test(tests) {
   

   for (var testName in tests) {
     if (testName === "beforeEach") {
       continue
     }

     if (tests.hasOwnProperty(testName) && typeof tests[testName] === "function") {
       if (tests.beforeEach) {

         tests.beforeEach()
       }
       tests[testName]()
     }
   }
 }
