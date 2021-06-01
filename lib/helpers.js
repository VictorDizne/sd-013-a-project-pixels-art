function create(tagName, text, attributes) {
  const el = document.createElement(tagName);

  if (text) {
    const textNode = document.createTextNode(text);
    prepend(el)(textNode)();
  }

  if (attributes) {
    for (let attribute of Object.entries(attributes)) {
      const key = attribute[0];
      const value = attribute[1];
      el.setAttribute(key, value);
    }
  }

  return el;
}

function add(nodeElements) {
  return function whichFeatures(tagName, text, attributes) {
    let child = create(tagName, text, attributes);
    return function whichElements(start, end) {
      if (!start) start = 0;
      if (!end) end = nodeElements.length;
      if (end > nodeElements.length)
        throw Error("Index is greater than selected elements' length");

      for (let i = start; i < end; i += 1) {
        nodeElements[i].appendChild(child);
      }
    };
  };
}

function append(nodeElements) {
  return function whichChild(childElement) {
    return function whichElements(start, end) {
      if (!start) start = 0;
      if (!end) end = nodeElements.length;
      if (end > nodeElements.length)
        throw Error("Index is greater than selected elements' length");

      for (let i = start; i < end; i += 1) {
        nodeElements[i].appendChild(childElement);
      }
    };
  };
}

function prepend(nodeElements) {
  return function whichChild(childElement) {
    return function whichElements(start, end) {
      const nodes = isIterable(nodeElements)
        ? [...nodeElements]
        : [nodeElements];
      if (!start) start = 0;
      if (!end) end = nodes.length;
      if (end > nodes.length)
        throw Error("Index is greater than selected elements' length");

      for (let i = start; i < end; i += 1) {
        let children = Array.from(nodes[i].children);
        clear(nodes[i]);
        children.unshift(childElement);

        for (let child of children) {
          nodes[i].appendChild(child);
        }
      }
    };
  };
}

function changeStyle(HTMLElement) {
  return function applyStyle(property, value) {
    HTMLElement.style[property] = value;
  };
}

function clear(nodeElement) {
  for (let child of nodeElement.children) {
    !isScript(child) && nodeElement.removeChild(child);
  }
}

function dom(selector, start, end) {
  let self = this;

  self.elements = setElements(selector, start, end);
  self.add = add(this.elements);
  self.append = append(this.elements);
  self.prepend = prepend(this.elements);

  return self;

  // ***************

  function setElements(selector, start, end) {
    let nodes = Array.from(document.querySelectorAll(selector));

    if (end > nodes.length) {
      throw Error("Index is greater than selected elements' length");
    }

    if (!start) start = 0;
    if (!end) end = nodes.length;

    return nodes.slice(start, end);
  }

  // https://www.programmersought.com/article/54683995210/#:~:text=How%20to%20check%20it%20is,null%20%26%26%20typeof%20obj%5BSymbol.
}

function isIterable(obj) {
  return typeof obj[Symbol.iterator] === 'function';
}

function isScript(el) {
  return HTMLScriptElement.prototype.isPrototypeOf(el);
}
