import { defineComponent } from "vue";

export default defineComponent({
  name: 'Button',
  props: {
    msg: String
  },
  setup(props, { slots }) {
    return (
      <button type="button" style="display:inline-block;width: 100px; border: 1px solid #f00">
        {slots.default?.()}
      </button>
    )
  }
})
