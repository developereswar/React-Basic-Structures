import  DashboardComponent from '../pages/Dashboard';
import  AddCustomerComponent from '../pages/Addcustomer';
import CustomerListComponent from '../pages/CustomerList';
import LoginComponent from '../pages/Login';
import EditStagesComponents from '../pages/EditStages';
import AddWorkerComponent from '../pages/AddWorker';

import { faTachometerAlt, faPlus, faList, faSignOutAlt, faCodeBranch, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
export const pathList = [
    {
      path:'/',
      component: DashboardComponent,
      name: 'Dashboard',
      icon: faTachometerAlt,
      hideMenu:true,
    },
    {
      path:'/dashboard',
      component: DashboardComponent,
      name: 'Dashboard',
      icon: faTachometerAlt,
      hideMenu:false
    },
    {
      path: '/dashboard/add-customer',
      component: AddCustomerComponent,
      name: 'Add Customer',
      icon: faPlus,
      hideMenu:false
    },
    {
      path: '/dashboard/customer-list',
      component: CustomerListComponent,
      name: 'Customer List',
      icon: faList,
      hideMenu:false
    },
    {
      path: '/update-stages',
      component: EditStagesComponents,
      name: 'Update Stages',
      icon: faSignOutAlt,
      hideMenu:false,
      role:'admin'
    },

    {
      path: '/add-worker',
      component: AddWorkerComponent,
      name: 'Add Worker',
      icon: faSignOutAlt,
      hideMenu:false,
      role:'admin'
    },
    {
      path: '/logout',
      component: LoginComponent,
      name: 'LogOut',
      icon: faSignOutAlt,
      hideMenu:false
    }
  ];  


  export const menuList = [
    {
      path:'/dashboard',
      name: 'Dashboard',
      icon: faTachometerAlt,
      role: 'worker'
    },
    {
      path: '/dashboard/add-customer',
      component: AddCustomerComponent,
      name: 'Add Customer',
      icon: faPlus,
      role: 'worker'
    },
    {
      path: '/dashboard/customer-list',
      component: CustomerListComponent,
      name: 'Customer List',
      icon: faList,
      role: 'worker'
    },
    {
      path: '/update-stages',
      component: EditStagesComponents,
      name: 'Update Stages',
      icon: faCodeBranch,
      role:'admin'
    },
    {
      path: '/add-worker',
      component: AddWorkerComponent,
      name: 'Add Worker',
      icon: faPlusCircle,
      role:'admin'
    },
    {
      path: '/logout',
      component: LoginComponent,
      name: 'LogOut',
      icon: faSignOutAlt,
      role: 'worker'
    }
  ];  