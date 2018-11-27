const DOMNodeCollection = require('../src/dom_node_collection.js');

$(document).ready(function() {
  // Handler for .ready() called.
});

const $l = function (query) {
  let htmlArr = [];
  if (query instanceof HTMLElement){
    htmlArr.push(query);
    return new DOMNodeCollection(htmlArr);
  } else {
    const nodes = document.querySelectorAll(query);
    const nodeArr = Array.from(nodes);
    return new DOMNodeCollection(nodeArr);
  }
};

window.$l = $l;
