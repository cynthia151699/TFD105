var btns = document.getElementsByClassName("hamburger");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let ham_menu = document.getElementsByClassName("ham_menu")[0];
        ham_menu.classList.toggle("-on");
    });
}

var btns = document.getElementsByClassName("hamburger");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let ham_menu = document.getElementsByClassName("ham_container")[0];
        ham_menu.classList.toggle("-on");
    });
}