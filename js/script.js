(function() {

	var openMenuButton = document.querySelector(".main-header__open-nav"),
			openMenu = document.querySelector(".main-header__nav");

	openMenuButton.addEventListener("click", function() {
		openMenu.classList.add("main-header__nav--open");
		openMenuButton.classList.add("main-header__open-nav--open");
	});

})();