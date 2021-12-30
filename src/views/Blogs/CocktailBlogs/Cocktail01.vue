<template>
  <BlogTemplate
    blogType="cocktailblogs"
    :blogName="$options.name"
  ></BlogTemplate>
</template>

<script>
import BlogTemplate from "../../../components/BlogTemplate.vue";

export default {
  name: "Cocktail01",
  components: {
    BlogTemplate,
  },
};
</script>

<style>
</style>