/* eslint-disable @typescript-eslint/no-extraneous-class */

type Colors =
	| "black"
	| "blue"
	| "brightWhite"
	| "cyan"
	| "gray"
	| "green"
	| "lightBlue"
	| "lightCyan"
	| "lightGreen"
	| "lightMagenta"
	| "lightRed"
	| "lightYellow"
	| "magenta"
	| "red"
	| "reset"
	| "white"
	| "yellow";

type TextStyles =
	| "blinkFast"
	| "blinkSlow"
	| "bold"
	| "dim"
	| "hidden"
	| "inverse"
	| "italic"
	| "reset"
	| "strikethrough"
	| "underline";

export default class ConsoleUtils {
	public static get bgColors(): Record<Colors, string> {
		return {
			black: "\x1b[40m",
			blue: "\x1b[44m",
			brightWhite: "\x1b[107m",
			cyan: "\x1b[46m",
			gray: "\x1b[100m",
			green: "\x1b[42m",
			lightBlue: "\x1b[104m",
			lightCyan: "\x1b[106m",
			lightGreen: "\x1b[102m",
			lightMagenta: "\x1b[105m",
			lightRed: "\x1b[101m",
			lightYellow: "\x1b[103m",
			magenta: "\x1b[45m",
			red: "\x1b[41m",
			reset: "\x1b[0m",
			white: "\x1b[47m",
			yellow: "\x1b[43m",
		};
	}

	public static get fgColors(): Record<Colors, string> {
		return {
			black: "\x1b[30m",
			blue: "\x1b[34m",
			brightWhite: "\x1b[97m",
			cyan: "\x1b[36m",
			gray: "\x1b[90m",
			green: "\x1b[32m",
			lightBlue: "\x1b[94m",
			lightCyan: "\x1b[96m",
			lightGreen: "\x1b[92m",
			lightMagenta: "\x1b[95m",
			lightRed: "\x1b[91m",
			lightYellow: "\x1b[93m",
			magenta: "\x1b[35m",
			red: "\x1b[31m",
			reset: "\x1b[0m",
			white: "\x1b[37m",
			yellow: "\x1b[33m",
		};
	}

	public static get txtStyles(): Record<TextStyles, string> {
		return {
			blinkFast: "\x1b[6m",
			blinkSlow: "\x1b[5m",
			bold: "\x1b[1m",
			dim: "\x1b[2m",
			hidden: "\x1b[8m",
			inverse: "\x1b[7m",
			italic: "\x1b[3m",
			reset: "\x1b[0m",
			strikethrough: "\x1b[9m",
			underline: "\x1b[4m",
		};
	}
}
