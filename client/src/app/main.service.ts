import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {BehaviorSubject} from 'Rxjs';


@Injectable()
export class MainService {
  notes=[]
  data = new BehaviorSubject(this.notes);

  constructor(private _http:Http) { }

  addNote(note){
    console.log(note);
    this._http.post('/process',{note:note}).subscribe((res)=>{
      this.notes = res.json();
      this.data.next(this.notes);
    });
  }
  showAll(){
    this._http.get('/showall').subscribe((res)=>{
      this.notes = res.json();
      this.data.next(this.notes);
    })
  }

}
