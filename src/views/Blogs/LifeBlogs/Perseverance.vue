<template>
  <BlogTemplate blogType="lifeblogs" :blogName="$options.name"></BlogTemplate>
</template>

<script>
import BlogTemplate from "../../../components/BlogTemplate.vue";

export default {
  name: "Perseverance",
  components: {
    BlogTemplate,
  },
};
</script>

<style>
</style>