import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FashionComponent } from './fashion/fashion.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import {CarouselModule} from 'primeng/carousel';
import { FooterComponent } from './footer/footer.component';
import { ImgMagnifier } from 'ng-img-magnifier';
import { TooltipModule } from 'primeng/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortDirective } from './sort.directive';
import { ThricePipe } from './thrice.pipe';
import { ButtonModule } from "primeng/button";
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';

const routes=[
  {path:'',component:LoginComponent},  
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'register',component:RegistrationComponent},
    {path:'home',component:HomeComponent},
    {path:'fashion',component:FashionComponent},
  {path:'cart',component:CartComponent},
  {path:'jewelery',component:JewelleryComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'description',component:ProductDescriptionComponent},
  {path:'**',component:NotfoundComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FashionComponent,
    CartComponent,
    NotfoundComponent,
    HomeComponent,
    JewelleryComponent,
    ElectronicsComponent,
    ProductDescriptionComponent,
    FooterComponent,
    SortDirective,
    ThricePipe,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    CarouselModule,
    ImgMagnifier,
    TooltipModule,
    ButtonModule,
    NgbModule,
    NgbRatingModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
