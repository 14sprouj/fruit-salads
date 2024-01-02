// jquery for the contents
if (typeof jQuery === 'undefined') {
    document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>');
}

let element;

function contentsPos() {
			console.group("contentsPos");
			let screenHeight = $(window).height();
			let bodyHeight = $("body").height();
			console.log("bodyHeight: " + bodyHeight);
			// get the height of the warning
			let headHeight = $("#header").height();
			let warnHeight = $("#warning").height();
			let aboveDocHeight = headHeight + warnHeight;
			console.log("aboveDocHeight: " + aboveDocHeight);
			// get amount scrolled
			let scrollPos = document.documentElement.scrollTop;
			console.log("scrollPos: " + scrollPos);

			let bibPos = $("#References").offset().top;
			console.log("bibPos: " + bibPos);
			let bibTop = bibPos - scrollPos;
			console.log("bibTop: " + bibTop);
			let bibHeight = $("#bib").height();
			console.log("bibHeight: " + bibHeight);

			if (scrollPos > aboveDocHeight) {
				// make the warning fixed
				$("#contentsSlide").css("position", "fixed");
				$("#contentsSlide").css("top", "0px");
			} else {
				// make the warning static
				$("#contentsSlide").css("position", "absolute");
				$("#contentsSlide").css("top", aboveDocHeight + "px");
			}

			if (scrollPos + screenHeight > bodyHeight - bibHeight) {
				// make the warning fixed
				let m = $("main").height();

				$("#contentsSlide").css("height", m + "px");
				$("#contentsSlide").css("top", aboveDocHeight + "px");
				$("#contentsSlide").css("position", "absolute");
			} else {
				// make the warning static
				$("#contentsSlide").css("height", "100%");
			}
			console.groupEnd();
		}
		$(window).on("scroll", function () {
			console.log("scrolling");
			contentsPos();
		});
		$(window).on("resize", function () {
			console.log("scrolling");
			contentsPos();
		});
		$(document).ready(function () {
			contentsPos();
		});

		// make a table of contents
		$("h1, h2, h3, h4, h5, h6").each(function (index) {
			// get element tag name
			let tag = $(this).prop("tagName").toLowerCase();
			let hEClass = "";

			$(this).attr("id", tag + $(this).text().replace(/ /g, ""));

			let link = $(this).attr("id");

			if ($(this).is("h1")) {
				link = $(this).text().replace(/ /g, "");
				hEClass = "contentsHeading1";
				// add a tab to the beginning of the line
				// $("#contents").append("&nbsp;&nbsp;&nbsp;&nbsp;");
			} else if ($(this).is("h2")) {
				hEClass = "contentsHeading2";
				// add two tabs to the beginning of the line
				// $("#contents").append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
			} else if ($(this).is("h3")) {
				hEClass = "contentsHeading3";
				// add three tabs to the beginning of the line
				// $("#contents").append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
			} else if ($(this).is("h4")) {
				hEClass = "contentsHeading4";
				// add four tabs to the beginning of the line
				// $("#contents").append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
			} else if ($(this).is("h5")) {
				hEClass = "contentsHeading5";
				// add five tabs to the beginning of the line
				// $("#contents").append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
			} else if ($(this).is("h6")) {
				hEClass = "contentsHeading6";
				// add six tabs to the beginning of the line
				// $("#contents").append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
			}

			$("#contents").append("<a href='#" + link + "' class='" + hEClass + "'>" + $(this).text() + "</a><br>");

			let bib = 1;
			document.getElementById("bibList").innerHTML = "";
			$("bib").each(function (index) {
				let link = $(this).attr("link");
				$(this).attr("id", "bibL" + bib);

				$(this).append("[<a href='#bib" + bib + "'>" + bib + "</a>]");

				let bibText = "[" + bib + "] " + "<a href='" + link + "'>" + link + "</a>";
				let element = document.createElement("p");
				element.innerHTML = bibText;
				element.setAttribute("id", "bib" + bib);
				document.getElementById("bibList").appendChild(element);
				bib++;
			});
		});