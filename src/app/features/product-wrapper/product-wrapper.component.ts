import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-wrapper',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-wrapper.component.html',
  styleUrl: './product-wrapper.component.css'
})
export class ProductWrapperComponent {

}
