function addToTable() {
    var firstName = document.getElementById("firstNameInput").value;
    var lastName = document.getElementById("lastNameInput").value;
    var tableBody = document.getElementById("nameTableBody");
    var newRow = tableBody.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.textContent = firstName;
    cell2.textContent = lastName;
    clearFields();
}

function clearFields() {
    document.getElementById("firstNameInput").value = "";
    document.getElementById("lastNameInput").value = "";
}

function convertTemperature(reverse = false) {
    if (!reverse) {
        var celsius = parseFloat(document.getElementById("celsiusInput").value);
        var fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("conversionResult").textContent = celsius + "°C is " + fahrenheit + "°F";
    } else {
        var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
        var celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("reverseConversionResult").textContent = fahrenheit + "°F is " + celsius + "°C";
    }
}
