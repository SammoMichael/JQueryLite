class DOMNodeCollection {
  constructor(nodes){
    this.nodes = nodes;
  }

  each(cb) {
    this.nodes.forEach(cb);
  }

  html (str) {
    if (str) {
      this.nodes.forEach((node) => {
        node.innerHTML = str;
      });
    } else {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.nodes.forEach((node) => {
      node.innerHTML = '';
    });
  }

  append(element) {
    this.nodes.forEach((node) => {
      node.innerHTML += element.outerHTML;
    });
  }

  attr(attributeName, value) {
    if (value) {
      this.nodes.forEach((node) => {
        node.setAttribute(attributeName, value);
      });
      return this;
    } else {
      return this.nodes[0].getAttribute(attributeName);
    }
  }

  addClass(str) {
    let classes = this.attr('class');
    classes += " " + str;
    this.attr('class', classes);
  }

  removeClass(str){
    let classes = this.attr('class').split(' ');
    let newClasses = classes.filter(clas => clas !== str);
    this.attr('class', newClasses);
  }

  children () {
    // this.nodes.selectAllChildren(this.nodes);
    let children = [];
    this.nodes.forEach((node) => {
      children.push(node.children);
    });
    return new DOMNodeCollection(children);
  }

  parent () {
    // this.nodes.selectAllChildren(this.nodes);
    let parents = [];
    this.nodes.forEach((node) => {
      if (!node.parentNode.seen){
        parents.push(node.parentNode);
        node.parentNode.seen = true;
      }
    });
    return new DOMNodeCollection(parents);
  }

  find (selector) {
    let elements = [];
    this.nodes.forEach((node) => {
      let selected = (node.querySelectorAll(selector));
      if (selected.length > 0) {
        elements = elements.concat(Array.from(selected));
      }
    });
    return new DOMNodeCollection(elements);
  }

  remove () {
    this.nodes.forEach((node) => {
      node.html = '';
      node.remove();
    });
  }

  on (event, func) {
    this.nodes[0].addEventListener(event, func);
    if (typeof node[eventkey] === "undefined") {
      node[eventKey] = [];
    }
    node[eventKey].push(callback);
  }

  off (event, func) {
    this.nodes[0].removeEventListener(event, func);
  }

  
}

module.exports = DOMNodeCollection;
