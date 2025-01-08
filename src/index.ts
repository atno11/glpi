import { ClientRequest } from "http";

import { GLPIClient } from "./api/Client.js";
import env from "./env.js";
import SearchImpl from "./services/Search/Search.js";

const search = new SearchImpl<FakeMap>();
search.setItemType("Cable").setField("cable_id");

interface FakeMap {
	Cable: { cable_id: number; name: string };
	Computer: { computer_id: number; name: string };
}
