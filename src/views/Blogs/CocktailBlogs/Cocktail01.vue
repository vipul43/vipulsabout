<template>
  <v-container class="blog-background">
    <div class="font-weight-light text-h2 text-center">Cocktail 01</div>
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </v-container>
</template>


<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "DeepLearning",
  data: () => ({
    admin: true,
    editor: ClassicEditor,
    editorData: "",
    editorConfig: {
      // The configuration of the editor.
    },
  }),
};
</script>

<style>
.blog-background {
  background: url("https://vipul43.sirv.com/vipulsabout/y-so-serious-white.png")
    repeat;
  height: 100vh;
}
</style>