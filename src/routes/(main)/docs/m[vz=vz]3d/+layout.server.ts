
export const load = async (event)=>{
	const { params, url } = event;
	const pluginName = `m${params.vz}3d`, PluginName = pluginName.toUpperCase();
	return {
		category: PluginName,
		pluginName, PluginName,
		premium: '?' as boolean|'?',
	};
}