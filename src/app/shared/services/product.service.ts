import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: ProductType[] = [];

  constructor(private http: HttpClient) {  }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(environment.apiURL + 'pizzas')
  }
  getProduct(id: number): Observable<ProductType> {
    //ajax
    return this.http.get<ProductType>(environment.apiURL + `pizzas?id=${id}`)
  }

  createOrder(data: {product: string, address: string, phone: string}) {
    return this.http.post<{success: boolean, message?: string}>('https://testologia.ru/order-pizza', data);
  }
}



// [
//   {
//     id: 1,
//     image: 'product1.png',
//     title: 'Мясная Делюкс',
//     description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
//     datetime: '2022-12-31 15:00:00'
//   },
//   {
//     id: 2,
//     image: '',
//     title: 'Морская Премиум',
//     description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
//     datetime: '2022-04-31 16:00:00'
//   },
//   {
//     id: 3,
//     image: 'product3.png',
//     title: 'Бекон и Сосиски',
//     description: 'Бекон, сыр, сосиски, ананас, томатная паста',
//     datetime: '2022-11-12 14:00:00'
//   },
//   {
//     id: 4,
//     image: 'product4.png',
//     title: 'Куриная Делюкс',
//     description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
//     datetime: '2024-12-31 15:00:00'
//   },
//   {
//     id: 5,
//     image: 'product5.png',
//     title: 'Барбекю Премиум',
//     description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
//     datetime: '2022-12-10 14:00:00'
//   },
//   {
//     id: 6,
//     image: 'product6.png',
//     title: 'Пепперони Дабл',
//     description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
//     datetime: '2023-09-31 15:00:00'
//   },
//   {
//     id: 7,
//     image: 'product7.png',
//     title: 'Куриное трио',
//     description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
//     datetime: '2022-09-09 15:00:00'
//   },
//   {
//     id: 8,
//     image: 'product8.png',
//     title: 'Сырная',
//     description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
//     datetime: '2022-08-09 12:00:00'
//   },
// ];
