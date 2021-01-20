import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Commodities, Cryptocoins, Fiats, Indexes, Json} from './types';
import {BitpandaService} from './bitpanda.service';

@Component({
  selector: 'app-bitpanda-list',
  template: `
      <meta http-equiv="Content-Security-Policy" content="default-src 'none'; connect-src 'self'; font-src 'self'; img-src 'self' data: https:; style-src 'self' ; script-src 'self'">
      <table id="meineTabelle">
          <thead>
          <tr>
              <th>Lorem</th>
              <th>Lorem</th>
              <th>Lorem</th>
              <th>Lorem</th>
          </tr>
          </thead>

          <tbody>
          <tr *ngFor="let fiats of fiatList; ">
              <td>{{fiats.attributes.default_sell_amount}}</td>
              <td>{{fiats.type}}</td>
              <td>{{fiats.attributes.has_wallets}}</td>
              <td>{{fiats.id}}</td>
              <td><img src= "{{fiats.attributes.logo}}"></td>
          </tr>
          </tbody>
      </table>
  `,
  styles: [
  ]
})
export class BitpandaListComponent implements OnInit {

  @Output() select = new EventEmitter<number>();
  json: Json;
  commoditiesList: Commodities[];
  cryptocoinsList: Cryptocoins[];
  indexesList: Indexes[];
  fiatList: Fiats[];

  constructor(private bitpandaService: BitpandaService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.bitpandaService.retrieveAll()
      .then(json => {
        this.json = json;
        console.log(this.json);
        this.commoditiesList = this.json.data.attributes.commodities;
        this.cryptocoinsList = this.json.data.attributes.cryptocoins;
        this.indexesList = this.json.data.attributes.indexes;
        this.fiatList = this.json.data.attributes.fiats;

        console.log(this.fiatList);
      });
  }



}

