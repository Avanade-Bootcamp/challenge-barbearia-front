import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CreateContactComponent } from './pages/create-contact/create-contact.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "create-contact", component: CreateContactComponent },
    { path: "user-details/:id", component: UserDetailsComponent },
];