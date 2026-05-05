import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {TitleComponent} from "../title/title.component";
import {CartProductService} from "../../services/cart-product.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [CartProductService]
  // encapsulation: ViewEncapsulation.None
})
export class ProductCardComponent {

  // @Input() product-card: ProductType = {} as ProductType;

  // @Input()
  // get product-card(): ProductType {return this._product;}
  // set product-card(param: ProductType) {
  //   param.title = param.title.toUpperCase();
  //   this._product = param;
  // }
  // private _product: ProductType;

  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!: ElementRef;
  constructor(public cartProductService: CartProductService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      datetime: ''
    }
  }
  // addProductToCart() {
  //   this.cartProductService.count++;
  //   this.addToCartEvent.emit(this.titleComponent.title);
  //
  //   // this.addToCartEvent.emit(this.titleComponent.toUpper());
  // }

}
