Vue.component('countdown', {
    data: function() {
        return {
            countdown : 5
        }
    },
    template: `<h1 v-if="countdown >= 0">{{ countdown }}</h1>`,
    methods: {
        launch() {
            const that = this;
            var interval = setInterval(function () {
                that.countdown--;
                if (that.countdown == 0) {
                    clearInterval(interval);
                    that.countdown--;
                    that.$emit('finish');
                }
            }, 1000);
        }
    }
})