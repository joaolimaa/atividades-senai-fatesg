import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class BaseService<T, N> {

  url: string = "https://api.magicthegathering.io/v1/";

  constructor(
    public http: HttpClient,
    public path: string,
    ) { }

  listar(): Observable<T> {
    return this.http.get<T>(this.url + this.path);
  }
  
  buscar(id: N | null): Observable<T> {

    return this.http.get<T>(`${this.url + this.path}/${id}`);
    
  }

}
