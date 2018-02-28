// @flow
/** hostingDefaults
 * project: react-mis-configurator-component
 * author: Chris Sprance - csprance
 * description:
 */

export type FactionGameRules = {
	faction0: Faction, // survivors
	faction1: Faction, // environment
	faction2: Faction, // bases
	faction3: Faction, // lawmen
	faction4: Faction, // outlaws
	faction5: Faction, // military
	faction6: Faction, // corporate
};

export type DmgMatrix = {
	f0: number, // Players without factions
	f1: number, // Environment (Mutants, Animals, etc)
	f2: number, // Bases
	f3: number, // Custom Faction
	f4: number, // Custom Faction
	f5: number, // Custom Faction
	f6: number, // Custom Faction
};

export type Faction = {
	name: string, // Name of the faction
	enabled: boolean, // Is this faction enabled
	dmg: DmgMatrix, // Damage towards all other factions
	steamids: string, // a ; separated list of steamids
};

export const dmgMatrix: DmgMatrix = {
	f0: 1.0,
	f1: 1.0,
	f2: 1.0,
	f3: 1.0,
	f4: 1.0,
	f5: 1.0,
	f6: 1.0,
};

export const faction: Faction = {
	name: 'survivors',
	enabled: false,
	dmg: dmgMatrix,
	steamids: '',
};

export const factionGameRulesDefault: FactionGameRules = {
	faction0: {
		...faction,
		name: 'survivors',
		enabled: true,
	},
	faction1: {
		...faction,
		name: 'environment',
		enabled: true,
	},
	faction2: {
		...faction,
		name: 'bases',
		enabled: true,
	},
	faction3: {
		...faction,
		name: 'lawmen',
	},
	faction4: {
		...faction,
		name: 'outlaws',
	},
	faction5: {
		...faction,
		name: 'military',
	},
	faction6: {
		...faction,
		name: 'corporate',
	},
};

export const factionGameRulesLawmenOutlawFactionTemplate: FactionGameRules = {
	...factionGameRulesDefault,
	faction0: {
		...faction,
		dmg: {
			...dmgMatrix,
			f3: 0.0, // survivors cannot damage lawmen
			f2: 0.0, // survivors cannot damage bases
		},
	},
	faction3: {
		...faction,
		name: 'lawmen',
		enabled: true,
		dmg: {
			...dmgMatrix,
			f0: 0.0, // lawmen cannot damage survivors
			f2: 0.0, // lawmen cannot damage bases
		},
	},
	faction4: {
		...faction,
		name: 'outlaws',
		enabled: true,
	},
};

export const weatherPatterns: Array<[string, string]> = [
	['1', 'Clear Sky'],
	['2', 'Light Rain'],
	['3', 'Heavy Rain Thunder'],
	['4', 'Heavy Storm'],
	['5', 'Tornado Storm'],
	['6', 'Tornado Storm Tornado'],
	['7', 'Tornado Rain Thunder'],
	['8', 'Tornado Rain Thunder Tornado'],
	['9', 'Light Fog'],
	['10', 'Medium Fog'],
	['11', 'Heavy Fog'],
	['12', 'The Mist'],
	['13', 'Rainbow'],
	['14', 'Rainbow Half'],
	['15', 'RadStorm'],
	['16', 'RadStorm Peak'],
	['17', 'RadStorm Outro'],
	['18', 'Nuclear Flash Freeze'],
	['19', 'Nuclear Flash Freeze Peak'],
	['20', 'Nuclear Flash Freeze Outro'],
	['21', 'Snow'],
];

export const serverDefaults = {
	sv_servername: 'Miscreated Gaming Server',
	sv_motd: 'Welcome to my server',
	sv_url: 'Visit us on the web at https://discord.gg/miscreated',
	sv_noBannedAccounts: 'YES',
	sv_maxuptime: '',
	http_password: 'coolp@s$w0r|)',
	wm_timeScale: '3',
	wm_timeOffset: '0',
	wm_forceTime: '-1',
	g_pingLimit: '0',
	g_pingLimitTimer: '15.0',
	g_idleKickTime: '300',
	g_gameRules_Camera: '0',
	schedule_shutdown_utc: ['5.5', '17.0'],
	wm_timeScaleWeather: '', // TODO Get default value
	g_gameRules_bases: '',
	sv_msg_conn: '0',
	sv_msg_death: '0',
	wm_pattern: '-1',
};
