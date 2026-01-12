document.querySelector('.na').addEventListener('click', function(){
  document.querySelector('.ino1').classList.toggle('active');
});

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if(entry.isIntersecting){
//       entry.target.classList.add('visible');
//     }
//   });
// },{
//   rootMargin: '0px 0px -100px 0px',
//   threshold: 0.1
// });

// document.querySelectorAll('.content').forEach((el) => {
//   observer.observer(el);
// });