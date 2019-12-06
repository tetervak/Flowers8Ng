import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FlowerDetailsComponent} from './flower-details/flower-details.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FlowerDataService} from './flower-data.service';
import {FooterModule} from './footer/footer.module';
import {HttpClientModule} from '@angular/common/http';
import { FlowerTableComponent } from './flower-table/flower-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowerDetailsComponent,
    FlowerTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    FooterModule
  ],
  providers: [FlowerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
