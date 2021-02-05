Vue.component('level', {
    data: function() {
        return {
            level : 1
        }
    },
    template: `<span>Level {{ level }}</span>`,
    methods: {
        levelUp() {
            this.level++;
        },
        restartLevel() {
            this.level = 1;
        }
    }
})