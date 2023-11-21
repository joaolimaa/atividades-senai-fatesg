import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formats-detail',
  templateUrl: './formats-detail.component.html',
  styleUrls: ['./formats-detail.component.scss'],
})
export class FormatsDetailComponent  implements OnInit {

  id: string | null = "";

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {}

}
