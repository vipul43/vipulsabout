<script>
import cocktail01 from "./Cocktail01.vue";

const components = {
  cocktail01,
};
export default {
  functional: true,
  props: ["selectedComp"],
  render(h, ctx) {
    return h(components[ctx.props.selectedComp], ctx.data, ctx.children);
  },
};
</script>