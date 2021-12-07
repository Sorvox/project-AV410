import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms'; 
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ESPaginator } from './custom-paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { NoFoundComponent } from './no-found/no-found.component';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailComponent,
    NoFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatPaginatorModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    MatChipsModule,
    MatBadgeModule
  ],
  providers: [
    [
      {
        provide: MatPaginatorIntl,
        useClass: ESPaginator
      }
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
