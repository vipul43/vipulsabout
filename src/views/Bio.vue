<template>
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
          <v-btn :color="item.color" class="mx-0" outlined> Know More </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "red lighten-2",
        icon: "mdi-star",
        title: "Upper Primary",
        content:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      },
      {
        color: "purple darken-1",
        icon: "mdi-book-variant",
        title: "High School",
        content:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      },
      {
        color: "green lighten-1",
        icon: "mdi-airballoon",
        title: "Intermediate",
        content:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      },
      {
        color: "indigo",
        icon: "mdi-buffer",
        title: "Under Graduate",
        content:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      },
    ],
  }),
};
</script>