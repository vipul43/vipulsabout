<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto"
            :color="item.color"
            dark
            :elevation="hover ? 24 : 0"
            :class="{ 'on-hover': hover }"
            :href="item.demo || item.work"
            target="_blank"
          >
            <v-avatar class="ma-3" :size="item.size" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
            <v-card-title class="text-h5" v-text="item.title"> </v-card-title>
            <v-card-text class="body-1" v-text="item.subtitle"></v-card-text>
            <v-card-actions>
              <v-btn
                v-if="item.demo"
                text
                :href="item.demo"
                target="_blank"
                :class="{ 'show-btns': hover }"
                :color="transparent"
              >
                Visit Demo
              </v-btn>
              <v-btn
                v-if="item.work"
                text
                :href="item.work"
                target="_blank"
                :class="{ 'show-btns': hover }"
                :color="transparent"
              >
                Visit Work
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-card>
      <v-card-title>
        All Works
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="allWorks"
        :search="search"
        @click:row="handleClick"
        mobile-breakpoint
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Works",
  data: () => ({
    items: [
      {
        color: "#000000",
        src: "https://vipul43.sirv.com/vipulsabout/imagecaptioning.png",
        title: "Image Captioning",
        subtitle:
          "Training Deep Learning models on Flickr8k Dataset to effectively caption an image. Non end-to-end implementation, transfer learning through InceptionResNetV2 along with imagenet weights and GloVe embeddings",
        size: 300,
        demo: "",
        work: "https://github.com/vipul43/image_captioning",
      },
      {
        color: "#000000",
        src: "https://vipul43.sirv.com/vipulsabout/todo.jpg",
        title: "ToDo App",
        subtitle:
          "A simple todo list app made using django and hosted using heroku💯",
        size: 300,
        demo: "https://todo-list43.herokuapp.com",
        work: "https://github.com/vipul43/todo-list43",
      },
      {
        color: "#000000",
        src: "https://vipul43.sirv.com/vipulsabout/covid19-tracker.png",
        title: "Covid19 Tracker",
        subtitle:
          "A covid19 tracker which fetches worldwide covid19 cases data from 'disease.sh' and displays it using chartjs, leafletjs. This web app is built using reactjs and hosted using firebase😇",
        size: 300,
        demo: "https://covid19-tracker-7583d.web.app/",
        work: "https://github.com/vipul43/covid19_tracker",
      },
      {
        color: "#000000",
        src: "https://vipul43.sirv.com/vipulsabout/enigma.jpg",
        title: "Enigma",
        subtitle:
          "Mimicked the German encryption device using simple programming logic. This project displays the interconvertibility between electromechanical circuits and logical code🤓",
        size: 300,
        demo: "",
        work: "https://github.com/vipul43/project_Enigma",
      },
      {
        color: "#000000",
        src: "https://vipul43.sirv.com/vipulsabout/pythonautomation.jpg",
        title: "Python Automation",
        subtitle: "Automating boring repetitive stuff using python😎",
        size: 300,
        demo: "",
        work: "https://github.com/vipul43/python_automation",
      },
      {
        color: "#000000",
        src: "https://vipul43.sirv.com/vipulsabout/draw.jpg",
        title: "Draw",
        subtitle:
          "Simple 1400x750 drawing sheet with two commands. To undo(u) and to clear screen(␣). Draw using 🖱",
        size: 300,
        demo: "https://vipul43.github.io/draw/",
        work: "https://github.com/vipul43/draw",
      },
      {
        color: "#000000",
        src: "https://vipul43.sirv.com/vipulsabout/maze_gen.png",
        title: "Maze Gen",
        subtitle:
          "Maze Generating visualisation using Depth First Search Algorithm. To pause the generation(␣) or resume(␣)👼🏻",
        size: 300,
        demo: "https://vipul43.github.io/maze_gen/",
        work: "https://github.com/vipul43/maze_gen",
      },
      {
        color: "#000000",
        src: "",
        title: "p5.js",
        subtitle: "Fun webpages built using p5 javascript library",
        size: 300,
        demo: "",
        work: "https://github.com/vipul43/fun_with_-p5.js-",
      },
    ],
    transparent: "rgba(255, 255, 255, 0)",
    search: "",
    headers: [
      {
        text: "Work",
        value: "work",
      },
      {
        text: "Description",
        value: "desc",
      },
      {
        text: "Repo",
        value: "repo",
      },
    ],
    allWorks: [
      {
        work: "Image Captioning",
        desc: "Training Deep Learning models on Flickr8k Dataset to effectively caption an image. Non end-to-end implementation, transfer learning through InceptionResNetV2 along with imagenet weights and GloVe embeddings",
        repo: "https://github.com/vipul43/image_captioning",
      },
      {
        work: "ToDo App",
        desc: "A simple todo list app made using django and hosted using heroku💯",
        repo: "https://github.com/vipul43/todo-list43",
      },
      {
        work: "Covid19 Tracker",
        desc: "A covid19 tracker which fetches worldwide covid19 cases data from 'disease.sh' and displays it using chartjs, leafletjs. This web app is built using reactjs and hosted using firebase😇",
        repo: "https://github.com/vipul43/covid19_tracker",
      },
      {
        work: "Enigma",
        desc: "Mimicked the German encryption device using simple programming logic. This project displays the interconvertibility between electromechanical circuits and logical code🤓",
        repo: "https://github.com/vipul43/project_Enigma",
      },
      {
        work: "Python Automation",
        desc: "Automating boring repetitive stuff using python😎",
        repo: "https://github.com/vipul43/python_automation",
      },
      {
        work: "Draw",
        desc: "Simple 1400x750 drawing sheet with two commands. To undo(u) and to clear screen(␣). Draw using 🖱",
        repo: "https://github.com/vipul43/draw",
      },
      {
        work: "Maze Gen",
        desc: "Maze Generating visualisation using Depth First Search Algorithm. To pause the generation(␣) or resume(␣)👼🏻",
        repo: "https://github.com/vipul43/maze_gen",
      },
      {
        work: "p5.js",
        desc: "Fun webpages built using p5 javascript library",
        repo: "https://github.com/vipul43/fun_with_-p5.js-",
      },
      {
        work: "Vipul's About",
        desc: "Portfolio website made with vuejs",
        repo: "https://github.com/vipul43/vipulsabout",
      },
      {
        work: "Face Mask Detection",
        desc: "Detecting the faces of the people in the scene and classify them as with mask and without mask",
        repo: "https://github.com/pulavartivinay/Face_Mask_Detection",
      },
      {
        work: "Django",
        desc: "Sites created using django",
        repo: "https://github.com/vipul43/django",
      },
      {
        work: "Image Description",
        desc: "Multi Label Classification, Multi Modal Classification and Image description deep learning models to solve Image Description task",
        repo: "https://github.com/vipul43/image_description",
      },
      {
        work: "Count Down",
        desc: "Multi Label Classification, Multi Modal Classification and Image description deep learning models to solve Image Description task",
        repo: "https://github.com/vipul43/image_description",
      },
      {
        work: "Image Description",
        desc: "Multi Label Classification, Multi Modal Classification and Image description deep learning models to solve Image Description task",
        repo: "https://github.com/vipul43/image_description",
      },
    ],
  }),
  mounted() {
    this.items.forEach((item) => {
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
      }
      item.color = color;
    });
  },
  methods: {
    handleClick(row) {
      window.location.href = row.repo;
    },
  },
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>