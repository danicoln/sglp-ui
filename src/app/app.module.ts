import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabMenuModule } from 'primeng/tabmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { FileUploadModule } from 'primeng/fileupload';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { LaudoPericialModule } from './pages/laudo-pericial/laudo-pericial.module';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabMenuModule,
    PanelMenuModule,
    SidebarModule,
    ButtonModule,
    AvatarModule,
    FontAwesomeModule,
    SharedModule,
    CoreModule,
    CardModule,
    FieldsetModule,
    RouterModule,
    LaudoPericialModule,
    FileUploadModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
