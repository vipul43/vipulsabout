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
      <v-spacer></v-spacer>
      <v-btn icon @click="likesDialog = true">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-dialog
        v-model="likesDialog"
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <v-card>
          <v-toolbar color="light-black" dark>Likes Count</v-toolbar>
          <v-card-text>
            <div class="text-h2 pa-12">
              This feature will be available soon!!!
            </div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn @click="likesDialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-autocomplete
        v-model="selectedSearchItem"
        :items="searchItems"
        cache-items
        class="shrink"
        flat
        item-value="url"
        item-text="title"
        prepend-inner-icon="mdi-magnify"
        hide-details
        label="Wanna know anything?"
        solo-inverted
      ></v-autocomplete>
      <v-btn @click="statsDialog = true" icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-dialog
        v-model="statsDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar color="light-black" dark>
            <v-btn icon dark @click="statsDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Website Statistics</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <div class="text-h2 pa-12">
              This feature will be available soon!!!
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
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
      {
        title: "Blog",
        icon: "mdi-monitor",
        subtitle: "friday frenzy",
        route: "blog",
      },
      {
        title: "Book",
        icon: "mdi-book-multiple",
        subtitle: "the conundrum of life",
        route: "book",
      }
    ],
    searchItems: [
      { title: "Home", url: "/" },
      { title: "Bio", url: "/bio" },
      { title: "Schooling", url: "/schooling" },
      { title: "Works", url: "/works" },
      { title: "Resume", url: "/resume" },
      { title: "Contact", url: "/contact" },
      { title: "Blog", url: "/blog" },
      { title: "Book", url: "/book" },
    ],
    selectedSearchItem: null,
    statsDialog: false,
    likesDialog: false,
  }),
  watch: {
    selectedSearchItem: (val) => {
      console.log(val);
      if (val != null) {
        window.location.href = val;
      }
    },
  },
};
</script>