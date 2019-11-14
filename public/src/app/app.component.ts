import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './services/http-service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rate My Cake';
  cakes: any;
  shownCake: any;
  newCake: any;
  review: any;
  addedRating: number;
  addedComment: string;

  showCake = false;
  reviewCake = false;


  constructor(private _httpService: HttpService){
  this.showCake = false;
  this.newCake = {baker: "", description: "", vegan: false, glutenfree: false}
   
  }

	ngOnInit() { 
		this.getAllCakesFromService()
	}

	reviewCakeSwitch(){
		this.reviewCake = !this.reviewCake
	}

	getAllCakesFromService(){
		let observable = this._httpService.getAllCakes();
		observable.subscribe(data => {
			console.log(data);
			this.cakes = data;
		});
	}

	onSubmit(){
		let observable = this._httpService.createCake(this.newCake);
		observable.subscribe(data => {
			console.log("creating:" + data );
			this.newCake = { baker: "", description: "", }
			this.getAllCakesFromService();
		});
	}

	onEdit(){
		this.getAllCakesFromService();
		this.showCake = false;
		this.addedRating = null;
		this.addedComment ="";
		this.reviewCake = false;
		this.showCake = true;
	}

	onDelete(cake){
		let observable = this._httpService.deleteCake(cake);
		observable.subscribe(data => {
			console.log("deleting" + data)
		});
	}

	showACake(cake){
		if(cake == this.shownCake){
			this.showCake = false;
			this.shownCake = "";
			this.reviewCake = false;
		}
		else{
		this.shownCake = cake;
		this.showCake = true;
		this.reviewCake = false;
		};

	}
}

