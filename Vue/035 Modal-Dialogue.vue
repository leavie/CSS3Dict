<template>
  <div class="main-wrapper" v-show="isShow">
    <div class="dialogue-cover"></div>
    <div class="dialogue-frame">
      <div class="dialogue">
        <p class="title" v-text="title || 'Title'"></p>
        <p class="message" v-text="message || 'Message'"></p>
        <div class="action">
          <p class="item">
            <rounded-button key="yes" v-text="yes || 'Yes'"
            v-on:click.native="toogleModal"
            v-bind:options="{state:2, size:2}" ></rounded-button>
          </p>
          <p class="item">
            <rounded-button key="no"  v-text="no || 'No'"
            v-on:click.native="toogleModal"
            v-bind:options="{state:0, size:2}"></rounded-button>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import RoundedButton from './018 Rounded-Button'
// import {eventHub as hub} from './eventHub.js'
export default {
  name: 'modal-dialogue',
  props: ['title', 'message', 'yes', 'no'],
  components: { RoundedButton },
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    toogleModal() {
      this.isShow = !this.isShow
    },
    activateAll() {
      // hub.$emit('allButton')
    }
  }
}
</script>

<style scoped>
.main-wrapper {
  margin: 0;
  padding: 0;
}
.dialogue-cover {
  width: 100%;
  height: 100%;
  background: #333;
  opacity: .8;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.dialogue-frame {
  box-sizing: border-box;
  position: absolute;
  margin: auto;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  width: 60%;
  z-index: 1;
}
.dialogue {
  width: 100%;
  height: 180px;
  margin: 0 5px;
  position: relative;
  background: #fff;
  border: 2px solid #333;
  border-radius: 4px;
  padding: 40px 80px;
  text-align: center;
}
.dialogue .title {
  font-weight: bold;
  font-size: 1.2em;
}
.dialogue .action {
  display: flex;
}
.action .item {
  flex: 1;
  width: 50%;
  padding: 0 5px;
}
</style>
