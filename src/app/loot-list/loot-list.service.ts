import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LootListService {
  private apiKey = 'AIzaSyD9tbX_qHQKkv_0s90RNX9Db-eWFF3Tw5E';
  private clientId = '746307832384-dc75e29kqi6ih8i8icqhp7nrgrj22tml.apps.googleusercontent.com';
  private sheetId = '1XqGuDcdtkaRDTblPt8QLT2i-F1-HfNuROAIwfybQAFg';
  private endPoint = ''

  constructor() { }
}
