import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { task } from '../model';

@Component({
  selector: 'app-taskadd',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  title: string;
  number: number;
  @Output() itemAdded = new EventEmitter<task>();

  constructor() { }

  ngOnInit() {
  }

  setitem() {
    this.itemAdded.emit({
      title: this.title,
      number: this.number,
    });

  }

}