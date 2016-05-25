/* Used for managing the style of DOM elements */

function StyleUtils () {
  this.parse = function (elem) {
    var style = elem.getAttribute('style') || '';
    var split = style.split(';');
    var i;
    var prop;
    var parsed = {};

    for (i = 0; i < split.length; i += 1) {
      if (split[i] !== '') {
        prop = split[i].split(':');
        parsed[prop[0]] = prop[1];
      }
    }

    return parsed;
  };

  this.set = function (elem, style) {
    var styleStr = '';
    var key;

    for (key in style) {
      if (style.hasOwnProperty(key))
        styleStr += key + ':' + style[key] + ';';
    }

    elem.setAttribute('style', styleStr);
  };

  this.update = function (elem, style) {
    var curr = this.parse(elem);
    var key;

    for (key in style) {
      if (style.hasOwnProperty(key))
        curr[key] = style[key];
    }

    this.set(elem, curr);
  };
}