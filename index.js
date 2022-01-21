const counter = document.getElementById("counter");
let time = 10;

setTimeout(() => {
  counter.innerText = time--;
  setTimeout(() => {
    counter.innerText = time--;
    setTimeout(() => {
      counter.innerText = time--;
      setTimeout(() => {
        counter.innerText = time--;
        setTimeout(() => {
          counter.innerText = time--;
          setTimeout(() => {
            counter.innerText = time--;
            setTimeout(() => {
              counter.innerText = time--;
              setTimeout(() => {
                counter.innerText = time--;
                setTimeout(() => {
                  counter.innerText = time--;
                  setTimeout(() => {
                    counter.innerText = time--;
                    setTimeout(() => {
                      counter.innerHTML = `
                      <h1>Happy Independence Day</h1> `;
                      document.body.style.backgroundImage = "url(https://fc09.deviantart.net/fs71/f/2014/222/6/9/india_flag___happy_independence_day_by_prince_pal_by_princepal-d7ujwj6.jpg)";
                      document.body.style.backgroundRepeat = "no-repeat";
                      document.body.style.backgroundSize = "cover";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
