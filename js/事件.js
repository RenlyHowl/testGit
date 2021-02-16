(
  () => {
    window.onload = function() {
      document.querySelector('main').addEventListener('click', (e) => {
        console.log('第二个')
        console.dir(e);
        console.log('鼠标事件触发了');
        console.log(e.target);
        console.log(e.currentTarget)
      }, {
        // capture: true
      })
      
      // 搭建一个事件对象
      // class Hd {
      //   constructor(el) {
      //     this.el = el;
      //     el.addEventListener('click', this.hanlder.bind(this))
      //   }
      //   hanlder() {

      //   }
      // }
      document.querySelector('main').addEventListener('copy', () => {
        alert('静止复制');
      })



    }
  }
)()