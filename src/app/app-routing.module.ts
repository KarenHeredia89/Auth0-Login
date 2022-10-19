import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@auth0/auth0-angular';

import { ConfigComponent } from "./components/config/config.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {   path: 'dashboard',
        component: DashboardComponent,
    
        // Protect a route by registering the auth guard in the `canActivate` hook
        canActivate: [AuthGuard],
      },
    {   path: 'config',
        component: ConfigComponent,
        canActivate: [AuthGuard],
      },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}