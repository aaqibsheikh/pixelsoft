<template>
  <modal id="complete-collection" v-cloak class="complete-collection">
    <div slot="body" class="text-center px-10 py-10">
      <div class="font-bold text-lg text-baits-blue">
        Good job on completing your collection!
        <br /><br />
      </div>
      <div class="text-center mt-8">
        <button
          class="focus:outline-none bg-blue-500 text-lg text-white font-bold py-1 px-16 rounded-full"
          @click="close"
        >
          Close
        </button>
      </div>
    </div>
  </modal>
</template>
<script>
export default {
  methods: {
    close() {
      VoerroModal.hide('complete-collection');
    },
  },
};
</script>
<style>
.complete-collection > .modal-box {
  max-width: 50%;
}
</style>
