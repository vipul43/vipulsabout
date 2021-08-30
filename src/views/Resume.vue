<template>
  <div id="pdfvuer">
    <v-btn
      class="ma-2"
      outlined
      href="https://vipul43.sirv.com/vipulsabout/resume.pdf"
      download="resume"
    >
      Download PDF
    </v-btn>
    <pdf
      :src="pdfdata"
      v-for="i in numPages"
      :key="i"
      :id="i"
      :page="i"
      :scale.sync="scale"
      style="width: 100%; margin: 20px auto"
      :annotation="true"
      :resize="true"
      @link-clicked="handle_pdf_link"
    >
    </pdf>
  </div>
</template>

<script>
import pdfvuer from "pdfvuer";

export default {
  name: "Resume",
  components: {
    pdf: pdfvuer,
  },
  data() {
    return {
      page: 1,
      numPages: 0,
      pdfdata: undefined,
      scale: "page-width",
    };
  },
  mounted() {
    this.getPdf();
  },
  methods: {
    handle_pdf_link: function (params) {
      var page = document.getElementById(String(params.pageNumber));
      page.scrollIntoView();
    },
    getPdf() {
      this.pdfdata = pdfvuer.createLoadingTask(
        "https://vipul43.sirv.com/vipulsabout/resume.pdf"
      );
      this.pdfdata.then((pdf) => {
        this.numPages = pdf.numPages;
      });
    },
  },
};
</script>