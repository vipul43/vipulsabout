<template>
  <div>
    <pdf v-for="i in numPages" :key="i" :src="src" :page="i"></pdf>
  </div>
</template>

<script>
import pdf from "vue-pdf";
var loadingTask = pdf.createLoadingTask(
  "https://vipul43.sirv.com/vipulsabout/vipul_core_cv.pdf"
);

export default {
  name: "Resume",
  components: {
    pdf,
  },
  data: () => ({
    src: loadingTask,
    numPages: 0,
  }),
  mounted() {
    this.src.promise.then((pdf) => {
      this.numPages = pdf.numPages;
    });
  },
};
</script>