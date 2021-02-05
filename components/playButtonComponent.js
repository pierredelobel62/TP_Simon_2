Vue.component('play-button', {
    template: `<button v-on:click="launchGame">Lancer la partie</button>`,
    methods: {
        launchGame () {
            this.$emit('launch-game');
        }
    }
})