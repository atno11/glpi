import {
	GetAllItemsParams,
	GetAnItemParams,
	GetResponse,
	WithExpandDropdowns,
	WithGetSha1,
	WithHateoas,
} from "@/models/Params.js";
import { AxiosInstance, AxiosResponse } from "axios";
import { ClientRequest } from "http";
import qs from "qs";

class GLPIRequest<GLPIResponse> {
	constructor(
		private readonly api_url: string,
		private readonly fetch: AxiosInstance,
	) {}

	// public async getAll(params?: GetAllItemsParams) {
	//     return this.fetch<Response[]>(this.api_url, { params }).then((response) => this.response(response));
	// }

	async getAll<
		P extends GetAllItemsParams<GLPIResponse> = GetAllItemsParams<GLPIResponse>,
		R = P["only_id"] extends true
			? { id: number }
			: GLPIResponse &
					(P["expand_dropdowns"] extends true ? WithExpandDropdowns : object) &
					(P["get_hateoas"] extends true ? WithHateoas : object) &
					(P["get_http"] extends true
						? { http: Omit<AxiosResponse, "data"> }
						: object),
	>(params?: P) {
		return this.fetch<R[]>(this.api_url, {
			params: {
				searchText: { states_id: [5, 6] },
			},
			paramsSerializer: {
				serialize: (params) => {
					return qs.stringify(params, { arrayFormat: "repeat" });
				},
			},
		}).then((response) => {
			const { data, ...http } = response;
			console.log((http.request as ClientRequest).path);
			if (params?.get_http) {
				return data.map((d) => ({ http, ...d })) as R[];
			}
			return { ...data } as R[];
		});
	}

	async getByID<
		P extends GetAnItemParams = GetAnItemParams,
		R = GLPIResponse &
			(P["expand_dropdowns"] extends true ? WithExpandDropdowns : object) &
			(P["get_hateoas"] extends true ? WithHateoas : object) &
			(P["get_http"] extends true
				? { http: Omit<AxiosResponse, "data"> }
				: object) &
			(P["get_sha1"] extends true ? WithGetSha1 : object),
	>(id: number | string, params?: P): Promise<R> {
		return this.fetch<R>(`${this.api_url}/${id.toString()}`, { params }).then(
			(response) => {
				const { data, ...http } = response;
				if (params?.get_http) {
					return { http, ...data } as R;
				}
				return { ...data };
			},
		);
	}

	async getSearchOptions() {
		return this.fetch(`listSearchOptions/${this.api_url}`).then((response) => {
			console.log(response.data);
		});
	}

	// public async getByID<P extends GetAnItemParams = GetAnItemParams>(id: number | string, params?: P): Promise<GetAnItemResponse<P, Response>> {
	//     return this.fetch<Response>(this.api_url, { params }).then((response) => this.response(response));
	// }

	private response<R = Response>(
		axiosResponse: AxiosResponse<R>,
	): GetResponse<R> {
		const { data, ...http } = axiosResponse;
		return { ...data, http };
	}
}

export default GLPIRequest;
