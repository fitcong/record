"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
_core.default.component({
  props: {
    gitem: {}
  },
  data: {},
  methods: {
    tap: function tap() {
      this.gitem.childname = "Child Random(".concat(Math.random(), ")");
      var index = this.$parent.$children.indexOf(this);
      console.log("Item ".concat(index, ", ID is ").concat(this.gitem.childid));
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'25': {"tap": function proxyHandlerWithEvent ($event) {
    var _vm=this;
      return (function () {
        _vm.tap($event)
      })();
    
  }}}, models: {} });