<template>
<div class="tab" v-show="isActive">
    <slot></slot>
</div>
</template>

<script>
export default {
  name: 'tab',
  props: {
        title: {required: true},
        selected: {default: false}
    },
  data () {
    return {
        isActive: false
    }
  },
  computed: {

  },
  watch: {
  },
  methods: {
  },
  mounted() {
    this.isActive = this.selected
  }
}
</script>

<style scoped>
</style>
