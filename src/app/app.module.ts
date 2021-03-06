import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule, MatCardModule } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { AdalService } from 'adal-angular4';
import { ConfigService } from './services/config.service';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    CdkTableModule
  ],
  exports: [
    MatCardModule,
    MatTabsModule
  ],
  providers: [AdalService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
