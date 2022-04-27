<template>
  <div class="main-wrapper">
    <article class="feature-article">
      <h1 class="modal-action">
        <rounded-button v-text="'對話框'" v-on:click="toggleModal"
          v-bind:look="['emergency', 'gradient', '']"></rounded-button>
        <button v-on:click="toggleModal">standard button</button>
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
            <rounded-button key="cancel" v-on:click="toggleModal"
              v-bind:look="['default']" v-text="'取消'">
            </rounded-button>
          </p>
          <p class="dialogue-action-item">
            <rounded-button key="delete" v-on:click="toggleModal"
              v-bind:look="['default', 'gradient-light', 'gradient']"
              v-text="'刪除'">
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
  import RoundedButton from '../button/Rounded-Button.vue'
  export default {
    name: 'modal-dialogue',
    components: { RoundedButton },
    data()
    {
      return {
        isModal: false
      }
    },
    methods: {
      toggleModal()
      {
        this.isModal = !this.isModal
        console.log('Modal is open')
      }
    }
  }
</script>

<style scoped>
  .main-wrapper {
    position: relative;
    height: 100%;
  }

  .feature-article {
    padding: 40px;
  }

  .modal-wrapper {
    position: absolute;
    top: 0;
    z-index: 1;
    /*display: none;*/
    width: 100%;
    height: 100%;
  }

  .modal-mask {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: #333333;
    opacity: .8;
  }

  .modal-content {
    padding: 40px 80px;
    margin: 100px auto;
    width: 60%;
    height: 180px;
    background: #ffffff;
    border: 2px solid #333333;
    border-radius: 4px;
  }

  .dialogue-title,
  .dialogue-message {
    text-align: center;
  }

  .dialogue-title {
    font-size: 1.2em;
    font-weight: bold;
  }

  .dialogue-action {
    display: flex;
  }

  .dialogue-action-item {
    padding: 0 5px;
    width: 50%;
    flex: 1;
  }

  .modal-wrapper.show {
    display: block;
  }

</style>
