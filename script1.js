// Async / Await in JavaScript 
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  await wait(2000);
  console.log("2 seconds passed");
}

demo();

// IIFE
(function () {
  console.log("IIFE executed!");
})();
