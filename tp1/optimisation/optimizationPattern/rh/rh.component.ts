import { NgZone } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import { List } from 'immutable';
import {User, UsersService} from "../users.service";
import * as ChartJs from 'chart.js/auto';
@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css']
})
export class RhComponent implements OnInit {
  oddUsers: List<User>;
  evenUsers: List<User>;
  chart: any;
  constructor(private userService: UsersService, private zone: NgZone) {
    this.oddUsers = this.userService.getOddOrEven(true);
    this.evenUsers = this.userService.getOddOrEven();
  }
  ngOnInit(): void {
        this.createChart();
    }

  createChart(){
    const data = [
      { users: 'Workers', count: this.oddUsers.size },
      { users: 'Boss', count: this.evenUsers.size },
    ];
    this.zone.runOutsideAngular(() => {
    this.chart = new ChartJs.Chart("MyChart",
    {
      type: 'bar',
        data: {
          labels: data.map(row => row.users),
        datasets: [
        {
          label: 'Entreprise stats',
          data: data.map(row => row.count)
        }
      ]
    }
    });
  },)
  }
}
