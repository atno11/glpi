/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	GetAllItemsParams,
	MappedGetAllItemsParams,
	Range,
} from "@/models/Params.js";

import { NumberUtils } from "./Number.js";

export class ParamsUtils {
	public static getAllItems(params: GetAllItemsParams) {
		const { get_http, ...p } = params;
		return {
			range: this.mapRange(params.range),
			searchText: this.mapSearchText(params.searchText),
			...p,
		} as MappedGetAllItemsParams;
	}

	public static mapSearchText(searchText: unknown): string {
		return "";
	}

	private static mapRange(range?: Range): string {
		return range
			? `${NumberUtils.getMinFromRangeAsString(range)}-${NumberUtils.getMaxFromRangeAsString(range)}`
			: `0-99`;
	}
}
