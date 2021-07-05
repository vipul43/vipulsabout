<template>
  <v-container v-if="show">
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
  <v-container v-else>
    <v-progress-circular
      indeterminate
      :size="70"
      :width="7"
      color="light-black"
    ></v-progress-circular>
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
    show: false,
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
    setTimeout(() => {
      this.show = true;
    }, 2000);
  },
};
</script>