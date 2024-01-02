// jquery
if (typeof jQuery === 'undefined') {
    document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>');
}

document.head.innerHTML += '<meta charset="UTF-8">';
document.head.innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
document.head.innerHTML += '<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>';
document.head.innerHTML += '<script src="https://kit.fontawesome.com/f8a61f6d53.js" crossorigin="anonymous"></script>';
document.head.innerHTML += '<link rel="stylesheet" href="https://w3schools.com/w3css/4/w3.css"></link>';
document.head.innerHTML += '<link rel="stylesheet" href="../css/style.css">';
document.head.innerHTML += '<script src="../js/contents.js"></script>';
document.head.innerHTML += '<script src="../js/accessibility.js"></script>';
document.head.innerHTML += '<script src="../js/body.js"></script>';
	
let br = document.createElement('br');
let header = document.createElement('header');
header.setAttribute('class', 'header');
header.setAttribute('id', 'header');
let siteTitle = document.createElement('titler');
siteTitle.innerHTML = 'Random Information';
header.appendChild(siteTitle);
let backBtn = document.createElement('i');
backBtn.setAttribute('id', 'btnBack');
backBtn.setAttribute('class', 'fa-solid fa-arrow-left btnBack fa-2x');


var warningDiv = document.createElement('div');
warningDiv.setAttribute('class', 'warning');
warningDiv.setAttribute('id', 'warning');
let beware = document.createElement('b');
let span = document.createElement('span');
let span2 = document.createElement('span');
beware.innerHTML = 'BEWARE';
warningDiv.appendChild(beware);
warningDiv.appendChild(br);

span.innerHTML = 'THIS DOCUMENT IS AN ASSORTMENT OF RANDOM “ORGANISED” INFORMATION.';
warningDiv.appendChild(span);
warningDiv.appendChild(br);
span2.innerHTML = 'YOU MAY NEED EXTERNAL HELP TO GUIDE YOU OUT OF THIS RABBIT HOLE OF CHAOTIC INFORMATION.';
warningDiv.appendChild(span2);

$(document).ready(function () {
	$("body").prepend(warningDiv);
	$("body").prepend(header);
});

//document.onload = function () {
//	$("body").prepend(warningDiv);
//	$("body").prepend(header);
//}