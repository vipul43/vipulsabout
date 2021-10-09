<script>
import deeplearning from "./DeepLearning.vue";

const components = {
  deeplearning,
};
export default {
  functional: true,
  props: ["selectedComp"],
  render(h, ctx) {
    return h(components[ctx.props.selectedComp], ctx.data, ctx.children);
  },
};
</script>