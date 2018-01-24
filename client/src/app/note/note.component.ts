import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes: Array<object> = [];


  constructor(private _mainService: MainService) {
    this._mainService.data.subscribe(
      (data) => { this.notes = data }
    )
  }

  ngOnInit() {
    this._mainService.showAll()
  }

}
