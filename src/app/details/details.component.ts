import { MatPaginator } from '@angular/material/paginator';
import {AfterViewInit, Component, ViewChild, Input} from '@angular/core';
import { Apis } from 'src/service/apis.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements AfterViewInit {

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @Input() value: string;


  displayedColumns: string[] = ['title', 'description'];

  dataSource: any = [];

  constructor(private apis : Apis) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.apis.getvalues(this.value).then((value: any) =>{
      this.dataSource = value.data.results;
    });
  }
}

export interface PeriodicElement {
  title: string;
  description: string;
}



