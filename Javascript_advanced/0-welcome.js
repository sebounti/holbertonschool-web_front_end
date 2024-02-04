// 1. Create a function called welcome
// 2. It takes two parameters: firstname and lastname
// 3. It returns a function called displayFullName
// 4. displayFullName shows an alert with the message: Welcome name lastname!

function welcome(firstname, lastname) {
  let fullname = firstname + " " + lastname;

  function displayFullName() {
    alert("Welcome " + fullname + "!");
  }
  return displayFullName();
}
