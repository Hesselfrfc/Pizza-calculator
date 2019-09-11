alert('Wat voor soort pizza wilt U? De keuze bestaat uit Small, Medium en Large');
var small = prompt('Hoeveel small pizzas wilt u bestellen? (20cm) (6euro)');
var medium = prompt('Hoeveel medium pizzas wilt u bestellen? (25cm) (8euro)');
var large = prompt('Hoeveel large pizzas wilt u bestellen? (30cm) (10euro)');
document.write('Prijs small pizzas = ' + small * 6 + ' ' + 'Euro' + '<br>');
document.write('Prijs medium pizzas = ' + medium * 8 + ' ' + 'Euro' + '<br>');
document.write('Prijs large pizzas = ' + large * 10 + ' ' + 'Euro' + '<br>');
var totaalprijs = (small*6 + medium*8 + large*10);
document.write('Totaalprijs = ' + totaalprijs + ' ' + 'Euro' + '<br>' + '<br>');
document.write('Aantal small pizzas' + ' '+ small + '<br>');
document.write('Aantal medium pizzas' + ' ' + medium + '<br>');
document.write('Aantal large pizzas' + ' ' + large + '<br>');

