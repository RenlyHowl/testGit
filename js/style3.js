setTimeout(() => {
  // console.dir(document);
  // console.log(document.documentElement.clientHeight);
  // console.log(document.documentElement.clientWidth);
  const mainElement = document.querySelector('main');
  console.dir(mainElement.getBoundingClientRect())
  console.dir(mainElement);
  console.dir(mainElement.clientHeight);
  console.dir(mainElement.clientWidth);
  console.dir(mainElement.clientTop);
  console.dir(mainElement.clientLeft);
  console.dir(mainElement.offsetWidth);
  console.dir(mainElement.offsetHeight);
  console.log(mainElement.offsetTop);
  console.log(mainElement.offsetLeft);
  // mainElement.addEventListener('scroll', (e) => {
  //   // console.dir(e);
  //   // console.log(this);
  //   // console.log(e.target.scrollTop);
  //   // console.log(e.target.scrollHeight)
  // })
  // document.getElementsByTagName('button')[0].addEventListener('click', () => {
  //   console.log('trigger');
  //   // document.documentElement.scrollBy({
  //   //   top: 20
  //   // })
  //   // mainElement.scrollBy({
  //   //   top: 20
  //   // })
  //   // mainElement.scroll({
  //   //   top: 40
  //   // })
  //   mainElement.scrollIntoView({
  //     block: 'end',
  //     behavior: 'smooth'
  //   });
  // })

  window.addEventListener('contextmenu', (e) => {
    console.log('触发了');
  })
  // setInterval(() => {
  //   document.documentElement.scrollBy({
  //     top: 20
  //   })
  // }, 500)
})