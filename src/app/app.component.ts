import { Component } from '@angular/core';
import { task } from './model';
import { LocalService } from './local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public local: LocalService) { }

  title = 'tulistafinal';

  removetodo(){
    if (confirm("Borrar todo?")){  
      localStorage.clear();
      window.location.reload();}
  }
}
