import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Indexes, Json, Fiats, Commodities, Cryptocoins} from './types';

const BITPANDA_RESOURCE_URL = 'http://api.bitpanda.com/v1/masterdata';


@Injectable({
  providedIn: 'root'
})
export class BitpandaService {

  list: [];

  constructor(private httpClient: HttpClient) {
  }

  create(json: Json): Promise<any> {
    return this.httpClient.post(BITPANDA_RESOURCE_URL, json).toPromise();
  }

  update(indexes: Indexes): Promise<any> {
    return this.httpClient.put(BITPANDA_RESOURCE_URL +  '/' + indexes.id, indexes).toPromise();
  }

  retrieve(id: number): Promise<Json> {

    return this.httpClient.get<Json>(BITPANDA_RESOURCE_URL + '/' + id).toPromise();
  }

  delete(id: number): Promise<any>{
    return this.httpClient.delete(BITPANDA_RESOURCE_URL + '/' + id).toPromise();
  }

  retrieveAll(): Promise<Json> {
    return this.httpClient.get<Json>(BITPANDA_RESOURCE_URL).toPromise();
  }
}


