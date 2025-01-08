import {
	BasicSession,
	FullSession,
	GLPISession,
	SessionData,
	TokenSession,
	UsernamePasswordSession,
} from "@/models/Session.js";
import { Actives, Administration, Assistance } from "@/services/index.js";
import { AxiosResponse } from "axios";

import fetch from "./Fetch.js";

export class GLPIClient {
	private session?: GLPISession;
	private session_token?: string;

	constructor(baseURL?: string, appToken?: string) {
		this.interceptRequest(baseURL, appToken);
	}

	public getSession() {
		return this.session;
	}

	public getSessionToken() {
		return this.session_token;
	}

	public async initSession(
		config: UsernamePasswordSession & { get_full_session: true },
	): Promise<FullSession>;

	public async initSession(
		config: TokenSession & { get_full_session: true },
	): Promise<FullSession>;
	public async initSession(
		config: UsernamePasswordSession & { get_full_session?: false },
	): Promise<BasicSession>;
	public async initSession(
		config: TokenSession & { get_full_session?: false },
	): Promise<BasicSession>;
	public async initSession({
		get_full_session = false,
		...config
	}: (TokenSession | UsernamePasswordSession) & {
		get_full_session?: boolean;
	}): Promise<BasicSession | FullSession> {
		const Authorization =
			"user_token" in config
				? `user_token ${config.user_token}`
				: `Basic ${btoa(`${config.username}:${config.password}`)}`;
		const response = await fetch.request<BasicSession | FullSession>({
			headers: {
				Authorization,
			},
			method: "GET",
			params: { get_full_session },
			url: "initSession",
		});
		this.setSessionToken(response.data.session_token);
		const data = {
			actives: new Actives(fetch, response.data.session_token),
			administration: new Administration(),
			assistance: new Assistance(),
			response,
			session_token: response.data.session_token,
		};
		if (get_full_session) {
			this.setSession((response.data as FullSession).session);
			return {
				...data,
				session: (response.data as FullSession).session,
			};
		}
		return { ...(data as BasicSession) };
	}
	private interceptRequest(baseURL?: string, appToken?: string) {
		return fetch.interceptors.request.use((requestConfig) => {
			if (baseURL) {
				requestConfig.baseURL = baseURL;
			}
			if (appToken) {
				requestConfig.headers["App-Token"] = appToken;
			}
			return requestConfig;
		});
	}

	private setSession(session: GLPISession) {
		this.session = session;
	}

	private setSessionToken(session_token: string) {
		this.session_token = session_token;
	}
}
