<template>
  <div class="flex flex-wrap px-4 mt-8 items-center justify-center">
    <div class="lg:w-1/2 w-full pr-10">
      <div>
        <h2 class="md:text-3xl text-xl text-gray-900 mb-4">{{collection.title}}</h2>
        <p class="tracking-wider leading-loose text-base">
          <vue-show-more-text :text="collection.description" :lines="4" />
        </p>
      </div>
    </div>
    <div class="lg:w-1/2 w-full md:mt-0 mt-10">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div
          ref="blockDiv"
          contenteditable
          @input="blockValueHandler"
          v-for="item in collection.blocks"
          :key="item.id"
          :style="{backgroundColor : item.value == 100 ? 'purple': 'gray'}"
          class="px-5 py-20 text-center text-lg text-black border-2 border-gray-300">
          {{item.value}}
        </div>
      </div>
    </div>
    <CompleteCollectionModal />
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import vueShowMoreText from 'vue-show-more-text'

import CompleteCollectionModal from '@/components/modal/CompleteCollectionModal'
export default {
  name: 'Group',
  components: {
    CompleteCollectionModal,
    vueShowMoreText
  },
  computed: {
    ...mapGetters({
      getCollection: 'collection/getCollection'
    }),
    collection() {
      return this.getCollection;
    }
  },
  methods: {
    blockValueHandler(event) {
      if (event.target.innerText == 100) {
        event.target.style.backgroundColor = 'purple';
      } else {
        event.target.style.backgroundColor = 'gray';
      }
      // check to see is it last box
      this.haveAllBoxSet();

    },
    haveAllBoxSet() {
      let count = 0;
      this.$refs.blockDiv.forEach(element => {
        if (element.innerText == 100)
          count++;
      });
      console.log(count);
      if (count == 4) {
        console.log('count');
        VoerroModal.show('complete-collection');
      }
    }
  }
}
</script>
