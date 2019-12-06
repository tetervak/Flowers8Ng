import {Component, Input} from '@angular/core';
import {Flower} from '../flower';

@Component({
  selector: 'app-flower-details',
  templateUrl: './flower-details.component.html',
  styleUrls: ['./flower-details.component.css']
})
export class FlowerDetailsComponent {
  @Input() public flower: Flower;
}
