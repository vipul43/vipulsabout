<script>
import spl01 from "./Spl01.vue";

const components = {
  spl01,
};
export default {
  functional: true,
  props: ["selectedComp"],
  render(h, ctx) {
    return h(components[ctx.props.selectedComp], ctx.data, ctx.children);
  },
};
</script>