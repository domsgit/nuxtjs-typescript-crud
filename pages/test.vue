<template>
  <div class="container">
    <ul>
      <li v-for="a of aas" :key="a">{{ a }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

@Component({
  async asyncData({ store, $axios }) {
    await store.dispatch('get')
    await $axios('/api/payload.json')
  },
  computed: {
    ...mapGetters({
      aas: 'aas'
    })
  }
})
export default class TestPage extends Vue {}
</script>
