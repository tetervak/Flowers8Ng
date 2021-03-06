import {Flower} from './flower';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FlowerCatalog} from './flower-catalog/flower-catalog';
import {FlowerCatalogItem} from './flower-catalog/flower-catalog-item';
import {BehaviorSubject, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FlowerDataService {
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.flowers = [];
    this.flowerData = new BehaviorSubject<Flower[]>(this.flowers);
    this.loadFlowerCatalog();
  }
  private flowerCatalogUri = 'assets/data/flower-catalog.json';
  private readonly flowerData: BehaviorSubject<Flower[]>;
  private readonly flowers: Flower[];
  private httpClient: HttpClient;
  private static item2Flower(id: number, item: FlowerCatalogItem): Flower {
    const flower = new Flower();
    flower.id = id;
    flower.name = item.name;
    flower.label = item.label;
    flower.price = item.price;
    flower.description = item.description;
    flower.imgSrc = 'assets/images/flowers/' + item.picture.small;
    return flower;
  }
  // get the list of the Flower objects
  public getFlowerData(): Observable<Flower[]> {
    return this.flowerData;
  }
  // load the data from the JSON file
  private loadFlowerCatalog() {
    this.httpClient
      .get(this.flowerCatalogUri)
      .subscribe(
        (flowerCatalog: FlowerCatalog) => this.processFlowerCatalog(flowerCatalog));
  }

  private processFlowerCatalog(flowerCatalog: FlowerCatalog) {
    const items = flowerCatalog.flowers;
    items.forEach(
      (item: FlowerCatalogItem, index: number) =>
        this.flowers.push(FlowerDataService.item2Flower(index, item)));
    this.flowerData.next(this.flowers);
  }
}
