function isItScum(node) {
  if (node.tagName !== 'SCRIPT') {
    return false;
  }
  var match = node.innerHTML.match(/onclickads/ig);
  if (match) {
    murderTheCunt(node);
  }
}

function murderTheCunt(node) {
  node.innerHTML = null;
    delete node;
}
function oohWhatsThis(event) {
  letsSeeHere(event.relatedNode);
}

function letsSeeHere(node) {
  var child, next, _results;
  child = void 0;
  next = void 0;
  switch (node.nodeType) {
    case 1:
      isItScum(node);
    case 9:
    case 11:
      child = node.firstChild;
      _results = [];
      while (child) {
        next = child.nextSibling;
        letsSeeHere(child);
        _results.push(child = next);
      }
      return _results;
      break;
    // case 3:
  }
}

document.addEventListener('DOMNodeInserted', oohWhatsThis);