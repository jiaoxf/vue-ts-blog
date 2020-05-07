<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row class="mb-6" no-gutters>
        <v-col
          v-for="n in 10"
          :key="n"
          cols="12"
          sm="12"
          md="6"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class ArticleBlock extends Vue {
  private isLoading: boolean = true;
}
</script>
