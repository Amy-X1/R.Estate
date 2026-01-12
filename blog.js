let list = document.querySelectorAll('.list');
let cardtype = document.querySelectorAll('.bu');

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

      if (cardtype[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
        cardtype[k].classList.remove('hide');
        cardtype[k].classList.add('active');
      }
    }
  });
}


document.querySelector('.na').addEventListener('click', function(){
  document.querySelector('.ino1').classList.toggle('active');
});