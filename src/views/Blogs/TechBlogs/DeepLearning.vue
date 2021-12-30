<template>
  <BlogTemplate blogType="techblogs" :blogName="$options.name"></BlogTemplate>
</template>

<script>
import BlogTemplate from "../../../components/BlogTemplate.vue";

export default {
  name: "DeepLearning",
  components: {
    BlogTemplate,
  },
};
</script>

<style>
</style>