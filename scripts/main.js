var rhit = rhit || {};

rhit.button = document.getElementById("scrollBtn");

document.addEventListener('scroll', function(e) {
    if(window.scrollY == 0) {
        rhit.button.style.display = "none";
    } else {
        rhit.button.style.display = "inline-block";
    }
});



rhit.scrollToTopButton = function () {
    rhit.button.onclick = (event) => {
        window.scroll(0, 0);
    }
};



rhit.main = function () {
	console.log("Ready");
    rhit.scrollToTopButton();
};

rhit.main();
