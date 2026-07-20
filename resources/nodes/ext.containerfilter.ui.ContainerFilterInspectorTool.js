ve.ui.MWContainerFilterInspectorTool = function VeUiMWContainerFilterInspectorTool( toolGroup, config ) { // eslint-disable-line max-len
	ve.ui.MWContainerFilterInspectorTool.super.call( this, toolGroup, config );
};

OO.inheritClass( ve.ui.MWContainerFilterInspectorTool, ve.ui.FragmentInspectorTool );

ve.ui.MWContainerFilterInspectorTool.static.name = 'containerFilterTool';
ve.ui.MWContainerFilterInspectorTool.static.group = 'none';
ve.ui.MWContainerFilterInspectorTool.static.autoAddToCatchall = false;
ve.ui.MWContainerFilterInspectorTool.static.icon = 'funnel';
ve.ui.MWContainerFilterInspectorTool.static.title = OO.ui.deferMsg(
	'containerfilter-inspector-title'
);
ve.ui.MWContainerFilterInspectorTool.static.modelClasses =
	[ ve.dm.MWContainerFilterNode ];
ve.ui.MWContainerFilterInspectorTool.static.commandName = 'containerFilterCommand';

ve.ui.toolFactory.register( ve.ui.MWContainerFilterInspectorTool );

ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'containerFilterCommand', 'window', 'open',
		{ args: [ 'containerFilterInspector' ], supportedSelections: [ 'linear' ] }
	)
);
