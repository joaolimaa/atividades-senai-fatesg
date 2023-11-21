import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-types-detail',
  templateUrl: './sub-types-detail.component.html',
  styleUrls: ['./sub-types-detail.component.scss'],
})
export class SubTypesDetailComponent  implements OnInit {

  id: string | null = "";

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {}

}
