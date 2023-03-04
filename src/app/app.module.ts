import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { KnowMoreComponent } from './know-more/know-more.component';
import { Routes, RouterModule } from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing'

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "Home", component: HomeComponent},
  {path: "know",component: KnowMoreComponent},
  {path: "connect", component: ConnectComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    KnowMoreComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
