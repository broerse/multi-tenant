import Ember from 'ember';

export default Ember.Service.extend({
  hostname: function() {
    if(window && window.location) {
      return window.location.host;
    }
  }
});
