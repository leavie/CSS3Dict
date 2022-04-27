<template>
    <button class="button layout" v-bind:class="look" v-text="look"
        v-on:click="emit"></button>
</template>

<script>

    const type = 'button'
    const states = [ 'default', 'primary', 'emergency' ]
    const sizes = [ 'inline', 'square-middle', 'max' ]

    export default {
        name: 'rounded-button',
        props: [ 'look', 'eventname' ],
        created()
        {
        },
        data()
        {
            return {

            }
        },
        computed: {
        },
        methods: {
            emit()
            {
                if (this[ 'eventname' ]) {
                    this.$emit(this[ 'eventname' ])
                } else {
                    this.$emit('click')
                }
            },
        }
    }
</script>

<style scoped>
    /* Button */
    /* Class Manual
        Required
            - button
            - button-layout
        Option
            - material: flat , gradient
            - states: default, primary, emergency;
            - size: none max, square-middle;
            - rounded: true, false;
 */

    /* normalize */
    .button {
        box-sizing: border-box;
        appearance: none;
        border: none;
        cursor: pointer;
    }

    /* Basic Layout Design */
    .layout {
        padding: 6px 10px;
        text-align: center;
        border-radius: 4px;
    }

    /* State */
    .default {
        color: #333333;
        background: #efefef;
    }

    .primary {
        color: #ffffff;
        background: #3bab09;
    }

    .emergency {
        color: #ffffff;
        background: #eb3b5a;
    }

    /* Material */
    .gradient {
        color: #ffffff;
        border: solid rgb(0 0 0 / 20%) 1px;
        box-shadow:
            0 1px 1px #ffffff,
            inset 0 1px 1px rgb(255 255 255 / 40%);
    }

    .gradient-dark {
        color: #ffffff;
        text-shadow: 0 -1px 1px rgb(0 0 0 / 50%);
    }

    .gradient-light {
        color: #333333;
        background: linear-gradient(#ffffff, #e3e1e2);
    }

    .gradient-primary {
        background: linear-gradient(#55c40d, #3bab09);
    }

    .gradient-emergency {
        background: linear-gradient(#eb3b5a, #cd3e5a);
    }

    /* Size */
    .max {
        width: 100%;
    }

    .square-middle {
        width: 150px;
        height: 150px;
        font-weight: bold;
    }

</style>
