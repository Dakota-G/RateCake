import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-displaycomponent',
  templateUrl: './displaycomponent.component.html',
  styleUrls: ['./displaycomponent.component.css']
})
export class DisplaycomponentComponent implements OnInit {
@Input() shownCake: any;
@Output() myEvent = new EventEmitter();

  constructor() { }

  callParent(){
  	this.myEvent.emit();
  }

  ngOnInit() {
  }

}
