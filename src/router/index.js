import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import PatientInfo from '@/components/PatientInfo/PatientInfo'
import DocOrderCheck from '@/components/DocOrderCheck/DocOrderCheck'
import DocOrderRun from '@/components/DocOrderRun/DocOrderRun'
import InfusionPatrol from '@/components/InfusionPatrol/InfusionPatrol'
import SignsInput from '@/components/SignsInput/SignsInput'
import VisitManagement from '@/components/VisitManagement/VisitManagement'
import VoiceInput from '@/components/VoiceInput/VoiceInput'
import DynamicMonitor from '@/components/DynamicMonitor/DynamicMonitor'

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
        },
        {
          path: 'docOrderRun',
          name: 'DocOrderRun',
          component: DocOrderRun
        },
        {
          path: 'docOrderCheck',
          name: 'DocOrderCheck',
          component: DocOrderCheck
        },
        {
          path: 'infusionPatrol',
          name: 'InfusionPatrol',
          component: InfusionPatrol
        },
        {
          path: 'signsInput',
          name: 'SignsInput',
          component: SignsInput
        },
        {
          path: 'visitManagement',
          name: 'VisitManagement',
          component: VisitManagement
        },
        {
          path: 'voiceInput',
          name: 'VoiceInput',
          component: VoiceInput
        },
        {
          path: 'dynamicMonitor',
          name: 'DynamicMonitor',
          component: DynamicMonitor
        }
      ]
    }
  ]
})
