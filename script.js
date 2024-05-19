let signUpBtn = document.querySelector(".signUpBtn");
let logInBtn = document.querySelector(".logInBtn");

let regDiv = document.querySelector(".regDiv");
let logDiv = document.querySelector(".logDiv");

let blog = document.querySelector(".blog");
let seeMore = document.querySelector(".seeMore");

let username = document.querySelector("#username");
let password = document.querySelector("#password");
let newUsername = document.querySelector("#new-username");
let newPassword = document.querySelector("#new-password");

seeMore.addEventListener("click", function () {
	blog.classList.toggle("newClass");
});

signUpBtn.addEventListener("click", function () {
	regDiv.classList.toggle("newClass");
	logDiv.classList.remove("newClass");
});

logInBtn.addEventListener("click", function () {
	logDiv.classList.toggle("newClass");
	regDiv.classList.remove("newClass");
});

username.addEventListener("keyup", function () {
	if (username.value.length < 4 || username.value.length > 10) {
		username.style.outline = "darkred solid 2px";
	} else {
		username.style.outline = "green solid 2px";
	}
});

password.addEventListener("keyup", function () {
	if (password.value.length < 4 || password.value.length > 10) {
		password.style.outline = "darkred solid 2px";
	} else {
		password.style.outline = "green solid 2px";
	}
});

newUsername.addEventListener("keyup", function () {
	if (newUsername.value.length < 4 || newUsername.value.length > 10) {
		newUsername.style.outline = "darkred solid 2px";
	} else {
		newUsername.style.outline = "green solid 2px";
	}
});

newPassword.addEventListener("keyup", function () {
	if (newPassword.value.length < 4 || newPassword.value.length > 10) {
		newPassword.style.outline = "darkred solid 2px";
	} else {
		newPassword.style.outline = "green solid 2px";
	}
});
