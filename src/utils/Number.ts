import { Range } from "@/models/Params.js";

export class NumberUtils {
	public static getMaxFromRange(range: Range): number {
		return Math.max(range[0], range[1]);
	}

	public static getMaxFromRangeAsString(range: Range): string {
		return this.getMaxFromRange(range).toString();
	}

	public static getMinFromRange(range: Range): number {
		return Math.min(range[0], range[1]);
	}

	public static getMinFromRangeAsString(range: Range): string {
		return this.getMinFromRange(range).toString();
	}
}
