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
//
//
_core.default.component({
  data: {
    topInfo: {
      statusBarHeight: 20
    },
    leftRectPosition: {}
  },
  computed: {},
  created: function created() {
    console.log('navigator load');
    this.topInfo = wx.getSystemInfoSync();
    this.leftRectPosition = wx.getMenuButtonBoundingClientRect();
    console.log(this.leftRectPosition);
  },
  methods: {}
}, {info: {"components":{},"on":{}}, handlers: {'178': {"tap": function proxyHandlerWithEvent ($event) {
    var _vm=this;
      return (function () {
        _vm.back($event)
      })();
    
  }},'179': {"tap": function proxyHandlerWithEvent ($event) {
    var _vm=this;
      return (function () {
        _vm.backHome($event)
      })();
    
  }}}, models: {} });