function switchToSub() {
    document.getElementById('subPage').style.marginLeft = '0';
    document.getElementById('indexPage').style.marginRight = '-100%';

    document.getElementById('sub').style.opacity = '1';
    document.getElementById('sub').style.borderBottom = '3px solid white';
    document.getElementById('index').style.opacity = '0.7';
    document.getElementById('index').style.borderBottom = 'none';
}

function switchToIndex() {
    document.getElementById('subPage').style.marginLeft = '-100%';
    document.getElementById('indexPage').style.marginRight = '0';

    document.getElementById('index').style.opacity = '1';
    document.getElementById('index').style.borderBottom = '3px solid white';
    document.getElementById('sub').style.opacity = '0.7';
    document.getElementById('sub').style.borderBottom = 'none';
}