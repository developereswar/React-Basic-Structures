import  DashboardComponent from '../pages/Dashboard';
import  AddCustomerComponent from '../pages/Addcustomer';
import CustomerListComponent from '../pages/CustomerList';

export const pathList = [
    {
      path:'/',
      component: DashboardComponent
    },
    {
      path:'/dashboard',
      component: DashboardComponent
    },
    {
      path: '/dashboard/add-customer',
      component: AddCustomerComponent
    },
    {
      path: '/dashboard/customer-list',
      component: CustomerListComponent
    }
  ];  