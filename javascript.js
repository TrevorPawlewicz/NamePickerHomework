
var wdi_17_names = ["Addison", "Ben", "Christine",
    "Chloe", "Cris", "Dane", "David H", "David Z",
    "Emily", "Imtaek", "Jack", "Jesse P", "Jesse Z",
    "Jonathan", "Pericles", "Peter", "Philippe", "Sergio",
    "Simon", "Tali", "Tavo", "Trevor"];


/*
for (var i = 0; i < wdi_17_names.length; i++) {
    console.log(wdi_17_names[i]);
}
*/

function namePicker(){
    var i = 0;
    var pick = Math.floor(Math.random() * wdi_17_names.length);

    var currentName;
    currentName = wdi_17_names[pick];

    console.log(currentName);


    var x = document.getElementById("name");
    var t = document.createTextNode(currentName);
    //document.write.(currentName);
}
namePicker();
