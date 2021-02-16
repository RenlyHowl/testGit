setTimeout(() => {
//   let Load = document.querySelector('.noding');
//   console.dir(Load);
//   // let newLoad = Load.cloneNode();
//   let newLoad = document.importNode(Load);
//   console.log(newLoad)
//   // let Load = document.getElementById('node');
//   let spans = document.getElementsByTagName('span');
//  console.dir( Load.attributes['data-hello']);
//  console.log( Load.getAttribute('data-hello'))
// //  Load.setAttribute('id', 'node111')
// Load.removeAttribute('class')
//   console.dir(spans);
//   console.dir(spans[0])
//   console.log(Load.attributes[0])
//   console.dir(Load)
  // Load.contentEditable = true;
  let Test = document.getElementsByClassName('test')[0];
  console.log(Test.innerHTML);
  // Test.innerHTML += '<h2>我是test中的h2标签</h2>';
  document.getElementById('clickBtn').addEventListener('click', (e) => {
    // this.parentElement.innerHTML += '<h2>我是test中的h2标签</h2>';
    // console.log(this)
    // console.log(e.target.parentElement)
    // e.target.parentElement.innerHTML += '<h2>我是test中的h2标签</h2>'
    // console.log(e.target.parentElement.outerHTML)
    // e.target.parentElement.outerHTML = '<h2>我是test中的h2标签</h2>';
    // console.log(e.target.parentElement.innerText);
    // console.log(e.target.parentElement.outerText);
    // e.target.parentElement.insertAdjacentText('beforeEnd', '<h2>我是test中的h2标签</h2>');
    const newH2 = document.createElement('h2');
    newH2.innerHTML = '我是test中的h2标签';
    // console.dir(newH2);
    // e.target.parentElement.before(newH2)
    // e.target.parentElement.replaceWith(newH2)
    // e.target.parentElement.insertAdjacentHTML('beforebegin', '<h2>我是test中的h2标签</h2>');
    // e.target.parentElement.appendChild(newH2);
    // console.dir(e.target.parentElement.children[1])
    // e.target.parentElement.insertBefore(newH2, e.target.parentElement.children[1])
    // e.target.parentElement.removeChild(e.target.parentElement.children[0]);
    // e.target.parentElement.replaceChild(newH2, e.target.parentElement.children[0])
    // console.log(e.target.parentElement.classList)
    console.log(window.getComputedStyle(e.target.parentElement)['font-size'])
  })

  
})