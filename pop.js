let list = document.querySelectorAll('.list');
let cardtype = document.querySelectorAll('.hero');
  for (let k = 0; k < cardtype.length; k++) 
      {
      cardtype[k].classList.remove('active');
      cardtype[k].classList.add('hide');

      if (cardtype[k].getAttribute('data-item') == 'fb') {
        cardtype[k].classList.remove('hide');
        cardtype[k].classList.add('active');
      }
    }

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function() {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove('active');
    }
    this.classList.add('active');

    let dataFilter = this.getAttribute('data-filter');

    for (let k = 0; k < cardtype.length; k++) 
      {
      cardtype[k].classList.remove('active');
      cardtype[k].classList.add('hide');

      if (cardtype[k].getAttribute('data-item') == dataFilter) {
        cardtype[k].classList.remove('hide');
        cardtype[k].classList.add('active');
      }
    }
  });
}

// const burger = document.querySelector('.burger');
// const navLinks = document.querySelector('.nav-links');
// const burgerIcon = document.querySelector('.burger ion-icon');

// burger.addEventListener('click', () => {
//   navLinks.classList.toggle('show');
//   if(navLinks.classList.contains('show')){
//     burgerIcon.setAttribute('name','close-outline');
//   } else{
//     burgerIcon.setAttribute('name','menu-outline');
//   }
// })


// function toggleMenu() {
//    const navLinks = document.querySelector('.nav-links');
//   const burgerIcon = document.querySelector('.check');

//     navLinks.classList.toggle('show');
//   if(navLinks.classList.contains('show')){
//     burgerIcon.setAttribute('name','close-outline');
//   } else{
//     burgerIcon.setAttribute('name','menu-outline');
//   }
// }

document.querySelector('.na').addEventListener('click', function(){
  document.querySelector('.ino1').classList.toggle('active');
});