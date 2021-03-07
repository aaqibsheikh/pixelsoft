<template>
  <div class="container mx-auto p-5">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
</style>
