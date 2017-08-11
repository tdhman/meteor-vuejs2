import { Meteor } from 'meteor/meteor'
import '../../api/helpers.js'
import '../../api/collections.js'

import { DocHead } from 'meteor/kadira:dochead'
var title = "Title";
DocHead.setTitle(title);
var metaInfo = { name: "description", content: "Helllooooo" };
DocHead.addMeta(metaInfo);
var linkInfo = { rel: "icon", type: "image/png", href: "/img/favicon.png" };
DocHead.addLink(linkInfo);

import { Accounts } from 'meteor/accounts-base'
/*
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
})
*/

import Vue from 'vue';

import VueTracker from 'vue-meteor-tracker';
Vue.use(VueTracker);

import VueMeta from 'vue-meta';
Vue.use(VueMeta)

import fr from 'vee-validate/dist/locale/fr';
import VeeValidate, { Validator } from 'vee-validate';
fr.messages.confirmed = function () {
  return "Vos mots de passe ne correspondent pas"
}
Validator.addLocale(fr)
Vue.use(VeeValidate, {
  locale: 'fr'
})

import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
Vue.use(VueLodash, lodash)

import VueSupply from 'vue-supply'
Vue.use(VueSupply)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import ElementUI from 'element-ui'
import '../../../public/theme-default/index.css'
Vue.use(ElementUI)

Vue.prototype.$loading = ElementUI.Loading.service
Vue.prototype.$msgbox = ElementUI.MessageBox
Vue.prototype.$alert = ElementUI.MessageBox.alert
Vue.prototype.$confirm = ElementUI.MessageBox.confirm
Vue.prototype.$prompt = ElementUI.MessageBox.prompt
Vue.prototype.$notify = ElementUI.Notification
Vue.prototype.$message = ElementUI.Message

import App from '../../ui/App.vue';
import router from './routes.js'

// Global shared storage
const sharedStorage = {
  debug: false,
  state: {},
  eventBus: new Vue(),
  setData (key, value) {
    if (this.debug) console.log('sharedStorage setData triggered with', key, value)
    this.state[key] = value
    this.eventBus.$emit('sharedStorageChanged', key)
  },
  getData (key) {
    if (this.debug) console.log('sharedStorage getData triggered with', key)
    return this.state[key]
  },
  removeData (key) {
    if (this.debug) console.log('sharedStorage removeData triggered with', key)  
    delete this.state[key]
    return this.state[key]
  },
  clearData () {
    if (this.debug) console.log('sharedStorage clearData triggered')
    this.state = {}
  }
}
Vue.prototype.$sharedStorage = sharedStorage

Meteor.startup(() => {

  new Vue({
    router: router,
    render: h => h(App),
  }).$mount('app');

});




