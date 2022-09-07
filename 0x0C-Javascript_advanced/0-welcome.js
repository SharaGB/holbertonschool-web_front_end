function welcome (firtsName, lastName) {
  const fullName = firtsName + ' ' + lastName;

  function displayFullName () {
    alert(`Welcome ${fullName}!`);
  }
  displayFullName();
}
