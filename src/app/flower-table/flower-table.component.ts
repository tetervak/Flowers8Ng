import {Component, Input, OnInit} from '@angular/core';
import {Flower} from '../flower';
import {FlowerDataService} from '../flower-data.service';

@Component({
  selector: 'app-flower-table',
  templateUrl: './flower-table.component.html',
  styleUrls: ['./flower-table.component.css']
})
export class FlowerTableComponent implements OnInit {
  public flowers: Flower[];
  private flowerDataService: FlowerDataService;
  constructor(flowerDataService: FlowerDataService) {
    this.flowerDataService = flowerDataService;
    this.flowers = [];
  }
  ngOnInit(): void {
    this.flowerDataService.getFlowerData().subscribe(
      flowers => this.flowers = flowers);
  }
}


