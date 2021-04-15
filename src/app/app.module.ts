import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { AddComponent } from './add/add.component';
import { LocalService } from './local.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
