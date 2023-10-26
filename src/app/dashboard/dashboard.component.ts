import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  newUsers: number = 168;
  data: any[] = [
    {
      name: 'FirmaXYZ',
      series: [
        {
          name: 'Jan',
          value: 85000,
        },
        {
          name: 'Feb',
          value: 55000,
        },
        {
          name: 'Mar',
          value: 60000,
        },
        {
          name: 'Apr',
          value: 62000,
        },
        {
          name: 'May',
          value: 58000,
        },
        {
          name: 'Jun',
          value: 64000,
        },
        {
          name: 'Jul',
          value: 70000,
        },
        {
          name: 'Aug',
          value: 72000,
        },
        {
          name: 'Sep',
          value: 75000,
        },
        {
          name: 'Oct',
          value: 78000,
        },
      ],
    },
  ];
}
