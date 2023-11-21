import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-types-detail',
  templateUrl: './types-detail.component.html',
  styleUrls: ['./types-detail.component.scss'],
})
export class TypesDetailComponent  implements OnInit {

  id: string | null = "";

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {}

}
