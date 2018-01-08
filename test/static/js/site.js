let menuOpened = false;
function openOverFlow() {
    if (!menuOpened) {
        console.log("menu opened");
        document.getElementById("hamburger-dropdown").style.display='inherit';
        menuOpened = true;
    } else {
        closeOverFlow();
    }

}

function closeOverFlow() {
    console.log("menu closed");
    document.getElementById("hamburger-dropdown").style.display='none';
    menuOpened = false;
}

$(".hamburgerdiv").focusout(closeOverFlow);