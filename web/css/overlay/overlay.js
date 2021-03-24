function on(dialogId) {
    var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;
    document.getElementById("overlay").style.display = "block";

    var dialog = document.getElementById(dialogId);
    dialog.style.display = "block";
}

function off(dialogId) {
    document.getElementById("overlay").style.display = "none";
    document.getElementById(dialogId).style.display = "none";
}