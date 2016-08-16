//(function() {
//    App.comments = App.cable.subscriptions.create("TestChannel", {
//
//        connected: function() {
//            return setTimeout((function(_this) {
//                return function() {
//                    _this.followCurrentMessage();
//                };
//            })(this), 1000);
//        },
//
//        received: function(data) {
//            console.log('Recebido:', data);
//        },
//
//        followCurrentMessage: function() {
//            return this.perform('follow', {
//                evento: '1'
//            });
//        }
//    });
//
//}).call(this);
