import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then( m => m.Tab4Page)
  },
  {
    path: 'add-new-pet',
    loadComponent: () => import('./tab1/pages/add-new-pet/add-new-pet.page').then( m => m.AddNewPetPage)
  },
  {
    path: 'pet-history',
    loadComponent: () => import('./tab1/pages/pet-history/pet-history.page').then( m => m.PetHistoryPage)
  },
  {
    path: 'detail-pet-appointment',
    loadComponent: () => import('./tab1/pages/detail-pet-appointment/detail-pet-appointment.page').then( m => m.DetailPetAppointmentPage)
  },
  {
    path: 'my-detail-address',
    loadComponent: () => import('./tab4/pages/my-detail-address/my-detail-address.page').then( m => m.MyDetailAddressPage)
  },
  {
    path: 'my-payment-methods',
    loadComponent: () => import('./tab4/pages/my-payment-methods/my-payment-methods.page').then( m => m.MyPaymentMethodsPage)
  },
  {
    path: 'my-support-section',
    loadComponent: () => import('./tab4/pages/my-support-section/my-support-section.page').then( m => m.MySupportSectionPage)
  },
];
