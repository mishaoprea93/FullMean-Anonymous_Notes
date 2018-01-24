import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoteComponent} from './note/note.component'
import {AppComponent} from './app.component'

const routes: Routes = [
  {path:'', component:NoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
