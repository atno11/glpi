export interface Comparation<
	TItemsMap,
	TItemType extends keyof TItemsMap,
	TField extends keyof TItemsMap[TItemType],
	TValue extends TItemsMap[TItemType][TField],
> {
	biggerThen(value: TValue): void;
	contains(value: TValue): void;
	// equals(value: TValue): void
	// lessThen(value: TValue): void
	// notContains(value: TValue): void
	// notEquals(value: TValue): void;
}

export type ComparationMethods<T> = T extends number
	? NumericMethods
	: T extends string
		? StringMethods
		: never;

export interface NumericMethods {
	between(min: number, max: number): void;
	biggerThen(value: number): void;
	// equals(value: number): void;
	// lessThen(value: number): void;
	// notEquals(value: number): void;
}

export interface StringMethods {
	contains(value: string[]): void;
	notContains(value: string): void;
}

class NumericMethodsImpl implements NumericMethods {
	between(min: number, max: number): void {}
	biggerThen(value: number): void {}
}

class StringMethodsImpl implements StringMethods {
	contains(value: string[]): void {}

	notContains(value: string): void {}
}

export default class ComparationImpl<
	TItemsMap,
	TItemType extends keyof TItemsMap,
	TField extends keyof TItemsMap[TItemType],
	TValue extends TItemsMap[TItemType][TField],
> {
	public get method(): ComparationMethods<TValue> {
		return {
			...new StringMethodsImpl(),
			...new NumericMethodsImpl(),
		} as ComparationMethods<TValue>;
	}

	constructor(
		private readonly _itemType: TItemType,
		private readonly _field: TField,
	) {
		this._itemType = _itemType;
		this._field = _field;
	}
}
