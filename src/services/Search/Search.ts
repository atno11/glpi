import { Logger } from "@/utils/Logger.js";

import FieldImpl, { Field } from "./Field.js";

//TODO: Delete Interface

interface ItemsMap {
	Cable: { cable_id: number; name: string };
	Computer: { computer_id: number; name: string };
}

interface Search<TItemsMap> {
	setItemType<TItemType extends keyof TItemsMap>(
		itemType: TItemType,
	): Field<TItemsMap, TItemType>;
}

export default class SearchImpl<TItemsMap> implements Search<TItemsMap> {
	private readonly logger = new Logger("SearchImpl");

	setItemType<TItemType extends keyof TItemsMap>(
		itemType: TItemType,
	): Field<TItemsMap, TItemType> {
		this.logger.info("item type setted succefully: ".concat(String(itemType))); // Todo: Delete
		return new FieldImpl<TItemsMap, TItemType>(itemType);
	}
}
