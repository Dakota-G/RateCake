import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

	getAllCakes(){
		return this._http.get('/cakes');
	}
	getOneCake(cake){
		return this._http.get(`cakes/${cake._id}`);
	}
	createCake(newCake){
		return this._http.post('/cakes', newCake);
	}
	commentOnCake(cake, review){
		console.log("commentOnCake working!");
		return this._http.put(`/cakes/${cake._id}`, review);
	}
	deleteCake(cake){
		return this._http.delete(`/cakes/${cake._id}`)
	}

}
