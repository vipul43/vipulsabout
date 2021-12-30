<template>
  <v-container>
    <center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card height="400" color="transparent" flat>
            <div class="display-3 mt-5">Page not found.</div>
            <br />
            <div class="grey--text lighten-5">
              The page you are trying to get to never existed in this reality,
              or has migrated to a parallel universe.
            </div>
            <br />
            <div class="paragraph-text mt-2">
              Try going to <router-link to="/blog">Blog page</router-link> and
              repeating your action.
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </center>
  </v-container>
</template>

<style>
.paragraph-text {
  font-size: 18px;
}
</style>
