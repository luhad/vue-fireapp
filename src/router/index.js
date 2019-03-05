import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ViewVehicle from '@/components/ViewVehicle'
import NewVehicle from '@/components/NewVehicle'
import EditVehicle from '@/components/EditVehicle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'new-vehicle',
      component: NewVehicle
    },
    {
      path: '/:vehicle_id',
      name: 'view-vehicle',
      component: ViewVehicle
    },
    {
      path: '/edit/:vehicle_id',
      name: 'edit-vehicle',
      component: EditVehicle
    }
  ]
})