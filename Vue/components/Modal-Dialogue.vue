<template>
  <div class="main-wrapper">
    <article class="feature-article">
      <h1 class="modal-action">
        <rounded-button v-text="'對話框'" v-on:custom-click="toogleModal" v-bind:options="{state:1, gradient: true}"></rounded-button> <!-- need emit event -->
        <button v-on:click="toogleModal">standard button</button>
      </h1>
      <ul>對話框的結構
        <li>.main-wrapper (relative)</li>
        <ul>
          <li>.normal-content</li>
          <li>.modal-wrapper (abs)</li>
          <ul>
            <li>.modal-mask (abs)</li>
            <li>.modal-content</li>
          </ul>
        </ul>
      </ul>
    </article>
    <div class="modal-wrapper" v-show="isModal">
      <div class="modal-mask"></div>
      <div class="modal-content">
        <p class="dialogue-title">
          <slot name="title">真的要刪除嗎？</slot>
        </p>
        <p class="dialogue-message">
          <slot name="message">刪除後無法回復！</slot>
        </p>

        <div class="dialogue-action">
          <p class="dialogue-action-item">
            <rounded-button key="cancel" v-on:custom-click="toogleModal" v-bind:options="{state:0, size:2, gradient: true}" v-text="'取消'">
            </rounded-button>
        </p>
        <p class="dialogue-action-item">
          <rounded-button key="delete" v-on:custom-click="toogleModal" v-bind:options="{state:2, size:2, gradient: true}" v-text="'刪除'">
          </rounded-button>
        </p>
      </div>

    </div>
  </div>
</div>
</template>
<!--
<style>
    .button-misc {
        font-weight: bold;
    }
</style>
-->
<script>
import RoundedButton from './Rounded-Button.vue'
export default {
  name: 'modal-dialogue',
  components: { RoundedButton },
  data() {
    return {
      isModal: false
    }
  },
  methods: {
    toogleModal() {
      this.isModal = !this.isModal
      console.log('Modal is open')
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
}
.main-wrapper {
  position: relative;
  height: 800px;
}
.feature-article {
  padding: 40px;
}

.modal-wrapper {
  /*display: none;*/
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
}
.modal-mask {
  width: 100%;
  height: 100%;
  background: #333;
  opacity: .8;
  position: absolute;
  top: 0;
  z-index: -1;
}

.modal-content {
  width: 60%;
  height: 180px;
  margin: 100px auto;
  background: #ffffff;
  border: 2px solid #333;
  border-radius: 4px;
  padding: 40px 80px;
}

.dialogue-title,
.dialogue-message {
  text-align: center;
}

.dialogue-title {
  font-weight: bold;
  font-size: 1.2em;
}

.dialogue-action {
  display: flex;
}
.dialogue-action-item {
  flex: 1;
  width: 50%;
  padding: 0 5px;
}

.modal-wrapper.show {
  display: block;
}
</style>
