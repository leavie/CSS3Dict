<template>
<div class="main-wrapper">
  <input type="radio" name="tab" value="0" title="推薦順序" checked>
  <input type="radio" name="tab" value="1" title="最佳">
  <input type="radio" name="tab" value="2" title="新項目">
  <div id="main1" class="main-content">
    <ul class="list">

      <li class="item" v-for="item in circulateItems">
        <a href="#">
          <img class="fakeimg">
          <p v-for="(val, key) in item" :class="'item-'+key">
            {{val}}
          </p>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      classA: 'item-title',
      items: [
      { title: 'FaceBug', des: 'Social bug catching with net' }
      ,
      { title: 'Pine', des: 'I have apple, i have pine...'}
      ,
      { title: 'YouCube', des: 'Your hand-made cube by cum'}
      ],
      order: 0,
      counter: 0,
    }
  },
  computed: {
    circulateItems: function(){
      let arr = []
      let curItem
      for(var i = 0; i< 2 ;++i){
        curItem = this.items[ (this.order + i) % 3 ]
        arr.push(curItem)
      }
      return arr
    }
  },
  watch: {
    order: function(newVal){
      this.order = newVal % 3
    }
  },
  methods: {
    update: function(){
      this.counter++
      this.order++ 
      return this.circulateItems
    }
  }
}
</script>

<style scoped>
/*radio button tab default style*/
input[name="tab"] {
  -webkit-appearance: none;
  cursor: pointer;
  display: inline-block;
  border: 1px solid #39f;
  border-radius: 4px;
  padding: 2px 4px;
  width: 30%;
  text-align: center;
}
input[name="tab"]:checked {
  background: #3399ff;
  color: #fff;
}
/*insert text*/
input[name="tab"]::after {
  content: attr(title);
}

/*checked style*/
input[name="tab"][value="0"]:checked ~ #main1,
input[name="tab"][value="1"]:checked ~ #main2,
input[name="tab"][value="2"]:checked ~ #main3 {
  display: block;
}

/*content area*/
.main-content {
  display: none;
  border-top: 1px solid #eeeeee;
  margin: 20px 0 0;
}

/*TODO
- add app thumbnail inline-block
-  title and des let them left align
- add number

**/

/*list*/
.list {
  list-style: none;
  padding: 0;
  margin: 0;


}
.list a{
  text-decoration: none;
}

.list .item {
  padding: 15px 10px;
  border-bottom: 1px solid #eeeeee;

  overflow: auto;
}
.item img {
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
