import { Injectable } from '@angular/core';
import * as localForage from 'localforage';
import { add } from 'date-fns';
import { environment } from '../../environments/environment';

interface CacheEntry<T> {
  val: T;
  expires: Date; // stringified DateTime
}

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  constructor() {}

  get<T>(key: string): Promise<T | null> {
    const now = new Date();
    return localForage.getItem<CacheEntry<T>>(this.makeKey(key)).then((v) => {
      if (v === null) {
        return null;
      }
      v.expires = new Date(v.expires);
      // not expired: return the value
      if (now < v.expires) {
        return v.val;
      }
      // Expired: return null
      return localForage.removeItem(this.makeKey(key)).then(() => null);
    });
  }

  set<T>(key: string, val: T, expires: Date = null) {
    if (!expires) {
      const now = new Date();
      expires = add(now, { minutes: 15 });
    }
    return localForage.setItem<CacheEntry<T>>(this.makeKey(key), {
      val,
      expires,
    });
  }

  has(key: string) {
    return localForage.keys().then((keys) => keys.includes(this.makeKey(key)));
  }

  clear() {
    return localForage.clear();
  }
  /**
   * Suffix provided keys with cache busting setting
   */
  private makeKey(key) {
    return `${key}-${environment.cache_bust}`;
  }
}
