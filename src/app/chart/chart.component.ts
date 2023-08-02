import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface User {
  name: string;
  zone: string;
  region: string;
  teamtype: string;
  month: string;
  royalty: number;
  enrollments: number;

}

const ELEMENT_DATA: User[] = [
  {name: 'Piya Mukherjee', zone: 'West', region: 'MUM', teamtype: 'Marketing', month: 'Jan', royalty: 41655071,enrollments:3461 },
  {name: 'Piya Mukherjee', zone: 'West', region: 'MUM', teamtype: 'Marketing', month: 'Feb', royalty: 34566780,enrollments:901 },
  {name: 'Piya Mukherjee', zone: 'West', region: 'MUM', teamtype: 'Marketing', month: 'Mar', royalty: 4893451,enrollments:8761 },
  {name: 'Piya Mukherjee', zone: 'West', region: 'MUM', teamtype: 'Marketing', month: 'Apr', royalty: 789971,enrollments:3460 },
  {name: 'Piya Mukherjee', zone: 'West', region: 'MUM', teamtype: 'Marketing', month: 'May', royalty: 1655071,enrollments:3791 },
  {name: 'Piya Mukherjee', zone: 'West', region: 'MUM', teamtype: 'Marketing', month: 'June', royalty: 5995071,enrollments:6961 },
];

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  @ViewChild('paginator', { static: true }) paginator: MatPaginator;
  dataSource = new MatTableDataSource<User>([]);


  displayedColumns: string[] = ['name', 'zone','region','teamtype','month','royalty','enrollments'];
  // dataSource = ELEMENT_DATA;

  constructor() { }
  


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'Row Count';

      

    // this.dataSource.paginator = this.paginator;
  }

}
