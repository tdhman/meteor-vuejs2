import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'
import isMeteorUser from '../../api/isMeteorUser.js'

const routerFactory = new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior,
})

import WrapperPage from '../../ui/pages/Wrapper.vue'
import HomePage from '../../ui/pages/Home.vue'
import EnConstructionPage from '../../ui/pages/EnConstruction.vue'
import NotAllowedPage from '../../ui/pages/Page403.vue'
import NotFoundPage from '../../ui/pages/Page404.vue'

RouterFactory.configure(factory => {
  factory.addRoutes([
    {
      name: 'home',
      path: '/', component: WrapperPage,
      children: [
        { path: '', component: HomePage, meta: { section: "home", title: "Accueil" } },
      ]
    },
    { path: '/403', component: NotAllowedPage },
    { path: '/construction', component: EnConstructionPage },
    { path: '/*', component: NotFoundPage }
  ])
})

const router = routerFactory.create()

router.beforeEach((to, from, next) => {
  //something to do
  next()
})


/*router.afterEach(route => {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
})*/

export default router

