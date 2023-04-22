function idCard() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var age = document.getElementById("age").value;
  var phoneNumber = document.getElementById("phoneNumber").value;

  var numberArray = [];
  numberArray.push(age, phoneNumber);
  if (age !== "") {
    for (let i = 0; i < numberArray.length; i++) {
      if (numberArray[i] <= 100) {
        document.getElementById("postAge").innerHTML = `Age: ${age}`;
      } else if (parseInt(numberArray[i]) > 100) {
        document.getElementById(
          "postPhoneNumber"
        ).innerHTML = `Phone Number: ${phoneNumber}`;
      }
    }
  } else {
    document.getElementById("postAge").innerHTML = ``;
  }

  if (phoneNumber !== "") {
    for (let i = 0; i < numberArray.length; i++) {
      if (numberArray[i] <= 100 && numberArray[i] > 0) {
        document.getElementById("postAge").innerHTML = `Age: ${age}`;
      } else if (parseInt(numberArray[i]) > 100) {
        document.getElementById(
          "postPhoneNumber"
        ).innerHTML = `Phone Number: ${phoneNumber}`;
      }
    }
  } else {
    document.getElementById("postPhoneNumber").innerHTML = ``;
  }

  document.getElementById(
    "postFullName"
  ).innerHTML = `${firstName} ${lastName}`;

  address !== ""
    ? (document.getElementById("postAddress").innerHTML = `Address: ${address}`)
    : (document.getElementById("postAddress").innerHTML = ``);

  document.getElementById("idCard").style.display = "block";
  document.getElementById("h2").style.display = "none";

  if (
    firstName == "" &&
    lastName == "" &&
    address == "" &&
    age == "" &&
    phoneNumber == ""
  ) {
    document.getElementById("idCard").style.display = "none";
    document.getElementById("h2").style.display = "block";
  }
}
