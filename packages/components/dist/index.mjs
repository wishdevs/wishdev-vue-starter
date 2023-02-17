/**
 *  Copyright 2023 wishdev
 *  @license MIT
**/
import { defineComponent, openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString } from "vue";
const _hoisted_1 = /* @__PURE__ */ createElementVNode("h1", null, "This is your component!222", -1);
const _hoisted_2 = { "data-test-message": "" };
const __default__ = {
  name: "MyComponent"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    message: null
  },
  emits: ["messageChange"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createElementVNode("div", null, [
          createElementVNode("p", _hoisted_2, toDisplayString(__props.message) + " !!", 1)
        ]),
        createElementVNode("button", {
          onClick: _cache[0] || (_cache[0] = ($event) => emit("messageChange", "ddd"))
        }, "dfsafasd")
      ], 64);
    };
  }
});
function install(app) {
  app.component("MyComponent", _sfc_main);
}
export {
  _sfc_main as MyComponent,
  install
};
