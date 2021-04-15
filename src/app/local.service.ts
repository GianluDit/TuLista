import { Injectable } from '@angular/core';
import { task } from './model';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  tasks: task[];

  constructor() {
    this.tasks = [];
   }

  set(task: task):void {
    this.tasks.concat(task);
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      window.location.reload()
    }
    else {
      tasks = JSON.parse(localStorage.getItem('tasks') || '{}');
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      window.location.reload()
    }
    // try {
    //   localStorage.setItem(key, data)
    // } catch (error) {
    //   console.log(error)
    // }
  }

  get(): task[]  {
    if(localStorage.getItem('tasks') === null) {
      this.tasks = [];
    }
      else {
        this.tasks = JSON.parse(localStorage.getItem("tasks")|| '[]')
      }
      return this.tasks
    // try {
    //   return JSON.parse(localStorage.getItem(key))
    // } catch (error) {
    //   console.log(error)
    // } 
  }

  remove(task: task) {
    for(let i = 0;
        i < this.tasks.length;
        i++) {
      if(task == this.tasks[i]) {
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
      window.location.reload();
    }
  }


  allStorage() {
    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

    while ( i-- ) {
    values.push( localStorage.getItem(keys[i]) );
}

return values;

    // var values = {},
    //       keys = Object.keys(localStorage),
    //     i = keys.length;
    // while (i--) {
    //   values[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
    // }
    // return values;
  }
}