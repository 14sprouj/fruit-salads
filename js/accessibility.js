// jquery
if (typeof jQuery === 'undefined') {
    document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>');
}

$("#btnAccessibility").click(function () {
	if ($("#accessMenu").css("display") == "none") {
		$("#accessMenu").css("display", "block");
		$(this).removeClass("fa-universal-access");
		$(this).addClass("fa-xmark");
	} else {
		$("#accessMenu").css("display", "none");
		$(this).removeClass("fa-xmark");
		$(this).addClass("fa-universal-access");
	}
});

let accessBtn = document.createElement('i');
accessBtn.setAttribute('id', 'btnAccessibility');
accessBtn.setAttribute('class', 'fa-solid fa-universal-access btnAccess fa-2x');
let accessMenu = document.createElement('div');
accessMenu.setAttribute('id', 'accessMenu');
let tabsAccess = document.createElement('ul');
tabsAccess.setAttribute('id', 'tabsAccess');
let li = document.createElement('li');
iEye = document.createElement('i');
iEye.setAttribute('class', 'fa-solid fa-eye');
li.appendChild(iEye);
tabsAccess.appendChild(li);
accessMenu.appendChild(tabsAccess);
let accessVision = document.createElement('div');
accessVision.setAttribute('id', 'accessVision');
accessVision.innerHTML = 'Vision';
accessMenu.appendChild(accessVision);

//document.body.appendChild(accessBtn);
//document.body.appendChild(accessMenu);
