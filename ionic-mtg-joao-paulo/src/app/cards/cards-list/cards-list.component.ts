import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { Card, ModelCard } from 'src/app/shared/card';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent  implements OnInit {

  cards! : Card[];

  items: string[] = [];

  constructor(private service: CardsService) { }

  ngOnInit() {

    this.generateItems();

    this.service.listar().subscribe(resposta => {

      this.cards = resposta.cards;

    });

  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
