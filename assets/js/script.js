function startApp() {
    appLoading();
    setTimeout(closeMenu, 250);
    setTimeout(appStart, 3000);
}

function closeMenu() {
    document.getElementById("androidmenu").style.width = "0px";
    document.getElementById("androidmenu").style.height = "0px";
    document.getElementById("androidapp").style.display = "none";

}

function appLoading() {
    document.getElementById("appstart").style.width = "240px";
    document.getElementById("appstart").style.height = "400px";
}

function appStart() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("mainpage").style.display = "block";
    konten1()
}

function konten1() {
    setTimeout(konten2, 5000);
    document.getElementById("carousel").style.left = "0%";
}

function konten2() {
    setTimeout(konten3, 5000);
    document.getElementById("carousel").style.left = "-100%";
}

function konten3() {
    setTimeout(konten1, 5000);
    document.getElementById("carousel").style.left = "-200%";
}