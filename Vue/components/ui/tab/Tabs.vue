<template>
  <div class="tabs">
    <div class="menu">
      <a class="link"="link(tab)" v-for="tab in tabs">
        <li class="list-item" class="{'selected': tab.isActive }"
          v-text="tab.title" @click="select(tab)"></li>
      </a>
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
    data()
    {
      return {
        tabs: []
      }
    },
    computed: {

    },
    watch: {
    },
    methods: {
      select(selectedTab)
      {
        this.tabs.forEach(tab =>
        {
          tab.isActive = tab.title == selectedTab.title
        })
      },
      link(tab)
      {
        return '#' + tab.title
      }
    },
    mounted()
    {
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
  .list-item {
    display: inline-block;
    padding: 2px 4px;
    width: 30%;
    text-align: center;
    border: 1px solid #3399ff;
    border-radius: 4px;
    -webkit-appearance: none;
    cursor: pointer;
  }

  .link {
    text-decoration-line: none;
    color: #000000;
  }

  .selected {
    color: #ffffff;
    background: #3399ff;
  }

</style>
