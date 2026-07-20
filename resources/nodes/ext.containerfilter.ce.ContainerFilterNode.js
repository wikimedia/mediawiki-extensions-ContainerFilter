ve.ce.MWContainerFilterNode = function VeCeMWContainerFilterNode() {
	// Parent constructor
	ve.ce.MWContainerFilterNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ce.MWContainerFilterNode, ve.ce.MWBlockExtensionNode );

/* Static properties */

ve.ce.MWContainerFilterNode.static.name = 'mwContainerFilter';

ve.ce.MWContainerFilterNode.static.primaryCommandName = 'containerFilterCommand';

// If body is empty, tag does not render anything
ve.ce.MWContainerFilterNode.static.rendersEmpty = true;

/* Registration */

ve.ce.nodeFactory.register( ve.ce.MWContainerFilterNode );
