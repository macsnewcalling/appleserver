function showDeviceFields() {
  const device = document.getElementById("device").value;
  const deviceFields = document.getElementById("deviceFields");
  const formFields = document.getElementById("formFields");

  deviceFields.innerHTML = "";
  formFields.style.display = "none";

  if (device === "android") {
    deviceFields.innerHTML = "<p>Android Device Network Check</p>";
    formFields.style.display = "block";
  } else if (device === "ios") {
    deviceFields.innerHTML = "<p>iOS Device Network Security Check</p>";
    formFields.style.display = "block";
  }
}

function submitForm() {
  document.getElementById("formFields").style.display = "none";
  document.getElementById("loading").style.display = "block";

  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("result").style.display = "block";
  }, 30000); // 30 seconds
}
