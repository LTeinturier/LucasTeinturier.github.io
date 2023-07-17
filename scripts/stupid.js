// module.exports = {'wink':wink()}
wink()
nyancat()
function wink () {
    "use strict";
    
      // type 'wink' on your keyboard
      var key = [87,73,78,75];
      var ck = 0;
      var max = key.length;
    
      var wink = function() {
    
        var shock = document.createElement('div');
        var img = new Image;
        img.src = data;
        img.style.width = '300px';
        img.style.height = '300px';
        img.style.transition = '1s all';
        img.style.position = 'fixed';
        img.style.left = 'calc(50% - 300px)';
        img.style.bottom = '-600px';
        img.style.zIndex = 999999;
    
        document.body.appendChild(img);
    
        window.setTimeout(function(){
          img.style.bottom = '0px';
        },30);
    
        window.setTimeout(function(){
          img.style.bottom = '-600px';
        }, 4300);
        window.setTimeout(function(){
          img.parentNode.removeChild(img);
          shock.parentNode.removeChild(shock);
        }, 5400);
    
      };
    
      var record = function(e) {
    
        if ( e.which === key[ck] ) {
          ck++;
        } else {
          ck = 0;
        }
    
        if ( ck >= max ) {
          wink();
          ck = 0;
        }
    
      };
    
      var init = function(data) {
        document.addEventListener('keyup', record);
      };
    
    //   var data = 'https://weichiachang.github.io/easter-eggs-mobile/images/wink.gif';
      var data = 'images/wink.gif';
    
      init(data);
  }

  function nyancat() {
    "use strict"
  
    // type 'nyancat' on your keyboard
    let key = [78, 89, 65, 78, 67, 65, 84]
    // let key = [67]
    let ck = 0
    let max = key.length
  
    let nyancat = function () {
  
      var shock = document.createElement('div')
      var img = new Image()
      img.src = data
      img.style.width = '230px'
      img.style.height = '150px'
      img.style.transition = '6s all linear'
      img.style.position = 'fixed'
      img.style.left = '-400px'
    //   img.style.bottom = 'calc(-50% + 340px)'
      img.style.bottom = '300px'
      img.style.zIndex = 999999
  
      document.body.appendChild(img)
  
      // window.setTimeout(function(){
      //   img.style.left = 'calc(50% - 200px)'
      // },50)
  
      window.setTimeout(function () {
        img.style.left = 'calc(100% + 500px)'
      }, 50)
  
      window.setTimeout(function () {
        img.parentNode.removeChild(img)
      }, 6000)
  
    }
  
    let record = function (e) {
  
      if (e.which === key[ck]) {
        ck++
      } else {
        ck = 0
      }
  
      if (ck >= max) {
        nyancat()
        ck = 0
      }
  
    }
  
    let init = function (data) {
      document.addEventListener('keyup', record)
    }
  
    // let data = 'https://i.imgur.com/3kI22fU.gif'
    let data = "images/nyancat.gif"
  
    init(data)
  }