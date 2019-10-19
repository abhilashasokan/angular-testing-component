import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() {}

  getUser() {
    return [
      { id: 1, name: 'Abhilash', email: 'abhilash@icloud.com' },
      { id: 2, name: 'Aparna', email: 'aparna@icloud.com' },
      { id: 3, name: 'Gourinanda', email: 'gourinanda@icloud.com' }
    ];
  }
}
