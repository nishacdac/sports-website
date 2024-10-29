import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ProfileComponent } from './Admin//profile/profile.component';
import { FooterComponent } from './layout1/outerlayout/footer/footer.component';
import { HeaderComponent } from './layout1/outerlayout/header/header.component';
import { AboutusComponent } from './outer/aboutus/aboutus.component';
import { ContactUsComponent } from './outer/contactus/contactus.component';
import { HomeComponent } from './outer/home/home.component';
import { LoginpageComponent } from './outer/loginpage/loginpage.component';
// import { LoginpageComponent } from './outer/loginpage/loginpage.component';
import { CategoriesComponent } from './outer/categories/categories.component';
import { ProductsComponent } from './outer/products/products.component';
import { BrandsComponent } from './outer/brands/brands.component';
import { LayoutComponent } from './layout1/outerlayout/layout/layout.component';
import { CustomerLoginComponent } from './outer/customer.login/customer.login.component';
// import { RegistrationComponent } from './layout/outer/registration/registration.component';

// import { AboutusComponent } from './outer/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    LayoutComponent,
    // AdminComponent,
    // OuterlayoutComponent,
    // AdminlayoutComponent,
    FooterComponent,
    HeaderComponent,
    AboutusComponent,
    ContactUsComponent,
    HomeComponent,
    LoginpageComponent,
    LoginpageComponent,
    CategoriesComponent,
    ProductsComponent,
    BrandsComponent,
    AboutusComponent,
    CustomerLoginComponent,
    // RegistrationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
