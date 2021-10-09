<script>
import deeplearning from "./DeepLearning.vue";
import NotFoundGoToBlog from "../../Errors/NotFoundGoToBlog.vue";

const components = {
  deeplearning,
  NotFoundGoToBlog,
};
export default {
  functional: true,
  props: ["selectedComp"],
  render(h, ctx) {
    if (components[ctx.props.selectedComp]) {
      return h(components[ctx.props.selectedComp], ctx.data, ctx.children);
    } else {
      return h(components["NotFoundGoToBlog"], ctx.data, ctx.children);
    }
  },
};
</script>