import { GenresApi, ShowsApi, CountriesApi, ChangesApi } from "./apis";
import {Configuration} from "./runtime";

export class Client {
	public showsApi: ShowsApi;
	public genresApi: GenresApi;
	public countriesApi: CountriesApi;
	public changesApi: ChangesApi;

	constructor(configuration: Configuration) {
		this.showsApi = new ShowsApi(configuration);
		this.genresApi = new GenresApi(configuration);
		this.countriesApi = new CountriesApi(configuration);
		this.changesApi = new ChangesApi(configuration);
	}
}
