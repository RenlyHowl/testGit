(
  window.onload = function() {
    // 一 进度条
    function req(name) {
     return new Promise(resolve => {
        setTimeout(() => {
          resolve(name);
        }, 1000)
      })
    }
    (async () => {
      let arr = ['111', '222', '333', '444'];
      for(let i = 0; i < arr.length; i++) {
        await req(arr[i]);
        let progress = (i + 1) / arr.length;
        document.querySelector('.loading').style.width = progress * 100 + '%';
        document.querySelector('.loading').innerHTML = `${progress * 100}%`
      }
    })()

    // 二 使用async和Promise.all并发执行
    async function p1() {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('p1p1p1p1');
          resolve();
        }, 1000)
      })
    }
    async function p2() {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('p2p2p2p2');
          resolve();
        }, 2000)
      })
    }
    // async function hd() {
    //   await p2();
    //   await p1();
      
    // }
    Promise.all([p1(), p2()])
    
  }
)()