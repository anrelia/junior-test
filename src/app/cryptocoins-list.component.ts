import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cryptocoins, Indexes, Json} from './types';
import {BitpandaService} from './bitpanda.service';

@Component({
  selector: 'app-cryptocoins-list',
  template: `
      <link rel="stylesheet" href="styles.css">

      <mat-table [dataSource]="cryptocoinsList">
          <!-- Logo Definition -->
          <ng-container matColumnDef="logo">
              <mat-header-cell *matHeaderCellDef> </mat-header-cell>
              <mat-cell *matCellDef="let cryptocoins"><img src= "{{cryptocoins.attributes.logo}}"></mat-cell>
          </ng-container>

          <!-- Name Definition -->
          <ng-container matColumnDef="name">
              <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
              <mat-cell *matCellDef="let cryptocoins"> {{cryptocoins.attributes.name}} </mat-cell>
          </ng-container>

          <!-- Symbol Definition -->
          <ng-container matColumnDef="symbol">
              <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
              <mat-cell *matCellDef="let cryptocoins"> {{cryptocoins.attributes.symbol}} </mat-cell>
          </ng-container>

          <!-- Price Definition -->
          <ng-container matColumnDef="price">
              <mat-header-cell *matHeaderCellDef> Preis </mat-header-cell>
              <mat-cell *matCellDef="let cryptocoins"> {{cryptocoins.attributes.avg_price}} </mat-cell>
          </ng-container>

          <!-- Header and Row Declarations -->
          <mat-header-row *matHeaderRowDef="['logo', 'name', 'symbol', 'price']"></mat-header-row>
          <mat-row *matRowDef="let cryptocoins; columns: ['logo', 'name', 'symbol', 'price']"></mat-row>
      </mat-table>
  `,
  styles: [
  ]
})
export class CryptocoinsListComponent implements OnInit {

  @Output() select = new EventEmitter<number>();
  json: Json;
  cryptocoinsList: Cryptocoins[];

  constructor(private bitpandaService: BitpandaService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.bitpandaService.retrieveAll()
      .then(json => {
        this.json = json;
        this.cryptocoinsList = this.json.data.attributes.cryptocoins;
      });
  }

}
