export interface Cable {
	cablestrands_id: number;
	cabletypes_id: number;
	color: string;
	comment: string;
	date_creation: string;
	date_mod: string;
	entities_id: number;
	id: number;
	is_deleted: number;
	is_recursive: number;
	items_id_endpoint_a: number;
	items_id_endpoint_b: number;
	itemtype_endpoint_a: string;
	itemtype_endpoint_b: string;
	name: string;
	otherserial: string;
	socketmodels_id_endpoint_a: number;
	socketmodels_id_endpoint_b: number;
	sockets_id_endpoint_a: number;
	sockets_id_endpoint_b: number;
	states_id: number;
	users_id_tech: number;
}
