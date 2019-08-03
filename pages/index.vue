<template>
  <div class="container">
    <ul>
      <li>
        <NuxtLink :to="'/documents'">link to documents page</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="'/test'">link to test page</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class IndexPage extends Vue {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
