import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private url: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  autenticar(usuario: string, senha: string): Observable<any> {
    return this.httpClient.post(`${this.url}/user/login`, {
      userName: usuario,
      password: senha
    });
  }
}
