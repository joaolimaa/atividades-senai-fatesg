import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../shared/base.service';
import { ModelCard } from '../shared/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService extends BaseService<ModelCard, string> {

  constructor(override http: HttpClient) {
    super(http, "cards");
  }

}
