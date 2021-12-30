<template>
  <v-container class="blog-background">
    <div class="font-weight-light text-h2 text-center">
      {{ blogName }}
    </div>

    <ckeditor
      v-if="edit"
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
    <div
      class="font-weight-light text-h6 text-left"
      v-else
      v-html="editorData"
    ></div>
    <v-progress-circular
      v-if="loading"
      :size="70"
      :width="7"
      color="black"
      indeterminate
    ></v-progress-circular>
  </v-container>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getBlog, updateBlog } from "../firebase.js";

export default {
  name: "BlogTemplate",
  props: {
    blogType: {
      type: String,
      required: true,
    },
    blogName: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    edit: false,
    editor: ClassicEditor,
    editorData: "",
    editorConfig: {
      // The configuration of the editor.
    },
    loading: false,
  }),
  mounted() {
    this.loading = true;
    setTimeout(async () => {
      this.editorData = await getBlog(this.blogType, this.blogName);
      this.loading = false;
    }, 100);
  },
};
</script>


<style>
.blog-background {
  background: url("https://vipul43.sirv.com/vipulsabout/dot-grid.png") repeat;
  height: 100vh;
}
</style>