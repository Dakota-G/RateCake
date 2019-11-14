import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../services/http-service/http.service';

@Component({
  selector: 'app-reviewcomponent',
  templateUrl: './reviewcomponent.component.html',
  styleUrls: ['./reviewcomponent.component.css']
})
export class ReviewcomponentComponent implements OnInit {
@Input() shownCake: any;
@Output() myEvent = new EventEmitter();
  addedRating: number;
  addedComment: string;
  review: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {  }


onComment(cake){
	console.log("onComment working!")
	this.review = { "rating": this.addedRating, "comments": this.addedComment }
	let observable = this._httpService.commentOnCake(cake, this.review);
	observable.subscribe(data => {
		this.myEvent.emit();
	});
}

  	
  }


