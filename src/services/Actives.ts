import { Cable } from "@/models/actives/Cable.js";
import { AxiosInstance } from "axios";

import GLPIRequest from "./Request.js";
import GLPISearch from "./Search/Search.js";

export type ActivesList =
	| "Cable"
	| "CartridgeItem"
	| "Computer"
	| "ConsumableItem"
	| "Enclosure"
	| "Item_DeviceSimcard"
	| "Monitor"
	| "NetworkEquipment"
	| "PassiveDCEquipment"
	| "PDU"
	| "Peripheral"
	| "Phone"
	| "Printer"
	| "Rack"
	| "Software"
	| "Unmanaged";

export interface ActivesMap {
	Cable: Cable;
	Computer: {};
}

export default class Actives {
	public get cable() {
		return new GLPIRequest<Cable>("Cable", this.fetch);
	}

	public get search() {
		return new GLPISearch<ActivesMap>();
	}

	constructor(
		private readonly fetch: AxiosInstance,
		readonly session_token: string,
	) {
		this.interceptRequest(session_token);
	}

	private interceptRequest(session_token: string) {
		this.fetch.interceptors.request.use((config) => {
			if (session_token) {
				config.headers.set("Session-Token", session_token);
			}
			return config;
		});
	}
}
