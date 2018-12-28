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

const msg = document.getElementById('msg');

flkty.on( 'scroll', function(progress) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 80 + '%';
});

function restartCarousel(){
    flkty.select(0);
};
