<template>
    <div id="main">
        <fieldset>
            <legend v-text="topic"></legend>
            <slot></slot>
        </fieldset>
    </div>
</template>

<script>
    export default {
        props: ['topic', 'group'],
        components: {},
        data() { return {} },
        method: {},
    }
</script>

<style scoped>
    #main {
        background: #fff;
        padding: 10px 0;
    }

    fieldset {
        background: #fff;
        border: solid 1px #ddd;
        border-radius: 4px;
        box-shadow: 0 1px 8px rgba(0,0,0,.2);
        color: #333;
        font-family: sans-serif;
        padding: 40px 0 0;
        position: relative;
        margin: 20px 10px;
    }

    legend {
        font-weight: bold;
        height: 40px;
        left: 5px;
        line-height: 40px;
        position: absolute;
        top: 0;
    }
</style>