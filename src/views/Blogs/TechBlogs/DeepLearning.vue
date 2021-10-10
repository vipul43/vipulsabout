<template>
  <v-container class="blog-background">
    <div class="font-weight-light text-h2 text-center">
      Deep Learning
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="light-black"
        @click="edit = !edit"
      >
        <v-icon dark> mdi-pencil </v-icon>
      </v-btn>
    </div>

    <ckeditor
      v-if="edit"
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
    <div
      class="font-weight-light text-h6 text-center"
      v-else
      v-html="editorData"
    ></div>
  </v-container>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "DeepLearning",
  data: () => ({
    edit: false,
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
  background: url("https://vipul43.sirv.com/vipulsabout/dot-grid.png") repeat;
  height: 100vh;
}
</style>