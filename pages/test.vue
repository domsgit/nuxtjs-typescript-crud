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
  async asyncData({ store }) {
    await store.dispatch('get')
  },
  computed: {
    ...mapGetters({
      aas: 'aas'
    })
  }
})
export default class TestPage extends Vue {}
</script>
