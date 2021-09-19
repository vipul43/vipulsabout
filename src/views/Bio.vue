<template>
  <v-container>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card :color="item.color" dark>
          <v-card-title class="text-h6"> {{ item.title }} </v-card-title>
          <v-card-text class="white text--primary">
            <p>
              {{ item.content }}
            </p>
            <!-- <v-btn :color="item.color" class="mx-0" outlined> Know More </v-btn> -->
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: "Bio",
  data: () => ({
    items: [
      {
        color: "red lighten-2",
        icon: "mdi-star",
        title: "Lower Primary",
        content:
          "Lower Primary(preKG, LKG, UKG, standard 1 to 2) schooling was diversified, spread between 2 schools-Fathima Convent High School and St Francis High School. Had the privilege to interact with people who are different cultural and intellectual levels.",
      },
      {
        color: "purple darken-1",
        icon: "mdi-book-variant",
        title: "Upper Primary & High School",
        content:
          "Diversified schooling plays a crucial role in overall development. However, having a solid foundation attached to a single school is equally important. Major portion of Schooling(standard 3 to 10) was anchored in Vaagdevi High School, ultimately shaping my life. This period turned out to be most crucial not only because of the academic education received but also due to life education received, really helped me in various twists and turns of life.",
      },
      {
        color: "green lighten-1",
        icon: "mdi-airballoon",
        title: "Intermediate",
        content:
          "What ultimately matters in life are people. Made a ton of friends during Intermediate(standard 11 and 12) at Narayana Junior College. Completely different experience, had to stay away from family for the first time in hostel. When you spend that amount of time with people, you also learn the skill of understanding different types of mindsets. Maths, Physics and Chemistry, f***ing hard work to get into country's premium institutes.",
      },
      {
        color: "indigo",
        icon: "mdi-book-multiple",
        title: "Under Graduate",
        content:
          "Hard work in life never ends. It is not enough to get into IIT Palakkad, more important is the subject on which you spend your time on. Computer Science is giving me literal rush.",
      },
    ],
  }),
};
</script>