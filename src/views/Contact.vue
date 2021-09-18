<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn
          class="ma-2"
          color="#0077b5"
          dark
          href="https://www.linkedin.com/in/sai-vipul-mohan-3b9b011a7/"
          target="_blank"
        >
          LinkedIn
          <v-icon dark right> mdi-linkedin </v-icon>
        </v-btn></v-col
      >
      <v-col
        ><v-btn
          class="ma-2"
          color="#333"
          dark
          href="https://www.github.com/vipul43/"
          target="_blank"
        >
          GitHub
          <v-icon dark right> mdi-github </v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          class="ma-2"
          color="#D44638"
          dark
          href="mailto:saifunny43@gmail.com"
          target="_blank"
        >
          Gmail
          <v-icon dark right> mdi-gmail </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|max:32"
            >
              <v-text-field
                outlined
                v-model="name"
                :counter="32"
                :error-messages="errors"
                label="Name"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="phoneNumber"
              rules="digits:10"
            >
              <v-text-field
                outlined
                v-model="phoneNumber"
                :counter="10"
                :error-messages="errors"
                label="Phone Number"
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
                outlined
                v-model="email"
                :error-messages="errors"
                label="E-mail"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="content"
              rules="required|max:1024"
            >
              <v-textarea
                outlined
                clearable
                v-model="content"
                :counter="1024"
                :error-messages="errors"
                label="Content"
                required
              ></v-textarea>
            </validation-provider>

            <v-btn class="mr-4" type="submit" :disabled="invalid">
              submit
            </v-btn>
            <v-btn @click="clear"> clear </v-btn>
          </form>
        </validation-observer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  name: "Contact",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    phoneNumber: "",
    email: "",
    content: "",
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.content = "";
      this.$refs.observer.reset();
    },
  },
};
</script>
              