import { Component, OnInit } from '@angular/core';
import {BitpandaService} from './bitpanda.service';
import {Json} from './types';

@Component({
  selector: 'app-bitpanda',
  template: `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="styles.css">
      <h1>Bitpanda Preise</h1>
      <p>Mit Bitcoin Aufschlägen von 1,49% (kaufen und verkaufen) ist Bitpanda der preiswerteste Ort für den sofortigen Kauf und Verkauf von Bitcoin.</p>
      <h2>Commodities</h2>
      <app-commodities-list></app-commodities-list>
      <h2 class="h2">Cryptocoins</h2>
      <app-cryptocoins-list></app-cryptocoins-list>
      <h2>Indexes</h2>
      <app-indexes-list></app-indexes-list>
      <h2>Fiats</h2>
      <app-fiats-list></app-fiats-list>
  `,
  styles: [`
  `]
})
export class BitpandaComponent {

  selectedItem: Json;

  constructor(private bitpandaService: BitpandaService) { }

  selectItems(id: number): any{
    if (id) {
      this.bitpandaService.retrieve(id)
        .then(clients => this.selectedItem = clients);
    }
    else {
      this.selectedItem = new Json();
    }
  }

}
