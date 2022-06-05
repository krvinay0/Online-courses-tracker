import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  public rows: any;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  public tabClass: string = 'active';
  public tabId: number = 1;
  tabChange(id: number) {
    this.tabId = id;
    this.tabClass = 'active';
  }

  getAllData() {
    this.data.getData().subscribe((data) => {
      this.rows = data.DataList;
      console.log(this.rows);
    });
  }
}
