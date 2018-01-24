import { Component } from '@angular/core';
import {MainService} from './main.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text:string="";

  constructor(private _mainService:MainService){
  }
  
  onSubmit(){
    console.log(this.text);
    console.log("form was submitted");
    this._mainService.addNote(this.text);
    this.text="";
  }
  

}
