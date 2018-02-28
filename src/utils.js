// @flow
/** utils
 * project: react-mis-configurator-component
 * author: Chris Sprance - csprance
 * description:
 */
import type { FactionGameRules } from './constants';
import { factionGameRulesDefault } from './constants';

export const normalizeGameRules = (
	factionGameRules: FactionGameRules = factionGameRulesDefault
): Object => {
	const formattedFactionNames = Object.keys(factionGameRules).reduce(
		(acc, val) => [].concat(acc, `g_gameRules_${val}`),
		[]
	);

	const flattenedDamage = (dmg, factionName) => ({
		[`${factionName}_dmg_f0`]: dmg.f0.toString(),
		[`${factionName}_dmg_f1`]: dmg.f1.toString(),
		[`${factionName}_dmg_f2`]: dmg.f2.toString(),
		[`${factionName}_dmg_f3`]: dmg.f3.toString(),
		[`${factionName}_dmg_f4`]: dmg.f4.toString(),
		[`${factionName}_dmg_f5`]: dmg.f5.toString(),
		[`${factionName}_dmg_f6`]: dmg.f6.toString(),
	});

	return Object.keys(factionGameRules).reduce((acc, val, i) => {
		const factionName = formattedFactionNames[i]; // the current faction name in the loop
		const faction = factionGameRules[val]; // the faction data to flatten
		return {
			...acc,
			[`${factionName}`]: faction.enabled ? '1' : '0',
			[`${factionName}_name`]: faction.name,
			[`${factionName}_steamids`]: faction.steamids,
			...flattenedDamage(faction.dmg, factionName),
		};
	}, {});
};
