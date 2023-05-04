ext = ext || {};
ext.containerfilter = ext.containerfilter || {};
ext.containerfilter.ce = ext.containerfilter.ce || {};

ext.containerfilter.ce.ContainerFilterNode = function () {
	// Parent constructor
	ext.containerfilter.ce.ContainerFilterNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ext.containerfilter.ce.ContainerFilterNode, ve.ce.MWInlineExtensionNode );

/* Static properties */

ext.containerfilter.ce.ContainerFilterNode.static.name = 'containerfilter';

ext.containerfilter.ce.ContainerFilterNode.static.primaryCommandName = 'containerfilter';

// If body is empty, tag does not render anything
ext.containerfilter.ce.ContainerFilterNode.static.rendersEmpty = true;

/* Registration */

ve.ce.nodeFactory.register( ext.containerfilter.ce.ContainerFilterNode );
