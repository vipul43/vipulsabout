<template>
  <v-container class="blog-background">
    <!-- card -->
    <v-card color="basil">
      <!-- card title -->
      <v-card-title class="text-center justify-center py-6">
        <div class="font-weight-light text-h2 basil--text">Friday Frenzy</div>
      </v-card-title>
      <!-- tabs -->
      <v-tabs v-model="tab" color="basil" background-color="transparent" grow>
        <v-tab v-for="item in items" :key="item.tabTitle">
          {{ item.tabTitle }}
        </v-tab>
      </v-tabs>
      <!-- tab items -->
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tabText">
          <v-card color="basil" flat>
            <v-card-text>{{ item.tabText }}</v-card-text>
            <vue-countdown-timer
              :start-time="new Date()"
              :end-time="'2021-12-31 15:00:00'"
              :end-label="'Time left until next blog'"
              label-position="begin"
              :end-text="''"
              :day-txt="' days '"
              :hour-txt="' hours '"
              :minutes-txt="' minutes '"
              :seconds-txt="' seconds '"
            >
            </vue-countdown-timer>
          </v-card>
          <v-container v-if="item.there">
            <v-row dense>
              <v-col v-for="(tabCard, i) in item.tabCards" :key="i" cols="12">
                <v-card :color="item.tabColor">
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="text-h5"
                        v-text="tabCard.cardTitle"
                      ></v-card-title>
                      <v-card-subtitle
                        v-text="tabCard.cardSubTitle"
                      ></v-card-subtitle>
                      <v-card-actions>
                        <v-btn class="mr-4" :to="tabCard.cardSrc" outlined>
                          Read Blog
                        </v-btn>
                      </v-card-actions>
                    </div>
                    <div class="pa-3" v-text="tabCard.cardDate"></div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-container v-else>
            <div class="font-weight-light text-h5">
              No Blogs Yet.
            </div></v-container
          >
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      tab: null,
      items: [
        {
          there: false,
          tabTitle: "TECH",
          tabText:
            "Technical Blog every Friday introducing audience to the amazing tech world from a techie POV.",
          tabColor: "#B79492",
          tabCards: [
            {
              cardTitle: "Deep Learning",
              cardSubTitle: "techness-1",
              cardSrc: "/blog/techblog/deeplearning",
              cardDate: "31-12-2021",
            },
          ],
        },
        {
          there: false,
          tabTitle: "LIFE",
          tabText:
            "Life Blog every Monday revealing the secrets of life from an introvert's perspective.",
          tabColor: "#70A288",
          tabCards: [
            {
              cardTitle: "Perseverance",
              cardSubTitle: "lifeness-1",
              cardSrc: "/blog/lifeblog/perseverance",
              cardDate: "31-12-2021",
            },
          ],
        },
        {
          there: false,
          tabTitle: "FF SPECIAL",
          tabText:
            "Friday Frenzy weekly special indulging the audience in never-felt experience.",
          tabColor: "#FAF8D4",
          tabCards: [],
        },
        {
          there: false,
          tabTitle: "COCKTAIL",
          tabText: "Cocktail of topics from various aspects of the universe.",
          tabColor: "#B2A3B5",
          tabCards: [],
        },
      ],
    };
  },
};
</script>

<style>
/* Helper classes */
.basil {
  background-color: #dbd8f0 !important;
}
.basil--text {
  color: #553e4e !important;
}
.blog-background {
  background: url("https://vipul43.sirv.com/vipulsabout/dot-grid.png") repeat;
  height: 100vh;
}
</style>