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
  { codigo: 4, nome: 'Atletico MG', anoFundacao: 1908, estadio: 'Arena MRV', serie: 'A' },
  { codigo: 5, nome: 'América MG', anoFundacao: 1912, estadio: 'Arena Independência', serie: 'B' },
  { codigo: 6, nome: 'Bahia', anoFundacao: 1931, estadio: 'Arena Fonte Nova', serie: 'A' },
  { codigo: 7, nome: 'Criciúma', anoFundacao: 1947, estadio: 'Majestoso', serie: 'A' },
  { codigo: 8, nome: 'Juventude', anoFundacao: 1913, estadio: 'Estádio Alfredo Jaconi', serie: 'A' },
  { codigo: 9, nome: 'Internacional', anoFundacao: 1909, estadio: 'Estádio Beira-Rio', serie: 'A' },
  { codigo: 10, nome: 'Corinthians', anoFundacao: 1910, estadio: 'Neo Química Arena', serie: 'A' },
  { codigo: 11, nome: 'Palmeiras', anoFundacao: 1914 , estadio: 'Allianz Parque', serie: 'A' },
  { codigo: 12, nome: 'São Paulo', anoFundacao: 1930 , estadio: 'Morumbi', serie: 'A' },
  { codigo: 13, nome: 'Bragantino', anoFundacao: 1928 , estadio: 'Estádio Nabi Abi Chedid', serie: 'A' },
  { codigo: 14, nome: 'Santos', anoFundacao: 1912 , estadio: 'Vila Belmiro', serie: 'B' },
  { codigo: 15, nome: 'Grêmio Novorizontino', anoFundacao: 2010 , estadio: 'Jorge Ismael de Biasi', serie: 'B' },
  { codigo: 16, nome: 'Mirassol', anoFundacao: 1925, estadio: 'José Maria de Campos Maia', serie: 'B' },
  { codigo: 17, nome: 'Atlético GO', anoFundacao: 1937, estadio: 'Estádio Antonio Accioly', serie: 'A' },
  { codigo: 18, nome: 'Cuiabá', anoFundacao: 2001, estadio: 'Arena Pantanal', serie: 'A' },
  { codigo: 19, nome: 'Fluminense', anoFundacao: 1902, estadio: 'Maracanã', serie: 'A' },
  { codigo: 20, nome: 'Vitória', anoFundacao: 1899, estadio: 'Barradão', serie: 'A' },
  { codigo: 21, nome: 'Vasco da Gama', anoFundacao: 1898, estadio: 'Estádio São Januário', serie: 'A' },
  { codigo: 22, nome: 'Fortaleza', anoFundacao: 1918, estadio: 'Arena Castelão', serie: 'A' },
  { codigo: 23, nome: 'Botafogo', anoFundacao: 1904, estadio: 'Estádio Olímpico Nilton Santos', serie: 'A' },
  { codigo: 24, nome: 'Athletico', anoFundacao: 1924, estadio: 'Ligga Arena', serie: 'A' },
  { codigo: 25, nome: 'Sport', anoFundacao: 1905, estadio: 'Ilha do Retiro', serie: 'B' },
  { codigo: 26, nome: 'Vila Nova GO', anoFundacao: 1943, estadio: 'Estádio Serra Dourada', serie: 'B' },
  { codigo: 27, nome: 'Ceará', anoFundacao: 1914, estadio: 'Arena Castelão', serie: 'B' },
  { codigo: 28, nome: 'Coritiba', anoFundacao: 1909, estadio: 'Estádio Major Couto Pereira', serie: 'B' },
  { codigo: 29, nome: 'Avaí', anoFundacao: 1923, estadio: 'Ressacada', serie: 'B' },
  { codigo: 30, nome: 'Operário Ferroviário', anoFundacao: 1912, estadio: 'Estádio Germano Krüger', serie: 'B' },
  { codigo: 31, nome: 'Amazonas ', anoFundacao: 2019, estadio: 'Arena da Amazônia', serie: 'B' },
  { codigo: 32, nome: 'Goiás', anoFundacao: 1943, estadio: 'Estádio Serra Dourada', serie: 'B' },
  { codigo: 34, nome: 'Chapecoense', anoFundacao: 1973, estadio: 'Arena Condá', serie: 'B' },
  { codigo: 35, nome: 'Botafogo SP', anoFundacao: 1918, estadio: 'Estádio Santa Cruz', serie: 'B' },
  { codigo: 36, nome: 'Paysandu', anoFundacao: 1914, estadio: 'Mangueirão', serie: 'B' },
  { codigo: 37, nome: 'Brusque', anoFundacao: 1987, estadio: 'Estádio Augusto Bauer', serie: 'B' },
  { codigo: 38, nome: 'Ituano', anoFundacao: 1947, estadio: 'Estádio Dr. Novelli Júnior', serie: 'B' },
  { codigo: 39, nome: 'CRB', anoFundacao: 1912, estadio: 'Estádio Rei Pelé', serie: 'B' },
  { codigo: 40, nome: 'Guarani', anoFundacao: 1911, estadio: ' Estádio Brinco de Ouro da Princesa', serie: 'B' },
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
