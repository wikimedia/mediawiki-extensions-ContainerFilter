ve.ui.MWContainerFilterInspector = function VeUiMWContainerFilterInspector( config ) {
	// Parent constructor
	ve.ui.MWContainerFilterInspector.super.call(
		this, ve.extendObject( { padded: true }, config )
	);
};

/* Inheritance */

OO.inheritClass( ve.ui.MWContainerFilterInspector, ve.ui.MWLiveExtensionInspector );

/* Static properties */

ve.ui.MWContainerFilterInspector.static.name = 'containerFilterInspector';

ve.ui.MWContainerFilterInspector.static.title = OO.ui.deferMsg( 'containerfilter-inspector-title' );

ve.ui.MWContainerFilterInspector.static.modelClasses =
	[ ve.dm.MWContainerFilterNode ];

ve.ui.MWContainerFilterInspector.static.dir = 'ltr';

// This tag does not have any content
ve.ui.MWContainerFilterInspector.static.allowedEmpty = true;
ve.ui.MWContainerFilterInspector.static.selfCloseEmptyBody = false;

/**
 * @inheritdoc
 */
ve.ui.MWContainerFilterInspector.prototype.initialize = function () {
	ve.ui.MWContainerFilterInspector.super.prototype.initialize.call( this );

	// remove input field with links in it
	this.input.$element.remove();

	this.indexLayout = new OO.ui.PanelLayout( {
		expanded: false,
		padded: true
	} );

	this.createFields();

	this.setLayouts();

	// Initialization
	this.$content.addClass( 'containerfilter-inspector-content' );

	this.indexLayout.$element.append(
		this.selectorLayout.$element
	);
	this.form.$element.append(
		this.indexLayout.$element
	);
};

ve.ui.MWContainerFilterInspector.prototype.createFields = function () {
	this.selectorInput = new OO.ui.MultilineTextInputWidget( {
		rows: 2,
		placeholder: '.wikitable tr'
	} );
};

ve.ui.MWContainerFilterInspector.prototype.setLayouts = function () {
	this.selectorLayout = new OO.ui.FieldLayout( this.selectorInput, {
		label: ve.msg( 'containerfilter-inspector-input-selector' ),
		$overlay: true,
		help: ve.msg( 'containerfilter-inspector-input-selector-placeholder' ),
		align: 'top'
	} );
};

/**
 * @inheritdoc
 */
ve.ui.MWContainerFilterInspector.prototype.getSetupProcess = function ( data ) {
	return ve.ui.MWContainerFilterInspector.super.prototype.getSetupProcess.call(
		this, data
	).next( function () {
		const attributes = this.selectedNode.getAttribute( 'mw' ).attrs;

		this.selectorInput.setValue( attributes.selector || '' );
		this.actions.setAbilities( { done: true } );
	}, this );
};

ve.ui.MWContainerFilterInspector.prototype.updateMwData = function ( mwData ) {
	ve.ui.MWContainerFilterInspector.super.prototype.updateMwData.call(
		this, mwData
	);

	if ( this.selectorInput.getValue() !== '' ) {
		mwData.attrs.selector = this.selectorInput.getValue();
	} else {
		delete ( mwData.attrs.selector );
	}
};

/**
 * @inheritdoc
 */
ve.ui.MWContainerFilterInspector.prototype.formatGeneratedContentsError =
	function ( $element ) {
		return $element.text().trim();
	};

/* Registration */

ve.ui.windowFactory.register( ve.ui.MWContainerFilterInspector );
