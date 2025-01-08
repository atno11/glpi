import ConsoleUtils from "./Console.js";

const { fgColors, txtStyles } = ConsoleUtils;

export class Logger {
	constructor(private readonly name: string) {}

	public info(message: string) {
		const _info = `${txtStyles.bold}${fgColors.blue}[INFO]`;
		const _name = `${txtStyles.bold}${fgColors.magenta}[${this.name}]`;
		const _message = `${fgColors.reset}${txtStyles.reset}${txtStyles.italic}${fgColors.cyan}${message}${fgColors.reset}${txtStyles.reset}`;
		console.log(`${_info}${_name}: ${_message}`);
	}
}
