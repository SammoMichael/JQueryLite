const DomNodeCollection = require("./dom_node_collection");

const _docReadyCallbacks = [];
let _docReady = false;

window.$l = (arg) => {
    switch (typeof arg) {
        case "function":
        case "string":
        case "object":
            if (arg instanceof HTMLElement) {
                return new DomNodeCollection([arg]);
            }            
    
        
    }
};

$l.extend = (base, ...otherObjs) => {
    otherObjs.forEach(obj) => {
        for (const prop in obj) {
            base[prop] = obj[prop];
        }
    };
    return base;
}

getnodesFromDom = (selector) => {
    const nodes = document.querySelectorAll(selector);
    const nodesArray = Array.from(nodes);
    return new DomNodeCollection(nodesArray);s
};

document.addEventListener('DOMConetentLoaded', () => {
    _docReady = true;
    _docReadyCallbacks.forEach(func => func());
});