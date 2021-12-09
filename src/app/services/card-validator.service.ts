import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { creditTarget } from '../models/Validation-card';

@Injectable({
  providedIn: 'root'
})
export class CardValidatorService {

  constructor(private firebase: AngularFirestore) { }

  saveTarget(target: creditTarget): Promise<any> {
    return this.firebase.collection('cardTarget').add(target);
  }
}
