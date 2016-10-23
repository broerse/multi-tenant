import Ember from 'ember';

const { computed, Service } = Ember;

export default Service.extend({
  hostname: computed(function() {
    if(window && window.location) {
      return window.location.host;
    }
  })
});
