export const load = async (event)=>{
	const { params, url } = event;

	const pluginName = `m${params.vz}3d`, PluginName = pluginName.toUpperCase(), FullPluginName = `${PluginName}-Rewrite`, fullPluginName = FullPluginName.toLowerCase();

	return {
		category: FullPluginName,
		pluginName, PluginName, fullPluginName, FullPluginName,
		premium: '?' as boolean|'?',
	};
}