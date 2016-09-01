<style lang="sass" scoped>
    .toaster {
        display: table;
        position: fixed;
        bottom: 0;
        z-index: 10;
        background: #fff;
        height: 100px;
        transition: transform 1s;
        transform: translate(0, 200px);
        &.active {
            /*bottom: 0;*/
            transform: translate(0, 0);
        }

        .message {
            display: table-cell;
            vertical-align: middle;
        }
    }


</style>

<template>

    <div class="well well-lg toaster" :class="{active: active}">
        <div class="message">{{ message }}</div>
    </div>

</template>

<script>
    var Vue = require('vue');

    module.exports = {
        data: function() {
            return {
                active: false,
                message: ''
            }
        },
        methods: {
            show: function (msg) {
                if(typeof msg !== 'string' || msg.length === 0) {
                    return;
                }
                var self = this;

                self.message = msg;
                self.active = true;

                setTimeout(function(){  self.active = false; }, 4000);
            }
        }
    }
</script>