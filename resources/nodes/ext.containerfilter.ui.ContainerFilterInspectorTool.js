ext = ext || {};
ext.containerfilter = ext.containerfilter || {};
ext.containerfilter.ui = ext.containerfilter.ui || {};

ext.containerfilter.ui.ContainerFilterInspectorTool = function ( toolGroup, config ) {
	ext.containerfilter.ui.ContainerFilterInspectorTool.super.call( this, toolGroup, config );
};

OO.inheritClass( ext.containerfilter.ui.ContainerFilterInspectorTool, ve.ui.FragmentInspectorTool );

ext.containerfilter.ui.ContainerFilterInspectorTool.static.name = 'containerFilterTool';
ext.containerfilter.ui.ContainerFilterInspectorTool.static.group = 'none';
ext.containerfilter.ui.ContainerFilterInspectorTool.static.autoAddToCatchall = false;
ext.containerfilter.ui.ContainerFilterInspectorTool.static.icon = 'funnel';
ext.containerfilter.ui.ContainerFilterInspectorTool.static.title = OO.ui.deferMsg(
	'containerfilter-inspector-title'
);
ext.containerfilter.ui.ContainerFilterInspectorTool.static.modelClasses =
	[ ext.containerfilter.dm.ContainerFilterNode ];
ext.containerfilter.ui.ContainerFilterInspectorTool.static.commandName = 'containerFilterCommand';

ve.ui.toolFactory.register( ext.containerfilter.ui.ContainerFilterInspectorTool );

ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'containerFilterCommand', 'window', 'open',
		{ args: [ 'containerFilterInspector' ], supportedSelections: [ 'linear' ] }
	)
);
