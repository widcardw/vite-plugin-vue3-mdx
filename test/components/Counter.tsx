import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    initValue: Number,
  },
  setup(props) {
    const counter = ref(props.initValue || 0)
    return () => (
      <>
        <button onClick={() => counter.value++}>Counter is {counter.value}</button>
      </>
    )
  },
})
