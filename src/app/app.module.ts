import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatTabsModule} from '@angular/material/tabs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
// import { MdmComponent } from './modulos/mdm/mdm.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


import { MdmModule } from './modules/mdm/mdm.module';
import { RelacionesModule } from './modules/relaciones/relaciones.module';
import { InicioComponent } from './system/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,

    ToolbarComponent,
    NavbarComponent,
    NotfoundComponent,
    LoginComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatIconModule, 
    MatButtonModule,
    MatTabsModule,

    FormsModule,
    HttpClientModule,

    MdmModule,
    RelacionesModule,

    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
