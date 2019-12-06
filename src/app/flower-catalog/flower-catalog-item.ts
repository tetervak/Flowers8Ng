import {FlowerCatalogPicture} from './flower-catalog-picture';

export interface FlowerCatalogItem {
  name: string;
  label: string;
  price: string;
  description: string;
  picture: FlowerCatalogPicture;
}
