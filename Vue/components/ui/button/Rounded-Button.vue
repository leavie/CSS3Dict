<template>
    <button class="layout"  v-bind:class="look"
    v-text="look" v-on:click="emit"></button>
</template>

<script>

const type = 'button'
const states = ['default','primary','emergency']
const sizes = ['inline', 'squre-middle', 'max']

export default {
    name: 'rounded-button',
    props: ['look', 'eventname'],
    created() {
    },
    data() {
        return {

        }
    },
    computed: {
    },
    methods: {
        emit() {
            if(this['evnetname']) {
                this.$emit(this['eventname'])
            } else {
                this.$emit('click')
            }
        },
    }
}
</script>

<style scoped>
/*Button*/

/* Class Manual
 Required
- button
- button-layout
 Option
 - material: flat , gradient
 - states: default, primary, emergency;
 - size: none max, squre-middle;
 - rounded: true, false;
 */

 /*normalize*/
 button {
    box-sizing: border-box;
    -webkit-appearance: none;
    border: none;
    cursor: pointer;
}
/*Basic Layout Design*/
.layout {
    border-radius: 4px;
    padding: 6px 10px;
    text-align: center;
}
/*State*/
.default {
    background: #efefef;
    color: #333;
}
.primary {
    background: #3bab09;
    color: #fff;
}
.emergency{
    background: #eb3b5a;
    color: #fff;
}

/*Material*/
.gradient {
    border: solid rgba(0,0,0,.2) 1px;
    box-shadow: 0 1px 1px #fff,
    inset 0 1px 1px rgba(255,255,255,.4);
    color: #fff;
}
.gradient-dark {
    text-shadow: 0 -1px 1px rgba(0,0,0,.5);
    color: #fff;
}
.gradient-light {
    background: linear-gradient(#ffffff,#e3e1e2);
    color: #333;
}
.gradient-primary {
    background: linear-gradient(#55c40d, #3bab09);
}
.gradient-emergency {
    background: linear-gradient(#eb3b5a, #cd3e5a);
}
/*Size*/
.max {
    width: 100%;
}
.square-middle {
    width: 150px;
    height:150px;
    font-weight: bold;
}
</style>
