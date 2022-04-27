<template>
    <div class="list-item">
      <li class="item">
        <a href="#">
          <img class="fakeimg">
          <p class="item-title" >
            {{title}}
         </p>
         <p class="item-des" >
            {{des}}
         </p>
        </a>
    </li>
    </div>
</template>

<script>
export default {
  components: {
  },
  props: ['title', 'des'],
  data() {
    return {

    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
    a {
      text-decoration: none;
    }

    .item {
      overflow: auto;
      padding: 15px 10px;
      list-style: none;
      border-bottom: 1px solid #eeeeee;
    }
    img {
      float:left;
      margin-right: 10px;
    }
    .fakeimg{
      display: block;
      margin-right: 10px;
      width: 64px;
      height: 64px;
      background: #eeeeee

    }
    .item-title,
    .item-des{
      padding: 0;
      margin: 0;
      font-size: 0.7em;
      font-family: sans-serif;
      color: #cccccc;
      line-height: 1.5em;
    }

    .item-title {
      font-size: 0.8em;
      font-weight: bold;
      color: #333333;
    }
</style>
