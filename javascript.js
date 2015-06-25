
var wdi_17_names = ["Addison", "Ben", "Christine",
    "Chloe", "Cris", "Dane", "David H", "David Z",
    "Emily", "Imtaek", "Jack", "Jesse P", "Jesse Z",
    "Jonathan", "Pericles", "Peter", "Philippe", "Sergio",
    "Simon", "Tali", "Tavo", "Trevor"];

function namePicker() {

    var pick = Math.floor(Math.random() * wdi_17_names.length);

    var currentName = wdi_17_names[pick];
    document.getElementById("name").innerHTML = wdi_17_names[pick];
    console.log(pick);
    console.log(currentName);
    document.body.style.backgroundColor = getRandomColor();
    document.getElementById("name").style.color = getRandomColor();

}

function getRandomColor () {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);

    console.log(currentBkgColor);
}


namePicker();
