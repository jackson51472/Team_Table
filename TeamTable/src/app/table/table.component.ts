import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface Time {
  codigo: number;
  nome: string;
  anoFundacao: number;
  estadio: string;
  serie: string;
}

const TIMES_DATA: Time[] = [
  { codigo: 1, nome: 'Flamengo', anoFundacao: 1895, estadio: 'Maracanã', serie: 'A' },
  { codigo: 2, nome: 'Grêmio', anoFundacao: 1903, estadio: 'Arena do Grêmio', serie: 'A' },
  { codigo: 3, nome: 'Cruzeiro', anoFundacao: 1921, estadio: 'Mineirão', serie: 'A' },
  // Adicione mais times aqui
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nome', 'anoFundacao', 'estadio', 'serie'];
  dataSource = new MatTableDataSource(TIMES_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
