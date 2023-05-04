ext = ext || {};
ext.containerfilter = ext.containerfilter || {};
ext.containerfilter.dm = ext.containerfilter.dm || {};

ext.containerfilter.dm.ContainerFilterNode = function () {
	// Parent constructor
	ext.containerfilter.dm.ContainerFilterNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ext.containerfilter.dm.ContainerFilterNode, ve.dm.MWInlineExtensionNode );

/* Static members */

ext.containerfilter.dm.ContainerFilterNode.static.name = 'containerfilter';

ext.containerfilter.dm.ContainerFilterNode.static.tagName = 'containerfilter';

// Name of the parser tag
ext.containerfilter.dm.ContainerFilterNode.static.extensionName = 'containerfilter';

// This tag renders without content
ext.containerfilter.dm.ContainerFilterNode.static.childNodeTypes = [];
ext.containerfilter.dm.ContainerFilterNode.static.isContent = false;

/* Registration */

ve.dm.modelRegistry.register( ext.containerfilter.dm.ContainerFilterNode );
