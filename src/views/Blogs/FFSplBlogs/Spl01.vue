<template>
  <BlogTemplate blogType="ffsplblogs" :blogName="$options.name"></BlogTemplate>
</template>

<script>
import BlogTemplate from "../../../components/BlogTemplate.vue";

export default {
  name: "Spl01",
  components: {
    BlogTemplate,
  },
};
</script>

<style>
</style>