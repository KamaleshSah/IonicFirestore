import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private onlineStatus: BehaviorSubject<boolean> = new BehaviorSubject(navigator.onLine);

  constructor() {
    window.addEventListener('online', () => this.updateOnlineStatus());
    window.addEventListener('offline', () => this.updateOnlineStatus());
  }

  get isOnline() {
    return this.onlineStatus.asObservable();
  }

  private updateOnlineStatus() {
    this.onlineStatus.next(navigator.onLine);
  }
}
