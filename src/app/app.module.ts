import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PantallaExamenComponent } from './pages/pantalla-examen/pantalla-examen.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PantallaExamenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    PanelModule,
    ToastModule,
    HttpClientModule

  ],
  providers: [[MessageService]],
  bootstrap: [AppComponent]
})
export class AppModule { }
