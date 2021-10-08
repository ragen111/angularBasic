import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChooseMainComponent } from './components/choose-main/choose-main.component';
import { ResultMainComponent } from './components/result-main/result-main.component';
import { WasherTagsDescComponent } from './components/washer-tags-desc/washer-tags-desc.component';
import { ProductServiceComponent } from './components/product-service/product-service.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { RegisterComponent } from './components/register/register.component';
import { SustainabilityComponent } from './components/sustainability/sustainability.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChooseMainComponent,
    ResultMainComponent,
    WasherTagsDescComponent,
    ProductServiceComponent,
    ScannerComponent,
    RegisterComponent,
    SustainabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
