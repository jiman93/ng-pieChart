import { Component, OnInit } from '@angular/core';
import { AppServices } from '../services/jsonItem.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {

      data = [];

      view: any[] = [700, 400];

      // options
      showXAxis = true;
      showYAxis = true;
      gradient = false;
      showLegend = true;
      showXAxisLabel = true;
      xAxisLabel = 'Country';
      showYAxisLabel = true;
      yAxisLabel = 'Population';

      colorScheme = {
        domain: ['royalblue', 'yellow', 'crimson', 'limegreen', 'magenta']
      };

      onSelect(event) {
        console.log(event);
      }

      constructor(private itemService: AppServices) { }
         ngOnInit() {
              this.itemService.getJSON()
              .subscribe(resItemData => this.data = resItemData);
         }

}
