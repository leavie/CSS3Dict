<template>
    <p class="item">
        <input type="radio" :name="group" :value="value" :disabled="disabled"><span class="text" v-text="value"></span>
    </p>
</template>

<script>
    export default {
        props: {
            group: { required: true },
            value: { required: true },
            disabled: { default: false }
        },
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
    /*normalize all*/
    .item, input, .text{
        display: block;
        padding: 0;
        margin: 0;
        height: 40px;
    }
    /*item*/
    .item {
        position: relative;
        width: 100%;
    }
    /*input*/
    input {
        width: 100%;
        outline: none;
        -webkit-appearance: none;
        border-top: 1px solid #cccccc;
        cursor: pointer;
    }
    /*visually place text on top of input*/
    input + .text {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        line-height: 40px;
    }

/*item state*/
    /*hover*/
    input:hover {
        background: #eeeeee;
    }
    /*checked*/
    /*input*/
    input:checked {
        background: #3171d2;
    }
    /*adjacent text*/
    input:checked + .text {
        color: #efefef;
        text-shadow: 0 1px 0 rgba(255,255,255,.6);
    }
    /*disabled item*/
    /*input*/
    input:disabled {
        cursor: not-allowed
    }
    /*adjacent text*/
    input:disabled + .text {
        text-decoration: line-through;
    }
    /*reset hover state to default when disabled*/
    input:disabled:hover {
        background: #ffffff;
    }

</style>