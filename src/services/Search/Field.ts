import { Logger } from "@/utils/Logger.js";

import ComparationImpl, {
	ComparationMethods,
	NumericMethods,
	StringMethods,
} from "./Comparation.js";

export interface Field<TItemsMap, TItemType extends keyof TItemsMap> {
	setField<TField extends keyof TItemsMap[TItemType]>(
		field: TField,
	): ComparationMethods<TItemsMap[TItemType][TField]>;
}

export default class FieldImpl<TItemsMap, TItemType extends keyof TItemsMap>
	implements Field<TItemsMap, TItemType>
{
	private readonly logger = new Logger("FieldImpl");

	constructor(private readonly _itemType: TItemType) {
		this._itemType = _itemType;
	}

	setField<TField extends keyof TItemsMap[TItemType]>(
		field: TField,
	): ComparationMethods<TItemsMap[TItemType][TField]> {
		return new ComparationImpl<
			TItemsMap,
			TItemType,
			TField,
			TItemsMap[TItemType][TField]
		>(this._itemType, field).method;
	}
}
