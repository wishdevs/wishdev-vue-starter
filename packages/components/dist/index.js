var Lib = function(exports, vue) {
  "use strict";/**
 *  Copyright 2023 Thorsten Luenborg 
 *  @license MIT
**/

  const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("h1", null, "This is your component!222", -1);
  const _hoisted_2 = { "data-test-message": "" };
  const __default__ = {
    name: "MyComponent"
  };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    ...__default__,
    props: {
      message: null
    },
    emits: ["messageChange"],
    setup(__props, { emit }) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          _hoisted_1,
          vue.createElementVNode("div", null, [
            vue.createElementVNode("p", _hoisted_2, vue.toDisplayString(__props.message) + " !!", 1)
          ]),
          vue.createElementVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => emit("messageChange", "ddd"))
          }, "dfsafasd")
        ], 64);
      };
    }
  });
  function install(app) {
    app.component("MyComponent", _sfc_main);
  }
  exports.MyComponent = _sfc_main;
  exports.install = install;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
  return exports;
}({}, Vue);
