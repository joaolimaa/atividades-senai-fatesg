import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sets-detail',
  templateUrl: './sets-detail.component.html',
  styleUrls: ['./sets-detail.component.scss'],
})
export class SetsDetailComponent  implements OnInit {

  id: string | null = "";

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {}

}
