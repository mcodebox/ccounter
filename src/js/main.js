// main.js -------------------------------------

//Textfield input function
function textCounter() {
  var count = document.getElementById('textInput').value.length;
  document.getElementById('charCount').innerHTML = count;

  // Change color of the count
  if (count == 0) {
    document.getElementById('charCount').style.color = "black";
  } else if (count <= 100) {
    document.getElementById('charCount').style.color = "green";
  } else if (count > 100 && count <= 130) {
    document.getElementById('charCount').style.color = "orange";
  } else if (count > 130 && count < 140) {
    document.getElementById('charCount').style.color = "#e24a00";
  } else {
    document.getElementById('charCount').style.color = "red";
  }

  if (count == 140) {
    document.getElementById('footDiv').innerHTML = "Character count reached maximum.";
  } else {
    document.getElementById('footDiv').innerHTML = "Maximum 140 characters.";
  }

}

// Clear textfield
function clearInput() {
  textInput.value = "";
  textCounter();
  textInput.focus();
}
