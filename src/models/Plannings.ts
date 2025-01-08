import { PlanningsFilters } from "@/routes/initSession/types.js";

export interface GLPIPlanning {
	filters: PlanningsFilters;
	lastView: string;
	plannings: Record<`user_${number}`, Plannings>;
}

export interface Plannings {
	color: string;
	display: boolean;
	type: string;
}
