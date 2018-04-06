<template>
    <button class="button button-layout"  v-bind:class="buttonLook"
     v-text="defaultText" v-on:click="buttonEmit"></button>
<!-- <button class="button button-layout"></button> -->
<!-- <button class="button button-layout button-primary">Default</button>
<button class="button button-layout button-emergency">Default</button>
<button class="button button-layout button-gradient button-gradient-light">Gradient</button>
<button class="button button-layout button-gradient button-gradient-dark button-gradient-primary">Gradient</button>
<button class="button button-layout button-gradient button-gradient-dark button-gradient-emergency">Gradient</button>
<button class="button button-layout button-default button-max">Default</button>
<button class="button button-layout button-primary button-max">Default</button>
<button class="button button-layout button-emergency button-max">Default</button>
<button class="button button-layout button-gradient button-gradient-light button-square-middle">Gradient</button>
<button class="button button-layout button-gradient button-gradient-primary button-gradient-dark button-square-middle">Gradient</button>
<button class="button button-layout button-gradient button-gradient-emergency button-gradient-dark button-square-middle">Gradient</button> -->
</template>

<script>
    const type = 'button'
    const states = ['default','primary','emergency']
    const sizes = ['inline', 'squre-middle', 'max']
export default {
    name: 'rounded-button',
    props: ['options'],
    data() {
        return {
            state: this.options && this.options.state,
            size: this.options && this.options.size,
            gradient: this.options && this.options.gradient,
        }
    },
    computed:{
        buttonLook() {
            return this.buttonClasses.concat({'button-gradient': this.gradient})
        },
        defaultText() {
            return `${type}-${this.stateDescription}`
        },
        stateDescription() {
            return  states[this.state || 0]
        },
        sizeDescription() {
            return sizes[this.size || 0]
        },
        buttonClasses() {
            var buttonState = this.stateDescription
            var gradientName = this.gradient ? 'gradient' : ''
            var stateWithGradient = (buttonState == states[0] && gradientName ? 'light' : buttonState)
            var material = [type, gradientName, stateWithGradient]
            var size = [type, this.sizeDescription]

            return [material.filter(e=>e).join('-'), size.filter(e=>e).join('-') ]
        },
    },
	methods: {
        buttonEmit() {
            this.$emit('custom-click')
        }
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
.button {
    box-sizing: border-box;
    -webkit-appearance: none;
    border: none;
    cursor: pointer;
}
/*Basic Layout Design*/
.button-layout {
    border-radius: 4px;
    padding: 6px 10px;
    text-align: center;
}
/*State*/
.button-default {
    background: #efefef;
    color: #333;
}
.button-primary {
    background: #3bab09;
    color: #fff;
}
.button-emergency{
    background: #eb3b5a;
    color: #fff;
}

/*Material*/
.button-gradient {
    border: solid rgba(0,0,0,.2) 1px;
    box-shadow: 0 1px 1px #fff,
        inset 0 1px 1px rgba(255,255,255,.4);
    color: #fff;
}
.button-gradient-dark {
    text-shadow: 0 -1px 1px rgba(0,0,0,.5);
    color: #fff;
}
.button-gradient-light {
    background: linear-gradient(#ffffff,#e3e1e2);

    color: #333;
}
.button-gradient-primary {
    background: linear-gradient(#55c40d, #3bab09);
}
.button-gradient-emergency {
    background: linear-gradient(#eb3b5a, #cd3e5a);
}
/*Size*/
.button-max {
    width: 100%;
}
.button-square-middle {
    width: 150px;
    height:150px;
    font-weight: bold;
}
</style>
