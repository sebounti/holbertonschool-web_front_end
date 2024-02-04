// Scope & Closures
// Nested functions
// 1. Accessing global variable
// 2. Accessing outer function variable
// 3. Accessing outer function variable

let globalVariable = "welcome";
function outer() {
  alert(globalVariable);

  let course = "Holberton";

  function inner() {
    alert(globalVariable + course);

    let exclamation = "!";

    function inception() {
      alert(globalVariable + course + exclamation);
    }
    inception();
  }
  inner();
}
outer();
