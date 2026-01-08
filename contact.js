

let list = document.querySelectorAll('.list');
let cardtype = document.querySelectorAll('.questCard');
  for (let k = 0; k < cardtype.length; k++) 
      {
      cardtype[k].classList.remove('active');
      cardtype[k].classList.add('hide');

      if (cardtype[k].getAttribute('data-item') == 'hb') {
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

const headers = document.querySelectorAll('.questCard')

headers.forEach(header =>{
  header.addEventListener('click',()=>{
    const item = header.parentElement;
    item.classList.toggle('active')
  });
});