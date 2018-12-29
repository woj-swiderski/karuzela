'use strict';

(function (){
    const template = document.getElementById('flickity_template').innerHTML;

    const template_data = [
        { header: "Czarny Grzbiet",
          url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Czarny_Grzbiet_2.jpg",
          alt: "Czarny Grzbiet w Karkonoszach",
          title: "Szczyt Czarego Grzbietu"},

        { header: "Wielki Szyszak",
          url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/2015_Wielki_Szyszak%2C_Karkonosze%2C_Sudety_1.jpg",
          alt: "Wielki Szyszak w Karkonoszach",
          title: "Wielki Szyszak w Karkonoszach" },

        { header: "Kopa",
          url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Kopa_1.jpg",
          alt: "Kopa w Karkonoszach",
          title: "Kopa w Karkonoszach" },

        { header: "Łabski Szczyt",
          url: "https://upload.wikimedia.org/wikipedia/commons/4/44/%C5%81abski_Szczyt_1.jpg",
          alt: "Łabski Szczyt",
          title: "Łabski Szczyt"},

        { header: "Szrenica",
          url: "https://upload.wikimedia.org/wikipedia/commons/e/ea/%C5%9Acie%C5%BCka_do_schroniska_Szrenica_w_Karkonoszach_%28Reiftr%C3%A4gerbaude1%29.jpg",
          alt: "Szrenica",
          title: "Szrenica"},

        { header: "Śnieżka",
          url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/%C5%9Anie%C5%BCka_z_zachodu.jpg",
          alt: "Śnieżka",
          title: "Śnieżka"}
    ];

    const insertPoint = document.querySelector('.carousel');

    let res = '';
    for (let i = 0; i < template_data.length; i++) {

        let t = template_data[i];
        t.counter = i;

        res += Mustache.render(template, t);

    }

    insertPoint.innerHTML = res;

}());

const elem = document.querySelector('.carousel');
const flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true,
  pageDots: false,
  lazyLoad: true,
  hash: true
});

const progressBar = document.querySelector('.progress-bar')

const restart_btn = document.getElementById('restart_btn');
restart_btn.addEventListener('click', restartCarousel);


flkty.on( 'scroll', function(progress) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 80 + '%';
});

function restartCarousel(){
    flkty.select(0);
};
