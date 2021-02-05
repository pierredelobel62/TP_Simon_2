Vue.component('simon-button', {
    props: ['data'],
    template: `<button v-bind:class="[data.name, data.active ? 'active': '']" v-on:click="clickButton(data)"></button>`,
    methods: {
        clickButton(value) {
            value.active = true;
            value.sound.play();
            setTimeout(() => {
                value.active = false;
            }, 500);
            this.$emit('click', value);
        },
    },
})