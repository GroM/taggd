(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Taggd = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
},{}],2:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],3:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],4:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],5:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf");

var superPropBase = require("./superPropBase");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
},{"./getPrototypeOf":6,"./superPropBase":14}],6:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],7:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":12}],8:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],9:[function(require,module,exports){
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
},{}],10:[function(require,module,exports){
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;
},{}],11:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":15,"./assertThisInitialized":2}],12:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],13:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArrayLimit = require("./iterableToArrayLimit");

var nonIterableRest = require("./nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
},{"./arrayWithHoles":1,"./iterableToArrayLimit":9,"./nonIterableRest":10}],14:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
},{"./getPrototypeOf":6}],15:[function(require,module,exports){
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],16:[function(require,module,exports){
// http://stackoverflow.com/questions/442404/dynamically-retrieve-the-position-x-y-of-an-html-element
module.exports = function(el) {
  if (el.getBoundingClientRect) {
      return el.getBoundingClientRect();
  }
  else {
    var x = 0, y = 0;
    do {
        x += el.offsetLeft - el.scrollLeft;
        y += el.offsetTop - el.scrollTop;
    } 
    while (el = el.offsetParent);

    return { "left": x, "top": y }
  }
}
},{}],17:[function(require,module,exports){

/**
 * get the window's scrolltop.
 * 
 * @return {Number}
 */

module.exports = function(){
  if (window.pageYOffset) return window.pageYOffset;
  return document.documentElement.clientHeight
    ? document.documentElement.scrollTop
    : document.body.scrollTop;
};

},{}],18:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var EventEmitter = require('../util/event-emitter');

var ObjectIs = require('../util/object-is');

var TypeErrorMessage = require('../util/type-error-message');

var Tag =
/*#__PURE__*/
function (_EventEmitter) {
  (0, _inherits2["default"])(Tag, _EventEmitter);

  /**
   * Create a new Tag instance
   * @param {{ x: Number, y: Number }} position - The tag’s coordinates
   * @param {String|Function} text - The tag’s content
   * @param {Object} [buttonAttributes = {}] - The button’s attributes
   * @param {Object} [popupAttributes = {}] - The popup’s attributes
   */
  function Tag(position, text) {
    var _this;

    var buttonAttributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var popupAttributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    (0, _classCallCheck2["default"])(this, Tag);

    if (!ObjectIs.ofType(position, 'object') || Array.isArray(position)) {
      throw new TypeError(TypeErrorMessage.getObjectMessage(position));
    } else if (!('x' in position) || !('y' in position)) {
      throw new Error("".concat(position, " should have x and y property"));
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Tag).call(this));
    _this.wrapperElement = document.createElement('div');

    _this.wrapperElement.classList.add('taggd__wrapper');

    _this.buttonElement = document.createElement('button');

    _this.buttonElement.classList.add('taggd__button');

    _this.popupElement = document.createElement('span');

    _this.popupElement.classList.add('taggd__popup');

    _this.wrapperElement.appendChild(_this.buttonElement);

    _this.wrapperElement.appendChild(_this.popupElement);

    _this.isControlsEnabled = false;
    _this.inputLabelElement = undefined;
    _this.buttonSaveElement = undefined;
    _this.buttonDeleteElement = undefined;

    _this.buttonSaveElementClickHandler = function () {
      return _this.setText(_this.inputLabelElement.value);
    };

    _this.buttonDeleteElementClickHandler = function () {
      _this.emit('taggd.tag.delete', (0, _assertThisInitialized2["default"])(_this));
    };

    _this.text = undefined;

    _this.setButtonAttributes(buttonAttributes);

    _this.setPopupAttributes(popupAttributes);

    _this.setPosition(position.x, position.y);

    _this.setText(text);

    _this.hide();

    return _this;
  }
  /**
   * Subscribe to an event.
   * @param {String} eventName - The event to subscribe to.
   * @param {Function} handler - The handler to execute.
   * @return {Taggd} Current Taggd instance
   */


  (0, _createClass2["default"])(Tag, [{
    key: "on",
    value: function on(eventName, handler) {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(Tag.prototype), "on", this).call(this, eventName, handler);
    }
    /**
     * Unsubscribe from an event.
     * @param {String} eventName - The event to unsubscribe from.
     * @param {Function} handler - The handler that was used to subscribe.
     * @return {Taggd} Current Taggd instance
     */

  }, {
    key: "off",
    value: function off(eventName, handler) {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(Tag.prototype), "off", this).call(this, eventName, handler);
    }
    /**
     * Subscribe to an event and unsubscribe once triggered.
     * @param {String} eventName - The event to subscribe to.
     * @param {Function} handler - The handler to execute.
     * @return {Taggd} Current Taggd instance
     */

  }, {
    key: "once",
    value: function once(eventName, handler) {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(Tag.prototype), "once", this).call(this, eventName, handler);
    }
    /**
     * Test whether the tag is hidden or not
     * @return {Boolean} A boolean indicating the tag’s state
     */

  }, {
    key: "isHidden",
    value: function isHidden() {
      return this.popupElement.style.display === 'none';
    }
    /**
     * Show the tag
     * @return {Taggd.Tag} Current Tag
     */

  }, {
    key: "show",
    value: function show() {
      var isCanceled = !this.emit('taggd.tag.show', this);

      if (!isCanceled) {
        this.popupElement.style.display = '';
        this.emit('taggd.tag.shown', this);
      }

      return this;
    }
    /**
     * Hide the tag
     * @return {Taggd.Tag} Current Tag
     */

  }, {
    key: "hide",
    value: function hide() {
      var isCanceled = !this.emit('taggd.tag.hide', this);

      if (!isCanceled) {
        this.popupElement.style.display = 'none';
        this.emit('taggd.tag.hidden', this);
      }

      return this;
    }
    /**
     * Set the tag’s text
     * @param {String|Function} text - The tag’s content
     * @return {Taggd.Tag} Current Tag
     */

  }, {
    key: "setText",
    value: function setText(text) {
      if (!ObjectIs.ofType(text, 'string') && !ObjectIs["function"](text)) {
        throw new TypeError(TypeErrorMessage.getMessage(text, 'a string or a function'));
      }

      var isCanceled = !this.emit('taggd.tag.change', this);

      if (!isCanceled) {
        if (ObjectIs["function"](text)) {
          this.text = text(this);
        } else {
          this.text = text;
        }

        if (!this.isControlsEnabled) {
          this.popupElement.innerHTML = this.text;
        } else {
          this.inputLabelElement.value = this.text;
        }

        this.emit('taggd.tag.changed', this);
      }

      return this;
    }
    /**
     * Set the tag’s position
     * @param {Number} x - The tag’s x-coordinate
     * @param {Number} y - The tag’s y-coordinate
     * @return {Taggd.Tag} Current Tag
     */

  }, {
    key: "setPosition",
    value: function setPosition(x, y) {
      if (!ObjectIs.number(x)) {
        throw new TypeError(TypeErrorMessage.getFloatMessage(x));
      }

      if (!ObjectIs.number(y)) {
        throw new TypeError(TypeErrorMessage.getFloatMessage(y));
      }

      var isCanceled = !this.emit('taggd.tag.change', this);

      if (!isCanceled) {
        var positionStyle = Tag.getPositionStyle(x, y);
        this.wrapperElement.style.left = positionStyle.left;
        this.wrapperElement.style.top = positionStyle.top;
        this.emit('taggd.tag.changed', this);
      }

      return this;
    }
    /**
     * Set the tag button’s attributes
     * @param {Object} atttributes = {} - The attributes to set
     * @return {Taggd.Tag} Current tag
     */

  }, {
    key: "setButtonAttributes",
    value: function setButtonAttributes() {
      var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!ObjectIs.ofType(attributes, 'object') || Array.isArray(attributes)) {
        throw new TypeError(TypeErrorMessage.getObjectMessage(attributes));
      }

      var isCanceled = !this.emit('taggd.tag.change', this);

      if (!isCanceled) {
        Tag.setElementAttributes(this.buttonElement, attributes);
        this.emit('taggd.tag.changed', this);
      }

      return this;
    }
    /**
     * Set the tag popup’s attributes
     * @param {Object} atttributes = {} - The attributes to set
     * @return {Taggd.Tag} Current tag
     */

  }, {
    key: "setPopupAttributes",
    value: function setPopupAttributes() {
      var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!ObjectIs.ofType(attributes, 'object') || Array.isArray(attributes)) {
        throw new TypeError(TypeErrorMessage.getObjectMessage(attributes));
      }

      var isCanceled = !this.emit('taggd.tag.change', this);

      if (!isCanceled) {
        Tag.setElementAttributes(this.popupElement, attributes);
        this.emit('taggd.tag.changed', this);
      }

      return this;
    }
    /**
     * Enables the tag controls
     * @return {Taggd.Tag} Current tag
     */

  }, {
    key: "enableControls",
    value: function enableControls() {
      this.isControlsEnabled = true;
      this.inputLabelElement = document.createElement('input');
      this.buttonSaveElement = document.createElement('button');
      this.buttonDeleteElement = document.createElement('button');
      this.inputLabelElement.classList.add('taggd__editor-input');
      this.buttonSaveElement.classList.add('taggd__editor-button', 'taggd__editor-button--save');
      this.buttonDeleteElement.classList.add('taggd__editor-button', 'taggd__editor-button--delete');
      this.buttonSaveElement.innerHTML = Tag.LABEL_BUTTON_SAVE;
      this.buttonDeleteElement.innerHTML = Tag.LABEL_BUTTON_DELETE;
      this.buttonSaveElement.addEventListener('click', this.buttonSaveElementClickHandler);
      this.buttonDeleteElement.addEventListener('click', this.buttonDeleteElementClickHandler);
      this.popupElement.innerHTML = '';
      this.popupElement.appendChild(this.inputLabelElement);
      this.popupElement.appendChild(this.buttonSaveElement);
      this.popupElement.appendChild(this.buttonDeleteElement); // Set input content

      this.setText(this.text);
      return this;
    }
    /**
     * Disabled the tag controls
     * @return {Taggd.Tag} Current tag
     */

  }, {
    key: "disableControls",
    value: function disableControls() {
      this.isControlsEnabled = false;
      this.inputLabelElement = undefined;
      this.buttonSaveElement = undefined;
      this.buttonDeleteElement = undefined; // Remove elements and set set content

      this.setText(this.text);
      return this;
    }
    /**
     * Get a Taggd.createFromObject-compatible object
     * @return {Object} A object for JSON
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      function getAttributes(rawAttributes) {
        var attributes = {};
        Array.prototype.forEach.call(rawAttributes, function (attribute) {
          if (attribute.name === 'class' || attribute.name === 'style') {
            return;
          }

          attributes[attribute.name] = attribute.value;
        });
        return attributes;
      }

      return {
        position: {
          x: parseFloat(this.wrapperElement.style.left) / 100,
          y: parseFloat(this.wrapperElement.style.top) / 100
        },
        text: this.text,
        buttonAttributes: getAttributes(this.buttonElement.attributes),
        popupAttributes: getAttributes(this.popupElement.attributes)
      };
    }
    /**
     * Set element attributes
     * @param {DomNode} element - The element the attributes should be set to
     * @param {Object} [attributes = {}] - A map of attributes to set
     * @return {DomNode} The original element
     */

  }], [{
    key: "setElementAttributes",
    value: function setElementAttributes(element) {
      var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!ObjectIs.ofType(attributes, 'object') || Array.isArray(attributes)) {
        throw new TypeError(TypeErrorMessage.getObjectMessage(attributes));
      }

      Object.entries(attributes).forEach(function (attribute) {
        var _attribute = (0, _slicedToArray2["default"])(attribute, 2),
            attributeName = _attribute[0],
            attributeValue = _attribute[1];

        if (attributeName === 'class' && element.getAttribute(attributeName)) {
          var classValue = "".concat(element.getAttribute(attributeName), " ").concat(attributeValue);
          element.setAttribute(attributeName, classValue);
          return;
        }

        element.setAttribute(attributeName, attributeValue);
      });
      return element;
    }
    /**
     * Get the position style
     * @param {Number} x - The tag’s x-coordinate
     * @param {Number} y - The tag’s y-coordinate
     * @return {Object} The style
     */

  }, {
    key: "getPositionStyle",
    value: function getPositionStyle(x, y) {
      if (!ObjectIs.number(x)) {
        throw new TypeError(TypeErrorMessage.getFloatMessage(x));
      }

      if (!ObjectIs.number(y)) {
        throw new TypeError(TypeErrorMessage.getFloatMessage(y));
      }

      return {
        left: "".concat(x * 100, "%"),
        top: "".concat(y * 100, "%")
      };
    }
    /**
     * Create a tag from object
     * @param {Object} object - The object containing all information
     * @return {Tag} The created Tag instance
     */

  }, {
    key: "createFromObject",
    value: function createFromObject(object) {
      return new Tag(object.position, object.text, object.buttonAttributes, object.popupAttributes);
    }
  }]);
  return Tag;
}(EventEmitter);
/**
 * Label for a new tag
 * @const
 * @type {String}
 * @ignore
 */


Tag.LABEL_NEW_TAG = 'New tag';
/**
 * Label for save button
 * @const
 * @type {String}
 * @ignore
 */

Tag.LABEL_BUTTON_SAVE = 'save';
/**
 * Label for delete button
 * @const
 * @type {String}
 */

Tag.LABEL_BUTTON_DELETE = 'delete';
module.exports = Tag;

},{"../util/event-emitter":21,"../util/object-is":22,"../util/type-error-message":23,"@babel/runtime/helpers/assertThisInitialized":2,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/get":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":11,"@babel/runtime/helpers/slicedToArray":13}],19:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var getElementOffset = require('offset');

var getScrollTop = require('scrolltop');

var Tag = require('./Tag');

var EventEmitter = require('../util/event-emitter');

var ObjectIs = require('../util/object-is');

var TypeErrorMessage = require('../util/type-error-message');

var Taggd =
/*#__PURE__*/
function (_EventEmitter) {
  (0, _inherits2["default"])(Taggd, _EventEmitter);

  /**
   * Create a new taggd instance
   * @param {HTMLElement} image - The image to wrap
   * @param {Object} [options = {}] - The [options]{@link https://doclets.io/timseverien/taggd/master/options}
   * @param {Array} [data = []] - The [tags]{@link https://timseverien.github.io/taggd/v3/generator}
   */
  function Taggd(image) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    (0, _classCallCheck2["default"])(this, Taggd);

    if (!(image instanceof Element)) {
      throw new TypeError(TypeErrorMessage.getMessage(image, Element));
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Taggd).call(this));
    _this.wrapper = document.createElement('div');

    _this.wrapper.classList.add('taggd');

    image.classList.add('taggd__image');
    image.parentElement.insertBefore(_this.wrapper, image);
    image.parentElement.removeChild(image);

    _this.wrapper.appendChild(image);

    _this.image = image;
    _this.options = {};
    _this.tags = [];

    _this.imageClickHandler = function (e) {
      var scrollTop = getScrollTop();
      var offset = getElementOffset(_this.image);
      var position = {
        x: (e.pageX - offset.left) / _this.image.width,
        y: (e.pageY - offset.top - scrollTop) / _this.image.height
      };
      var tag = new Tag(position, Tag.LABEL_NEW_TAG);
      tag.enableControls();

      _this.addTag(tag);
    };

    _this.setOptions(options);

    _this.setTags(data);

    return _this;
  }
  /**
   * Subscribe to an event.
   * @param {String} eventName - The event to subscribe to.
   * @param {Function} handler - The handler to execute.
   * @return {Taggd} Current Taggd instance
   */


  (0, _createClass2["default"])(Taggd, [{
    key: "on",
    value: function on(eventName, handler) {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(Taggd.prototype), "on", this).call(this, eventName, handler);
    }
    /**
     * Unsubscribe from an event.
     * @param {String} eventName - The event to unsubscribe from.
     * @param {Function} handler - The handler that was used to subscribe.
     * @return {Taggd} Current Taggd instance
     */

  }, {
    key: "off",
    value: function off(eventName, handler) {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(Taggd.prototype), "off", this).call(this, eventName, handler);
    }
    /**
     * Subscribe to an event and unsubscribe once triggered.
     * @param {String} eventName - The event to subscribe to.
     * @param {Function} handler - The handler to execute.
     * @return {Taggd} Current Taggd instance
     */

  }, {
    key: "once",
    value: function once(eventName, handler) {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(Taggd.prototype), "once", this).call(this, eventName, handler);
    }
    /**
     * Set taggd options
     * @param {Object} options - The options to set
     * @return {Taggd} Current Taggd instance
     */

  }, {
    key: "setOptions",
    value: function setOptions(options) {
      if (!ObjectIs.ofType(options, 'object') || Array.isArray(options)) {
        throw new TypeError(TypeErrorMessage.getObjectMessage(options));
      }

      this.options = Object.assign(this.options, Taggd.DEFAULT_OPTIONS, options);
      return this;
    }
    /**
     * Add a single tag
     * @param {Taggd.Tag} tag - The tag to add
     * @return {Taggd} Current Taggd instance
     */

  }, {
    key: "addTag",
    value: function addTag(tag) {
      var _this2 = this;

      if (!ObjectIs.ofInstance(tag, Tag)) {
        throw new TypeError(TypeErrorMessage.getTagMessage(tag));
      }

      var isCanceled = !this.emit('taggd.tag.add', this, tag);
      var hideTimeout;
      /**
       * Test whether the event’s target is the button Element
       * @param {Event} e - The event object
       * @return {Boolean} Whether the event’s target is the button element
       */

      var isTargetButton = function isTargetButton(e) {
        return e.target === tag.buttonElement;
      };

      var clearTimeout = function clearTimeout() {
        if (hideTimeout) {
          window.clearTimeout(hideTimeout);
          hideTimeout = undefined;
        }
      };

      if (!isCanceled) {
        // Add events to show/hide tags
        // If show and hide event are identical, set show/hide mode to toggle
        if (this.options.show === this.options.hide) {
          tag.buttonElement.addEventListener(this.options.show, function (e) {
            if (!isTargetButton(e)) return;
            clearTimeout();

            if (tag.isHidden()) {
              tag.show();
            } else {
              tag.hide();
            }
          });
        } else {
          tag.buttonElement.addEventListener(this.options.show, function (e) {
            if (!isTargetButton(e)) return;
            clearTimeout();
            tag.show();
          });
          tag.buttonElement.addEventListener(this.options.hide, function (e) {
            if (!isTargetButton(e)) return;
            clearTimeout(); // If the use moves the mouse between the button and popup, a delay should give some time
            // to do just that. This only applies to the mouseleave event.

            if (_this2.options.hide === 'mouseleave') {
              hideTimeout = window.setTimeout(function () {
                return tag.hide();
              }, _this2.options.hideDelay);
            } else {
              tag.hide();
            }
          }); // Force visibility if user interacts with the popup element

          if (this.options.hide === 'mouseleave') {
            tag.popupElement.addEventListener('mouseover', function () {
              return clearTimeout();
            });
            tag.popupElement.addEventListener('mouseleave', function () {
              return tag.hide();
            });
          }
        }

        tag.once('taggd.tag.delete', function () {
          var tagIndex = _this2.tags.indexOf(tag);

          if (tagIndex >= 0) {
            _this2.deleteTag(tagIndex);
          }
        }); // Route all tag events through taggd instance

        tag.onAnything(function (eventName) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          _this2.emit.apply(_this2, [eventName, _this2].concat(args));
        });
        this.tags.push(tag);
        this.wrapper.appendChild(tag.wrapperElement);
        this.emit('taggd.tag.added', this, tag);
      }

      return this;
    }
    /**
     * Get a single tag by index
     * @param  {Number} index - The index of the desired tag
     * @return {Taggd.Tag} The tag to get
     */

  }, {
    key: "getTag",
    value: function getTag(index) {
      if (!Number.isInteger(index)) {
        throw new TypeError(TypeErrorMessage.getIntegerMessage(index));
      }

      return this.tags[index];
    }
    /**
     * Delete a single tag by index
     * @param {Number} index - The index of the desired tag
     * @return {Taggd} Current Taggd instance
     */

  }, {
    key: "deleteTag",
    value: function deleteTag(index) {
      if (!Number.isInteger(index)) {
        throw new TypeError(TypeErrorMessage.getIntegerMessage(index));
      }

      if (!this.tags[index]) {
        throw new Error("Tag at index ".concat(index, " does not exist."));
      }

      var tag = this.tags[index];
      var isCanceled = !this.emit('taggd.tag.delete', this, tag);

      if (!isCanceled) {
        this.wrapper.removeChild(tag.wrapperElement);
        this.tags.splice(index, 1);
        this.emit('taggd.tag.deleted', this, tag);
      }

      return this;
    }
    /**
     * Set all tags
     * @param {Taggd.Tag[]} tags An array of tags
     * @return {Taggd} Current Taggd instance
     */

  }, {
    key: "setTags",
    value: function setTags(tags) {
      this.deleteTags();
      this.addTags(tags);
      return this;
    }
  }, {
    key: "importTags",
    value: function importTags(tagsData) {
      var _this3 = this;

      if (!Array.isArray(tagsData)) {
        throw new TypeError(TypeErrorMessage.getArrayMessage(tagsData, 'object'));
      }

      tagsData.forEach(function (tag) {
        return _this3.addTag(Taggd.Tag.createFromObject(tag));
      });
      return this;
    }
    /**
     * Add multiple tags
     * @param {Taggd.Tag[]} tags - An array of tags
     * @return {Taggd} Current Taggd instance
     */

  }, {
    key: "addTags",
    value: function addTags(tags) {
      var _this4 = this;

      if (!Array.isArray(tags)) {
        throw new TypeError(TypeErrorMessage.getArrayMessage(tags, 'Taggd.Tag'));
      }

      tags.forEach(function (tag) {
        return _this4.addTag(tag);
      });
      return this;
    }
    /**
     * Get all tags
     * @return {Taggd.Tag[]} All tags of this Taggd instance
     */

  }, {
    key: "getTags",
    value: function getTags() {
      return this.tags;
    }
    /**
     * Remove all tags
     * @return {Taggd} Current Taggd instance
     */

  }, {
    key: "deleteTags",
    value: function deleteTags() {
      while (this.tags.length > 0) {
        this.deleteTag(0);
      }

      return this;
    }
    /**
     * Iterate and replace all tags
     * @param {Function} callback - The callback to execute for all tags
     * @return {Taggd} Current Taggd instance
     */

  }, {
    key: "map",
    value: function map(callback) {
      if (!ObjectIs["function"](callback)) {
        throw new TypeError(TypeErrorMessage.getFunctionMessage(callback));
      }

      this.tags = this.tags.map(callback);
      return this;
    }
    /**
     * Clean up memory
     * @return {Taggd} Current Taggd instance
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var isCanceled = !this.emit('taggd.destroy', this);

      if (!isCanceled) {
        this.deleteTags();
      }

      return this;
    }
    /**
     * Enable editor mode
     * @return {Taggd} Current Taggd instance
     */

  }, {
    key: "enableEditorMode",
    value: function enableEditorMode() {
      var isCanceled = !this.emit('taggd.editor.enable', this);

      if (!isCanceled) {
        this.image.addEventListener('click', this.imageClickHandler);
        this.getTags().forEach(function (tag) {
          return tag.enableControls();
        });
      }

      return this;
    }
    /**
     * Disable editor mode
     * @return {Taggd} Current Taggd instance
     */

  }, {
    key: "disableEditorMode",
    value: function disableEditorMode() {
      var isCanceled = !this.emit('taggd.editor.disable', this);

      if (!isCanceled) {
        this.image.removeEventListener('click', this.imageClickHandler);
        this.getTags().forEach(function (tag) {
          return tag.disableControls();
        });
      }

      return this;
    }
  }]);
  return Taggd;
}(EventEmitter);
/**
 * Default options for all Taggd instances
 * @const
 * @type {Object}
 * @ignore
 */


Taggd.DEFAULT_OPTIONS = {
  show: 'mouseenter',
  hide: 'mouseleave',
  hideDelay: 500
};
module.exports = Taggd;
module.exports.Tag = Tag;
window.Taggd = module.exports;

},{"../util/event-emitter":21,"../util/object-is":22,"../util/type-error-message":23,"./Tag":18,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/get":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":11,"offset":16,"scrolltop":17}],20:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Tag = _interopRequireDefault(require("./classes/Tag"));

var _Taggd = _interopRequireDefault(require("./classes/Taggd"));

_Taggd["default"].Tag = _Tag["default"];
module.exports = _Taggd["default"];

},{"./classes/Tag":18,"./classes/Taggd":19,"@babel/runtime/helpers/interopRequireDefault":8}],21:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var EVENT_WILDCARD = '*';

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    (0, _classCallCheck2["default"])(this, EventEmitter);
    this.handlers = {};
  }

  (0, _createClass2["default"])(EventEmitter, [{
    key: "onAnything",
    value: function onAnything(handler) {
      this.on(EVENT_WILDCARD, handler);
    }
  }, {
    key: "on",
    value: function on(eventName, handler) {
      if (!this.handlers[eventName]) {
        this.handlers[eventName] = [];
      }

      this.handlers[eventName].push(handler);
    }
  }, {
    key: "off",
    value: function off(eventName, handler) {
      if (!this.handlers[eventName]) return;
      var handlerIndex = this.handlers[eventName].indexOf(handler);

      if (handlerIndex >= 0) {
        this.handlers[eventName].splice(handlerIndex, 1);
      }
    }
  }, {
    key: "once",
    value: function once(eventName, handler) {
      var _this = this;

      this.on(eventName, function () {
        handler.apply(void 0, arguments);

        _this.off(eventName, handler);
      });
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var isCanceled = false;

      if (this.handlers[EVENT_WILDCARD]) {
        this.handlers[EVENT_WILDCARD].forEach(function (eventHandler) {
          var returnValue = eventHandler.apply(void 0, [eventName].concat(args));
          isCanceled = returnValue !== undefined && !returnValue || isCanceled;
        });
      }

      if (this.handlers[eventName]) {
        this.handlers[eventName].forEach(function (eventHandler) {
          var returnValue = eventHandler.apply(void 0, args);
          isCanceled = returnValue !== undefined && !returnValue || isCanceled;
        });
      }

      return !isCanceled;
    }
  }]);
  return EventEmitter;
}();

module.exports = EventEmitter;

},{"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/interopRequireDefault":8}],22:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

module.exports = {
  /**
   * Check wheter an object is an instance of type
   * @param {Object} object - The object to test
   * @param {Object} type - The class to test
   * @return {Boolean}
   */
  ofInstance: function ofInstance(object, type) {
    return object instanceof type;
  },

  /**
   * Check whether an object is equals to given type
   * @param {Object} object - The object to test
   * @param {String} type - The type to test
   * @return {Boolean}
   */
  ofType: function ofType(object, type) {
    return (0, _typeof2["default"])(object) === type;
  },
  // eslint-disable-line valid-typeof

  /**
   * Check whether given object is a function
   * @param {Object} object - The object to test
   * @return {Boolean}
   */
  "function": function _function(object) {
    return typeof object === 'function';
  },

  /**
   * Check whether given object is a Number
   * @param {Object} object - The object to test
   * @return {Boolean}
   */
  number: function number(object) {
    return !Number.isNaN(Number.parseFloat(object));
  }
};

},{"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/typeof":15}],23:[function(require,module,exports){
"use strict";

var TypeErrorMessage = {
  /**
   * Get the TypeError message
   * @param {Object} object - The tested object
   * @param {String} expectedType - A string describing the expected type
   * @return {String} The error message
   */
  getMessage: function getMessage(object, expectedType) {
    return "".concat(object, " should be ").concat(expectedType);
  },

  /**
   * Get the TypeError Array message
   * @param {Object} object - The tested object
   * @param {String} expectedType - The expected type of all array items
   * @return {String} The error message
   */
  getArrayMessage: function getArrayMessage(object, expectedType) {
    if (expectedType) {
      return TypeErrorMessage.getTypeErrorMessage(object, "an array of ".concat(expectedType));
    }

    return TypeErrorMessage.getTypeErrorMessage(object, 'an array');
  },

  /**
   * Get the TypeError Function message
   * @param {Object} object - The tested object
   * @return {String} The error message
   */
  getFunctionMessage: function getFunctionMessage(object) {
    return TypeErrorMessage.getTypeErrorMessage(object, 'a function');
  },

  /**
   * Get the TypeError Integer message
   * @param {Object} object - The tested object
   * @return {String} The error message
   */
  getIntegerMessage: function getIntegerMessage(object) {
    return TypeErrorMessage.getTypeErrorMessage(object, 'an integer');
  },

  /**
   * Get the TypeError Float message
   * @param {Object} object - The tested object
   * @return {String} The error message
   */
  getFloatMessage: function getFloatMessage(object) {
    return TypeErrorMessage.getTypeErrorMessage(object, 'a floating number');
  },

  /**
   * Get the TypeError Object message
   * @param {Object} object - The tested object
   * @return {String} The error message
   */
  getObjectMessage: function getObjectMessage(object) {
    return TypeErrorMessage.getTypeErrorMessage(object, 'an object');
  },

  /**
   * Get the TypeError Taggd.Tag message
   * @param {Object} object - The tested object
   * @return {String} The error message
   */
  getTagMessage: function getTagMessage(object) {
    return TypeErrorMessage.getTypeErrorMessage(object, 'a tag');
  },

  /**
   * Get TypeError message
   * @param {Object} object - The tested object
   * @param {String} message - The type message
   * @return {String} The error message
   */
  getTypeErrorMessage: function getTypeErrorMessage(object, message) {
    return "".concat(object, " is not a ").concat(message);
  }
};
module.exports = TypeErrorMessage;

},{}]},{},[20])(20)
});
