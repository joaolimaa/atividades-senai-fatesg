import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';
import { Card } from 'src/app/shared/card';

@Component({
  selector: 'app-cards-detail',
  templateUrl: './cards-detail.component.html',
  styleUrls: ['./cards-detail.component.scss'],
})
export class CardsDetailComponent  implements OnInit {

  id: string | null = "";

  card! : Card;

  constructor(route: ActivatedRoute,
    private service: CardsService) {
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {

    this.service.buscar(this.id).subscribe(resposta => {

      console.log(resposta.card);

      this.card = resposta.card;

    });

  }

}
