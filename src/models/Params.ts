/* eslint-disable @typescript-eslint/no-empty-object-type */

import { AxiosResponse } from "axios";

export interface GetAllItemsParams<GLPIResponse = unknown> extends Params {
	is_deleted?: boolean;
	only_id?: boolean;
	order?: Order;
	range?: Range;
	searchText?: SearchText<GLPIResponse>;
	sort?: number;
	with_networkports?: boolean;
}

export interface GetAnItemParams extends Params {
	get_sha1?: boolean;
}

export type GetAnItemResponse<
	T extends GetAllItemsParams,
	BaseResponse,
> = BaseResponse &
	(T["expand_dropdowns"] extends true ? WithExpandDropdowns : {}) &
	(T["get_hateoas"] extends true ? WithHateoas : {});

export type GetResponse<R> = R & { http: Omit<AxiosResponse<R>, "data"> };

export interface GetSubItems extends Params {
	only_id?: boolean;
	order?: Order;
	range?: Range;
	sort?: number;
}

export interface MappedGetAllItemsParams
	extends Omit<GetAllItemsParams, "range" | "searchText"> {
	range?: string;
	searchText?: string;
}

export type Order = "ASC" | "DESC";

export interface Params {
	add_keys_names?: string[];
	expand_dropdowns?: boolean;
	get_hateoas?: boolean;
	get_http?: boolean;
}

export type Range = [number, number];

export type SearchText<GLPIResponse> = Partial<
	Record<keyof GLPIResponse, number | string>
>;

export interface WithExpandDropdowns {
	expand_dropdowns: boolean;
}
export interface WithGetSha1 {}
export interface WithHateoas {
	links: { href: string; rel: string }[];
}
