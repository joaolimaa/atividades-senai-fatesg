import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base.service';
import { Model } from '../shared/model';

@Injectable({
  providedIn: 'root'
})
export class SetsService extends BaseService<Model, number> {

  constructor(override http: HttpClient) {
    super(http, "sets");
  }
  
}
