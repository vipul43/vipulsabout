<template>
  <v-container>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-avatar size="5em">
          <v-img
            src="https://vipul43.sirv.com/vipulsabout/profile-nobg.png"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Sai Vipul Mohan</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="light-black" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vipul's About</v-toolbar-title>
      <!-- <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "LeftNavDrawerHeader",
  data: () => ({
    drawer: null,
    items: [
      {
        title: "Home",
        icon: "mdi-view-dashboard",
        subtitle: "you landed here",
        route: "/",
      },
      {
        title: "Bio",
        icon: "mdi-account",
        subtitle: "me in detail",
        route: "bio",
      },
      {
        title: "Schooling",
        icon: "mdi-school",
        subtitle: "performance in school",
        route: "schooling",
      },
      {
        title: "Works",
        icon: "mdi-laptop",
        subtitle: "proud of it",
        route: "works",
      },
      {
        title: "Résumé",
        icon: "mdi-file-document",
        subtitle: "download it",
        route: "resume",
      },
      {
        title: "Contact",
        icon: "mdi-forum",
        subtitle: "get in touch",
        route: "contact",
      },
    ],
  }),
};
</script>