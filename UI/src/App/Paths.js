import HomeComponent from '../pages/Home';
import  AddCustomerComponent from '../pages/Addcustomer';
import CustomerListComponent from '../pages/CustomerList';

export const pathList = [
    {
      path:'/',
      component: HomeComponent
    },
    {
      path:'/dashboard',
      component: HomeComponent
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