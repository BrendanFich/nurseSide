import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import PatientInfo from '@/components/PatientInfo/PatientInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      redirect: '/index/patientInfo',
      children: [
        {
          path: 'patientInfo',
          name: 'PatientInfo',
          component: PatientInfo
        }
      ]
    }
  ]
})
