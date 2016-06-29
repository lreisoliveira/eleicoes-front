angular.module('App_aovivo-eventos')

    .service('EventosServices', function() {
        var evento_slug = '';
        return {

            getEventoSlug: function () {
                return evento_slug;
            },

            setEventoSlug: function(value) {
                evento_slug = value;
            }
        };
    });