<script>
import cocktail01 from "./Cocktail01.vue";
import NotFoundGoToBlog from "../../Errors/NotFoundGoToBlog.vue";

const components = {
  cocktail01,
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