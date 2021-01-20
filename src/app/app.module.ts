import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BitpandaComponent} from './bitpanda.component';
import {BitpandaListComponent} from './bitpanda-list.component';
import {BitpandaService} from './bitpanda.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FiatsListComponent } from './fiats-list.component';
import { IndexesListComponent } from './indexes-list.component';
import { CryptocoinsListComponent } from './cryptocoins-list.component';
import { CommoditiesListComponent } from './commodities-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    BitpandaComponent,
    BitpandaListComponent,
    FiatsListComponent,
    IndexesListComponent,
    CryptocoinsListComponent,
    CommoditiesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [BitpandaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
