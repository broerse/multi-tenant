import Ember from 'ember';
import config from '../config/environment';

const { Controller, inject: {service} } = Ember;

export default Controller.extend({
  getHost: service(),
  tenant: config.APP.tenant
});
