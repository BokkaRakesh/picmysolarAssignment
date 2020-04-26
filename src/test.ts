import { Component, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, scan, mergeMap, throttleTime } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material';
import { Customer } from './customer';
import { DatePipe} from '@angular/common';

@Component({
  selector: 'app-transaction-sample',
  templateUrl: './transaction-sample.component.html',
  styleUrls: ['./transaction-sample.component.scss']
})
export class TransactionSampleComponent{
/************************ Fields ***********************/
@ViewChild(CdkVirtualScrollViewport)
viewport: CdkVirtualScrollViewport;
batch = 5;
theEnd = false;
total = 0;
end = 0;

offset : BehaviorSubject<{}>;
infinite: Observable<any[]>;
type : string = 'OPENED';
from_date = '';
to_date = '';
constructor(private db: AngularFirestore,private _dt:DatePipe) {
  this.getFirst({type:this.type});
}

getFirst(obj){
  this.offset = new BehaviorSubject(obj);
  const batchMap = this.offset.pipe(
    throttleTime(500),
    mergeMap(n => this.getBatch(n)),
    scan((acc, batch) => {
      return { ...acc, ...batch };
    }, {})
  );

  this.infinite = batchMap.pipe(map(v => Object.values(v)));
}
getBatch(offset) {
      return this.db
      .collection('customers', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          query = query.orderBy('id')
          query = query.where('type','==',offset.type)
          if(!!offset.firstName){ query = query.where('firstName','==',offset.firstName) }
          if(!!offset.id){
            query = query.startAfter(offset.id)
          }
          query = query.limit(this.batch)
          return query;
        }
      )
      .snapshotChanges()
      .pipe(
        tap(arr => (arr.length ? null : (this.theEnd = true))),
        map(arr => {
          return arr.reduce((acc, cur) => {
            const id = cur.payload.doc.id;
            const data = cur.payload.doc.data();
            return { ...acc, [id]: data };
          }, {});
        })
      );
}

nextBatch(e, offset) {
  if (this.theEnd) {
    return;
  }
  const end = this.viewport.getRenderedRange().end;
  const total = this.viewport.getDataLength();
  console.log(end,total);
  if (end === total) {
      this.offset.next({id:offset,type:this.type});
  }
}

trackByIdx(i) {
  return i;
}
  getByType($event:MatSelectChange){
      this.type = $event.value;
      this.theEnd = false;
      this.getFirst({type:this.type});
  }
  searchByName($event:KeyboardEvent){
      const firstName = (<HTMLInputElement>$event.target).value;
      this.getFirst({type:this.type,firstName : firstName});

  }
}

