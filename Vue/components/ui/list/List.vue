<template>
    <ul class="list">
        <list-item v-for="item in list" :title="item.title" :des="item.des"></list-item>
    </ul>
</template>

<script>
import ListItem from './List-Item'

export default {
  components: {
    ListItem
  },
  props: ['list'],
  data() {
    return {

    }
  },
  computed: {
  },
  methods: {
    orderByBest() {

    },

    orderByNeweset() {

    },

    orderByRecommend() {

    }
  }
}
</script>

<style >
    .list {
      padding: 0;
      margin: 0;
      list-style: none;
    }
</style>
