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
      padding: 15px 10px;
      border-bottom: 1px solid #eeeeee;
      list-style: none;
      overflow: auto;
    }
    img {
      float:left;
      margin-right: 10px;
    }
    .fakeimg{
      display: block;
      width: 64px;
      height: 64px;
      margin-right: 10px;
      background: #eee

    }
    .item-title,
    .item-des{
      margin: 0;
      padding: 0;
      color: #ccc;
      font-family: sans-serif;
      font-size: 0.7em;
      line-height: 1.5em;
    }

    .item-title {
      font-weight: bold;
      color: #333;
      font-size: 0.8em;
    }
</style>
