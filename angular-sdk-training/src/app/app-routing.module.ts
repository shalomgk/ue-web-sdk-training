import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

// Import your components here
// import { HomeComponent } from './home.component';
// import { AboutComponent } from './about.component';

const routes: Routes = [
    // Define your routes here
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }