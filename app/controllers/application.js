import Ember from 'ember';
import config from '../config/environment';

const { get, computed, Controller, inject: {service} } = Ember;

export default Controller.extend({
  getHost: service(),

  hostname: computed(function() {
    return get(this, 'getHost').hostname();
  }),

  tenant: config.APP.tenant
});
