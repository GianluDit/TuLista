import { Component, OnInit, Input } from '@angular/core';
import { task } from '../model';
import { LocalService } from '../local.service'

@Component({
  selector: 'app-tasklist',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input('task') task:task;
  tasks: task[];

  ngOnInit() {
    console.log(localStorage)
    this.tasks = this.local.get();
    }

  constructor(public local: LocalService) { 
    
  }

  removeitem(task: task) {
    this.local.remove(task)
    console.log(Error);
}

  setitem(task: task) {
    this.local.set(task)
    console.log(Error);
  }

}
