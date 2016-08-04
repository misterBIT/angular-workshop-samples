import {Injectable} from '@angular/core';
import {URLSearchParams, Jsonp} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class WikipediaService {
	constructor(private jsonp:Jsonp) {

	}


	search(term:string) {
		console.log('Looking!!!');
		var search = new URLSearchParams()
		search.set('action', 'opensearch');
		search.set('search', term);
		search.set('format', 'json');
		return this.jsonp
			.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
			.toPromise()
			.then((request) => request.json()[1]);
	}
}
