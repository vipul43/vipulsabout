<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card
          class="mx-auto"
          color="light-black"
          dark
          :href="item.demo || item.work"
          target="_blank"
        >
          <v-img :src="item.src" height="300px"
            ><v-card-title class="text-h5" v-text="item.title"></v-card-title
          ></v-img>
          <v-card-subtitle v-text="item.subtitle"></v-card-subtitle>
          <v-card-actions>
            <v-btn v-if="item.demo" text :href="item.demo" target="_blank">
              Visit Demo
            </v-btn>
            <v-btn v-if="item.work" text :href="item.work" target="_blank">
              Visit Work
            </v-btn>
          </v-card-actions>
        </v-card>
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
      >
        <template #[`item.tags`]="{ item }">
          <v-chip-group column>
            <v-chip v-for="tag in item.tags" :key="tag">
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Works",
  data: () => ({
    items: [
      {
        src: "https://vipul43.sirv.com/vipulsabout/imagecaptioning.png",
        title: "Image Captioning",
        subtitle:
          "Training Deep Learning models on Flickr8k Dataset to effectively caption an image. Non end-to-end implementation, transfer learning through InceptionResNetV2 along with imagenet weights and GloVe embeddings",
        demo: "",
        work: "https://github.com/vipul43/image_captioning",
      },
      {
        src: "https://vipul43.sirv.com/vipulsabout/todo.jpg",
        title: "ToDo App",
        subtitle:
          "A simple todo list app made using django and hosted using heroku💯",
        demo: "https://todo-list43.herokuapp.com",
        work: "https://github.com/vipul43/todo-list43",
      },
      {
        src: "https://vipul43.sirv.com/vipulsabout/covid19-tracker.png",
        title: "Covid19 Tracker",
        subtitle:
          "A covid19 tracker which fetches worldwide covid19 cases data from 'disease.sh' and displays it using chartjs, leafletjs. This web app is built using reactjs and hosted using firebase😇",
        demo: "https://covid19-tracker-7583d.web.app/",
        work: "https://github.com/vipul43/covid19_tracker",
      },
      {
        src: "https://vipul43.sirv.com/vipulsabout/enigma.jpg",
        title: "Enigma",
        subtitle:
          "Mimicked the German encryption device using simple programming logic. This project displays the interconvertibility between electromechanical circuits and logical code🤓",
        demo: "",
        work: "https://github.com/vipul43/project_Enigma",
      },
      {
        src: "https://vipul43.sirv.com/vipulsabout/pythonautomation.jpg",
        title: "Python Automation",
        subtitle: "Automating boring repetitive stuff using python😎",
        demo: "",
        work: "https://github.com/vipul43/python_automation",
      },
      {
        src: "https://vipul43.sirv.com/vipulsabout/draw.jpg",
        title: "Draw",
        subtitle:
          "Simple 1400x750 drawing sheet with two commands. To undo(u) and to clear screen(␣). Draw using 🖱",
        demo: "https://vipul43.github.io/draw/",
        work: "https://github.com/vipul43/draw",
      },
      {
        src: "https://vipul43.sirv.com/vipulsabout/maze_gen.png",
        title: "Maze Gen",
        subtitle:
          "Maze Generating visualisation using Depth First Search Algorithm. To pause the generation(␣) or resume(␣)👼🏻",
        demo: "https://vipul43.github.io/maze_gen/",
        work: "https://github.com/vipul43/maze_gen",
      },
    ],
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
        align: " d-none",
      },
      {
        text: "Tags",
        value: "tags",
      },
    ],
    allWorks: [
      {
        work: "Image Captioning",
        desc: "Training Deep Learning models on Flickr8k Dataset to effectively caption an image. Non end-to-end implementation, transfer learning through InceptionResNetV2 along with imagenet weights and GloVe embeddings",
        repo: "https://github.com/vipul43/image_captioning",
        tags: ["DL", "ML", "AI", "python"],
      },
      {
        work: "ToDo App",
        desc: "A simple todo list app made using django and hosted using heroku💯",
        repo: "https://github.com/vipul43/todo-list43",
        tags: ["web-dev", "django", "python"],
      },
      {
        work: "Covid19 Tracker",
        desc: "A covid19 tracker which fetches worldwide covid19 cases data from 'disease.sh' and displays it using chartjs, leafletjs. This web app is built using reactjs and hosted using firebase😇",
        repo: "https://github.com/vipul43/covid19_tracker",
        tags: ["web-dev", "reactjs"],
      },
      {
        work: "Enigma",
        desc: "Mimicked the German encryption device using simple programming logic. This project displays the interconvertibility between electromechanical circuits and logical code🤓",
        repo: "https://github.com/vipul43/project_Enigma",
        tags: ["python", "cryptography"],
      },
      {
        work: "Python Automation",
        desc: "Automating boring repetitive stuff using python😎",
        repo: "https://github.com/vipul43/python_automation",
        tags: ["python", "shell-scripting"],
      },
      {
        work: "Draw",
        desc: "Simple 1400x750 drawing sheet with two commands. To undo(u) and to clear screen(␣). Draw using 🖱",
        repo: "https://github.com/vipul43/draw",
        tags: ["p5js", "javascript"],
      },
      {
        work: "Maze Gen",
        desc: "Maze Generating visualisation using Depth First Search Algorithm. To pause the generation(␣) or resume(␣)👼🏻",
        repo: "https://github.com/vipul43/maze_gen",
        tags: ["p5js", "javascript"],
      },
      {
        work: "p5.js",
        desc: "Fun webpages built using p5 javascript library",
        repo: "https://github.com/vipul43/fun_with_-p5.js-",
        tags: ["p5js", "javascript"],
      },
      {
        work: "Vipul's About",
        desc: "Portfolio website made with vuejs",
        repo: "https://github.com/vipul43/vipulsabout",
        tags: ["web-dev", "vuejs", "firebase-storage"],
      },
      {
        work: "Face Mask Detection",
        desc: "Detecting the faces of the people in the scene and classify them as with mask and without mask",
        repo: "https://github.com/pulavartivinay/Face_Mask_Detection",
        tags: ["DL", "ML", "AI", "python", "web-dev"],
      },
      {
        work: "Django",
        desc: "Sites created using django",
        repo: "https://github.com/vipul43/django",
        tags: ["django", "python"],
      },
      {
        work: "Image Description",
        desc: "Multi Label Classification, Multi Modal Classification and Image description deep learning models to solve Image Description task",
        repo: "https://github.com/vipul43/image_description",
        tags: ["DL", "ML", "AI", "python"],
      },
      {
        work: "Artificial Intelligence",
        desc: "Artificial Intelligence Algorithms Implementation",
        repo: "https://github.com/vipul43/AI",
        tags: ["AI", "ML", "DL", "python"],
      },
      {
        work: "Operating Systems",
        desc: "Lab assignments of CS3110 Operating Systems course in IITPKD",
        repo: "https://github.com/vipul43/CS3110_OS_LAB",
        tags: ["OS", "C"],
      },
    ],
  }),
  methods: {
    handleClick(row) {
      window.location.href = row.repo;
    },
  },
};
</script>

<style>
</style>