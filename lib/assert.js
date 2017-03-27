var assert = {
   isTrue: function(assertionToCheck, testName) {
     if (!assertionToCheck) {
       console.log("Assertion failed: " + testName + " is not truthy");
     }
     else {
      console.log("Your " + testName + " test has passed!");
     }
   }
 };
