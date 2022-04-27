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
        padding: 10px 0;
        background: #ffffff;
    }

    fieldset {
        position: relative;
        padding: 40px 0 0;
        margin: 20px 10px;
        font-family: sans-serif;
        color: #333333;
        background: #ffffff;
        border: solid 1px #dddddd;
        border-radius: 4px;
        box-shadow: 0 1px 8px rgba(0,0,0,.2);
    }

    legend {
        position: absolute;
        top: 0;
        left: 5px;
        height: 40px;
        font-weight: bold;
        line-height: 40px;
    }
</style>