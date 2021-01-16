import  DashboardComponent from '../pages/Dashboard';
import  AddCustomerComponent from '../pages/Addcustomer';
import CustomerListComponent from '../pages/CustomerList';

export const pathList = [
    {
      path:'/',
      component: DashboardComponent,
      name: 'Dashboard'
    },
    {
      path:'/dashboard',
      component: DashboardComponent,
      name: 'Dashboard'
    },
    {
      path: '/dashboard/add-customer',
      component: AddCustomerComponent,
      name: 'Add Customer'
    },
    {
      path: '/dashboard/customer-list',
      component: CustomerListComponent,
      name: 'Customer List'
    }
  ];  