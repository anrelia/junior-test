import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Commodities, Cryptocoins, Fiats, Indexes, Json} from './types';
import {BitpandaService} from './bitpanda.service';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-fiats-list',
  template: `
      <link rel="stylesheet" href="styles.css">

      <mat-table [dataSource]="fiatList">
          <!-- Logo Definition -->
          <ng-container matColumnDef="logo">
              <mat-header-cell *matHeaderCellDef> </mat-header-cell>
              <mat-cell *matCellDef="let fiats"><img src= "{{fiats.attributes.logo}}"></mat-cell>
          </ng-container>

          <!-- Name Definition -->
          <ng-container matColumnDef="name">
              <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
              <mat-cell *matCellDef="let fiats"> {{fiats.attributes.name}} </mat-cell>
          </ng-container>

          <!-- Symbol Definition -->
          <ng-container matColumnDef="symbol">
              <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
              <mat-cell *matCellDef="let fiats"> {{fiats.attributes.symbol}} </mat-cell>
          </ng-container>

          <!-- Price Definition -->
          <ng-container matColumnDef="price">
              <mat-header-cell *matHeaderCellDef> Preis </mat-header-cell>
              <mat-cell *matCellDef="let fiats"> {{fiats.attributes.avg_price}} </mat-cell>
          </ng-container>
          
          <!-- Header and Row Declarations -->
          <mat-header-row *matHeaderRowDef="['logo', 'name', 'symbol', 'price']"></mat-header-row>
          <mat-row *matRowDef="let fiats; columns: ['logo', 'name', 'symbol', 'price']"></mat-row>
      </mat-table>
  `,
  styles: [
  ]
})
export class FiatsListComponent implements OnInit {
  displayedColumns: string[] = ['logo', 'symbol', 'name', 'avg_price'];
  dataSource: MatTableDataSource<Fiats>;
  @ViewChild(MatSort) sort: MatSort;


  @Output() select = new EventEmitter<number>();
  json: Json;
  fiatList: Fiats[];

  constructor(private bitpandaService: BitpandaService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.bitpandaService.retrieveAll()
      .then(json => {
        this.json = json;
        this.fiatList = this.json.data.attributes.fiats;
        this.dataSource = new MatTableDataSource(this.fiatList);
      });
  }

}
