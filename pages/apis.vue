<template>
  <div class="container">
    <ul>
      <li v-for="api of apis" :key="api">{{ api }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

@Component({
  async asyncData({ store }) {
    await store.dispatch('apis/get')
  },
  computed: {
    ...mapGetters({
      apis: 'apis/apis'
    })
  }
})
export default class HospitalsPage extends Vue {}
</script>
