'use strict';

(function() {
  var container = document.querySelector('#container');
  var weface = new Weface();
  var messages = [
    'Hello! /::)',
    'Bye! /:bye'
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
