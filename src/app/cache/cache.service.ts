import { Injectable } from '@angular/core';
import * as localForage from "localforage";
import { add } from 'date-fns';

interface CacheEntry<T> {
  val: T,
  expires: Date // stringified DateTime
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  constructor() { }

  get<T>(key: string): Promise<T | null> {
    const now = new Date();
    return localForage.getItem<CacheEntry<T>>(key).then(v => {
      if (v === null) {
        return null;
      }
      v.expires = new Date(v.expires);
      // not expired: return the value
      if (now < v.expires) {
        return v.val;
      }
      // Expired: return null
      return localForage.removeItem(key).then(() => null);
    });
  }

  set<T>(key: string, val: T, expires: Date = null) {
    if (!expires) {
      const now = new Date();
      expires = add(now, { minutes: 15 })
    }
    return localForage.setItem<CacheEntry<T>>(key, { val, expires });
  }

  clear() {
    localForage.clear();
  }
}
