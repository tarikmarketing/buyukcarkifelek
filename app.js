window.addEventListener('DOMContentLoaded', () => {
  const winLine = document.getElementById('win-line');
  const startButton = document.getElementById('game-start');
  const wrapper = document.querySelector('.main-wrapper');

  const fontSize = 16;
  let slotHeight = 115;

  if (window.innerWidth < 568) {
    slotHeight = 45;
  }

  const setBgPosition = (val) => {
    return `-${(slotHeight * val) / fontSize}em`;
  }
  const winGame = () => {
    anime({
      targets: '.js-slots-col-1',
      backgroundPositionY: setBgPosition(34),
      duration: 3500,
      easing: 'easeInOutQuad',
    });
    anime({
      targets: '.js-slots-col-2',
      backgroundPositionY:setBgPosition(47),
      duration: 3500,
      easing: 'easeInOutQuad',
    });
    anime({
      targets: '.js-slots-col-3',
      backgroundPositionY: setBgPosition(38),
      duration: 3500,
      easing: 'easeInOutQuad',
    });
    anime({
      targets: '.js-slots-col-4',
      backgroundPositionY: setBgPosition(62),
      duration: 3500,
      easing: 'easeInOutQuad',
    });
    anime({
      targets: '.js-slots-col-5',
      backgroundPositionY:setBgPosition(32),
      duration: 3500,
      easing: 'easeInOutQuad',
    });
    anime({
      targets: '.js-slots-col-6',
      backgroundPositionY:setBgPosition(45),
      duration: 3500,
      easing: 'easeInOutQuad',
    });

    setTimeout(()=>{
      wrapper.classList.add('show-result');
    }, 3500);
    setTimeout(()=>{
      wrapper.classList.add('show-modal');
    }, 4500);
  }

  startButton.addEventListener('click', (e)=> {
   startButton.setAttribute('disabled', 'true');
    winGame();
  })
  window.addEventListener('resize', ()=> {
    if (window.innerWidth < 568) {
      slotHeight = 45;
    }else {
      slotHeight = 115;
    }
  })


});



