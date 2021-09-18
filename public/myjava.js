window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var btn = document.getElementById("top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else btn.style.display = "none";
}

function gotop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}