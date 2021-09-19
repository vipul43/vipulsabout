<template>
  <v-container>
    <v-row class="mb-4">
      <v-col>
        <v-textarea
          outlined
          name="input-7-1"
          label="Intro"
          background-color="amber lighten-4"
          color="orange orange-darken-4"
          auto-grow
          autofocus
          value="You landed at a very exciting place, my 'about' site. Sorry, excuse my manners!! I am Sai Vipul Mohan. Currently Studying Bachelor of Technology at Indian Institute of Technology Palakkad. My major is Computer Science and Engineering. Yes, I am a nerd. In fact, happy to be. I ask you to explore this website to learn more about me and my works, you know, some might be really helpful to you."
        ></v-textarea>
      </v-col>
      <v-col>
        <a href="https://github.com/vipul43">
          <v-img
            src="https://github-readme-stats.vercel.app/api?username=vipul43&show_icons=true&title_color=fff&icon_color=79ff97&text_color=9f9f9f&bg_color=272727"
            max-width="492"
            max-height="193"
          ></v-img>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>
