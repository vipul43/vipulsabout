<script>
import perseverance from "./Perseverance.vue";

const components = {
  perseverance,
};
export default {
  functional: true,
  props: ["selectedComp"],
  render(h, ctx) {
    return h(components[ctx.props.selectedComp], ctx.data, ctx.children);
  },
};
</script>