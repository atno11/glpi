import { GLPIActiveProfiles } from "@/models/ActiveProfiles.js";
import { Entity } from "@/models/Entity.js";
import { Plannings } from "@/models/Plannings.js";
import { Actives, Administration, Assistance } from "@/services/index.js";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface BasicSession extends SessionData {
	response: AxiosResponse;
	session_token: string;
}

export interface FullSession extends SessionData {
	response: AxiosResponse;
	session: GLPISession;
	session_token: string;
}

export interface GLPIProfiles {
	entities: Entity[];
	name: string;
}

export interface GLPISession {
	glpi_currenttime: string;
	glpi_dropdowntranslations: unknown[];
	glpi_plannings: unknown;
	glpi_tabs: unknown[];
	glpi_use_mode: number;
	glpiactive_entity: number;
	glpiactive_entity_name: string;
	glpiactive_entity_recursive: number;
	glpiactive_entity_shortname: string;
	glpiactiveentities: number[];
	glpiactiveentities_string: string;
	glpiactiveprofile: GLPIActiveProfiles;
	glpiaparententities: unknown[];
	glpiaparententities_string: string;
	glpiauthtype: number;
	glpibackcreated: string;
	glpicrontimer: number;
	glpicsv_delimiter: string;
	glpidate_format: string;
	glpidefault_central_tab: number;
	glpidefault_dashboard_assets: string;
	glpidefault_dashboard_central: string;
	glpidefault_dashboard_helpdesk: string;
	glpidefault_dashboard_mini_ticket: string;
	glpidefault_entity: number;
	glpidefault_requesttypes_id: string;
	glpidisplay_count_on_home: string;
	glpiduedatecritical_color: string;
	glpiduedatecritical_less: string;
	glpiduedatecritical_unit: string;
	glpiduedateok_color: string;
	glpiduedatewarning_color: string;
	glpiduedatewarning_less: string;
	glpiduedatewarning_unit: string;
	glpiextauth: number;
	glpifirstname: string;
	glpifold_menu: string;
	glpifold_search: string;
	glpifollowup_private: string;
	glpifriendlyname: string;
	glpigroups: number[];
	glpihighcontrast_css: string;
	glpiID: number;
	glpiis_ids_visible: string;
	glpiitil_layout: string;
	glpikeep_devices_when_purging_item: string;
	glpilanguage: string;
	glpilist_limit: number;
	glpilock_autolock_mode: string;
	glpilock_directunlock_notification: string;
	glpiname: string;
	glpinames_format: string;
	glpinotification_to_myself: string;
	glpinumber_format: number;
	glpipage_layout: string;
	glpipalette: string;
	glpipdffont: string;
	glpipluralnumber: number;
	glpipriority_1: string;
	glpipriority_2: string;
	glpipriority_3: string;
	glpipriority_4: string;
	glpipriority_5: string;
	glpipriority_6: string;
	glpiprofiles: Record<number, GLPIProfiles>;
	glpirealname: string;
	glpirefresh_views: number;
	glpirichtext_layout: string;
	glpiroot: string;
	glpisavedsearches_pinned: string;
	glpisearch: unknown[];
	glpiset_default_requester: string;
	glpiset_default_tech: string;
	glpishow_count_on_tabs: string;
	glpishow_jobs_at_login: number;
	glpishowallentities: number;
	glpitask_private: string;
	glpitask_state: string;
	glpitimeline_action_btn_layout: string;
	glpitimeline_date_format: string;
	glpitimeline_order: string;
	glpiuse_flat_dropdowntree: string;
	glpiuse_flat_dropdowntree_on_search_result: string;
	noAUTO: number;
	valid_id: string;
}

export interface InitSession {
	axios?: AxiosRequestConfig;
}

export interface PlanningsFilters {
	ChangeTask: Plannings;
	NotPlanned: Plannings;
	OnlyBgEvents: Plannings;
	PlanningExternalEvent: Plannings;
	PluginManageentitiesCriDetail: Plannings;
	PluginResourceTaskPlanning: Plannings;
	ProblemTask: Plannings;
	ProjectTask: Plannings;
	Reminder: Plannings;
	TicketTask: Plannings;
}

export interface SessionData {
	actives: Actives;
	administration: Administration;
	assistance: Assistance;
}

export type TokenSession = InitSession & {
	user_token: string;
};
export type UsernamePasswordSession = InitSession & {
	password: string;
	username: string;
};
