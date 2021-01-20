import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Commodities, Cryptocoins, Fiats, Indexes, Json} from './types';
import {BitpandaService} from './bitpanda.service';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';


@Component({
  selector: 'app-indexes-list',
  template: `
      <link rel="stylesheet" href="styles.css">
      <mat-table [dataSource]="indexesList">
          <!-- Logo Definition -->
          <ng-container matColumnDef="logo">
              <mat-header-cell *matHeaderCellDef> </mat-header-cell>
              <mat-cell *matCellDef="let index"><img src= "{{index.attributes.logo}}"></mat-cell>
          </ng-container>

          <!-- Name Definition -->
          <ng-container matColumnDef="name">
              <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
              <mat-cell *matCellDef="let index"> {{index.attributes.name}} </mat-cell>
          </ng-container>

          <!-- Symbol Definition -->
          <ng-container matColumnDef="symbol">
              <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
              <mat-cell *matCellDef="let index"> {{index.attributes.symbol}} </mat-cell>
          </ng-container>

          <!-- Price Definition -->
          <ng-container matColumnDef="price">
              <mat-header-cell *matHeaderCellDef> Preis </mat-header-cell>
              <mat-cell *matCellDef="let index"> {{index.attributes.avg_price}} </mat-cell>
          </ng-container>
          
          <!-- Header and Row Declarations -->
          <mat-header-row *matHeaderRowDef="['logo', 'name', 'symbol', 'price']"></mat-header-row>
          <mat-row *matRowDef="let index; columns: ['logo', 'name', 'symbol', 'price']"></mat-row>
      </mat-table>
  `,
  styles: [
  ]
})
export class IndexesListComponent implements OnInit {

  @Output() select = new EventEmitter<number>();
  json: Json;
  indexesList: Indexes[];

  constructor(private bitpandaService: BitpandaService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.bitpandaService.retrieveAll()
      .then(json => {
        this.json = json;
        this.indexesList = this.json.data.attributes.indexes;
      });
  }

}
