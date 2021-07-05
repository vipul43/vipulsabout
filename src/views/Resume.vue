<template>
  <v-container>
    <v-btn
      class="ma-2"
      outlined
      href="https://vipul43.sirv.com/vipulsabout/vipul_core_cv.pdf"
      download="vipul_core_cv"
    >
      Download PDF
    </v-btn>
    <pdf v-for="p in numPages" :key="p" :src="src" :page="p"></pdf>
  </v-container>
</template>

<script>
import pdf from "vue-pdf";

export default {
  name: "Resume",
  components: {
    pdf,
  },
  data: () => ({
    src: undefined,
    numPages: 0,
  }),
  mounted() {
    this.src = pdf.createLoadingTask(
      "https://vipul43.sirv.com/vipulsabout/vipul_core_cv.pdf"
    );
    this.src.promise.then((pdf) => {
      this.numPages = pdf.numPages;
    });
  },
};
</script>