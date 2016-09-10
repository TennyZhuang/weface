'use strict';

(function() {
  var container = document.querySelector('#container');
  var weface = new Weface({
    styles: {
      'vertical-align': 'baseline',
      'width': '34px'
    }
  });

  var messages = [
    'Hello! /::)',
    'Bye! /:bye/:bye'
  ];

  function start() {
    messages.forEach(function(msg) {
      var li = document.createElement('li');
      li.innerHTML = weface.compile(msg);
      container.appendChild(li);
    });
  }

  window.onload = start;
})();
