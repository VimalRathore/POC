import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Charts',
  templateUrl: './Charts.component.html',
  styleUrls: ['./Charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor (private httpService: HttpClient) { }

    // ADD CHART OPTIONS.
    pieChartOptions = {
        responsive: true
    };

    pieChartLabels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
 
    // CHART COLOR.
    pieChartColor: any = [
        {
            backgroundColor: ['rgba(30, 169, 224, 0.8)',
            'rgba(255,165,0,0.9)',
            'rgba(139, 136, 136, 0.9)',
            'rgba(255, 161, 181, 0.9)',
            'rgba(255, 102, 0, 0.9)'
            ]
        }
    ];

    pieChartData: any = [
        {
            data: []
        }
    ];

    ngOnInit () {
        this.httpService.get('./assets/sales.json', {responseType: 'json'}).subscribe(
            data => {
                this.pieChartData = data as any [];	 // FILL THE CHART ARRAY WITH DATA.
            },
            (err: HttpErrorResponse) => {
                console.log (err.message);
            }
        );
    }

    onChartClick(event) {
        console.log(event);
    }
}
