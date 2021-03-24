function handleRize(topHeight) {
    var scrollTop = document.documentElement.scrollTop;
    var offset = (100 - document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 100) offset = 0;
    console.log(offset)
    document.getElementById('nav-container').style['height'] = (document.documentElement.clientHeight - offset) + 'px';
}
handleRize();
window.onresize = handleRize;