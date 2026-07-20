ve.dm.MWContainerFilterNode = function VeDmMWContainerFilterNode() {
	// Parent constructor
	ve.dm.MWContainerFilterNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.dm.MWContainerFilterNode, ve.dm.MWBlockExtensionNode );

/* Static members */

ve.dm.MWContainerFilterNode.static.name = 'mwContainerFilter';

ve.dm.MWContainerFilterNode.static.tagName = 'div';

// Name of the parser tag
ve.dm.MWContainerFilterNode.static.extensionName = 'containerfilter';

/* Registration */

ve.dm.modelRegistry.register( ve.dm.MWContainerFilterNode );
