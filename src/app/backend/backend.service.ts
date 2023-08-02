import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs"
import {map} from "rxjs/operators"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  ruta: string = environment.rutaApi

  constructor(public http: HttpClient) { }

  organizaciones():Observable<any>{
    return this.http.get(`${this.ruta}/organizaciones`)
  }

  canales():Observable<any>{
    return this.http.get(`${this.ruta}/canales`)
  }

  centros(org: any):Observable<any>{
    return this.http.post(`${this.ruta}/centros/marca`, {org})
  }

  generos():Observable<any>{
    return this.http.get(`${this.ruta}/generos`)
  }

  jerarquias_axo():Observable<any>{
    return this.http.get(`${this.ruta}/jerarquias/axo`)
  }

  categoria_demanda():Observable<any>{
    return this.http.get(`${this.ruta}/catdemanda`)
  }


  login(usuario: any, pass: any): Observable<any>{
    return this.http.post(`${this.ruta}/login`, {usuario, pass})
  }

  usuario_organizaciones(org: any): Observable<any>{
    return this.http.post(`${this.ruta}/usuario/marcas`, {org})
  }

  jerarquias_aptos():Observable<any>{
    return this.http.get(`${this.ruta}/jerarquias/aptos`)
  }

  jerarquia_aptos_cambios(jerarquia: any):Observable<any>{
    return this.http.post(`${this.ruta}/jerarquias/aptos/cambios`, jerarquia)
  }




  alta_organizacion(marca: any):Observable<any>{
    return this.http.post(`${this.ruta}/organizaciones/alta`, marca)
  }

}
