//carrousel//

function carrousel() {
    var images6 = document.querySelectorAll('.image6');
    let d = 2000;
    let delta = 1000;

    images6.forEach(function (img, indice) {
        img.style.zIndex = images6.length - indice;
    });

    let anim6 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim6.add({
        targets: images6,
        translateX: [{ value: '375', duration: d },
        {
            value: '-375', duration: 0, delay: function (img, ind) {
                if (ind == 0) return (5 * delta) + (4 * d);
                if (ind == 1) return (4 * delta) + (3 * d);
                if (ind == 2) return (3 * delta) + (2 * d);
                if (ind == 3) return (2 * delta) + d;
                if (ind == 4) return delta;
                return 0;
            }
        },
        {
            value: '0', duration: function (img, ind) {
                if (ind == 5) return 0;
                return d;
            }
        }],
        easing: 'linear',
        delay: function (img, ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2 * delta) + d;
            if (ind == 2) return (3 * delta) + (2 * d);
            if (ind == 3) return (4 * delta) + (3 * d);
            if (ind == 4) return (5 * delta) + (4 * d);
            return (6 * delta) + (5 * d);
        }
    });
}

/*légende*/

function monterLegende() {
    let txt_leg = document.querySelector(".txt_leg");
    txt_leg.style.display = 'block';
    return anime({
        targets: '.txt_leg',
        backgroundColor: '#FFF',
        translateY: '-6em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende() {
    return anime({
        targets: '.txt_leg',
        backgroundColor: 'rgba(232, 232, 232, 1)',
        translateY: '0',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function monterLegende2() {
    let txt_leg2 = document.querySelector(".txt_leg2");
    txt_leg2.style.display = 'block';
    return anime({
        targets: '.txt_leg2',
        backgroundColor: '#FFF',
        translateY: '-6em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende2() {
    return anime({
        targets: '.txt_leg2',
        backgroundColor: 'rgba(232, 232, 232, 1)',
        translateY: '0',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

/*cacher*/
function cacher(cla) {
    console.log('Appel à la fonction cacher détecté : ' + cla);
    let paragraphes = document.querySelectorAll('.' + cla);
    paragraphes.forEach(function (p, i) {
        if (p.style.display == 'none') p.style.display = 'block';
        else p.style.display = 'none';
    });
}