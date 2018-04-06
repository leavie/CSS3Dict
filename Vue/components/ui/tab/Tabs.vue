<template>
<div class="tabs">
  <div class="menu">
        <a :href="link(tab)" v-for="tab in tabs">
            <li  :class="{'selected': tab.isActive }" v-text="tab.title" @click="select(tab)"></li></a>
  </div>
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'tabs',
  props: [],
  data () {
    return {
        tabs: []
    }
  },
  computed: {

  },
  watch: {
  },
  methods: {
    select(selectedTab) {
        this.tabs.forEach(tab => {
            tab.isActive = tab.title == selectedTab.title
        })
    },
    link(tab) {
        return '#' + tab.title
    }
  },
  mounted() {
    this.tabs = this.$children
  }
}
</script>

<style scoped>
    .content {
      display: block;
      border-top: 1px solid #eeeeee;
      margin: 20px 0 0;
    }

    /*radio button tab default style*/
    li {
      -webkit-appearance: none;
      cursor: pointer;
      display: inline-block;
      border: 1px solid #39f;
      border-radius: 4px;
      padding: 2px 4px;
      width: 30%;
      text-align: center;
    }

    a {
        text-decoration-line: none;
        color: black;
    }

    .selected {
      background: #3399ff;
      color: #fff;
    }

</style>
