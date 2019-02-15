var surname = ["Bianchi", "Rossi", "Neri", "Cavalli", "Marroni"];
var yourSurname = prompt("Quale è il tuo cognome?");
surname.push(yourSurname);
surname.sort();

document.write(surname + "<br>");

for (var i = 0; i < surname.length; i++) {
  var position = surname[i];
  if (position == yourSurname) {
    document.write("Il tuo cognome si trova all'indice: " + i)
  }
}
