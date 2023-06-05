ext = ext || {};
ext.containerfilter = ext.containerfilter || {};
ext.containerfilter.ui = ext.containerfilter.ui || {};

ext.containerfilter.ui.ContainerFilterInspector = function ( config ) {
	// Parent constructor
	ext.containerfilter.ui.ContainerFilterInspector.super.call(
		this, ve.extendObject( { padded: true }, config )
	);
};

/* Inheritance */

OO.inheritClass( ext.containerfilter.ui.ContainerFilterInspector, ve.ui.MWLiveExtensionInspector );

/* Static properties */

ext.containerfilter.ui.ContainerFilterInspector.static.name = 'containerFilterInspector';

ext.containerfilter.ui.ContainerFilterInspector.static.title = OO.ui.deferMsg( 'containerfilter-inspector-title' );

ext.containerfilter.ui.ContainerFilterInspector.static.modelClasses =
	[ ext.containerfilter.dm.ContainerFilterNode ];

ext.containerfilter.ui.ContainerFilterInspector.static.dir = 'ltr';

// This tag does not have any content
ext.containerfilter.ui.ContainerFilterInspector.static.allowedEmpty = true;
ext.containerfilter.ui.ContainerFilterInspector.static.selfCloseEmptyBody = false;

/**
 * @inheritdoc
 */
ext.containerfilter.ui.ContainerFilterInspector.prototype.initialize = function () {
	ext.containerfilter.ui.ContainerFilterInspector.super.prototype.initialize.call( this );

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

ext.containerfilter.ui.ContainerFilterInspector.prototype.createFields = function () {
	this.selectorInput = new OO.ui.MultilineTextInputWidget( {
		rows: 2,
		placeholder: '.wikitable tr'
	} );
};

ext.containerfilter.ui.ContainerFilterInspector.prototype.setLayouts = function () {
	this.selectorLayout = new OO.ui.FieldLayout( this.selectorInput, {
		label: ve.msg( 'containerfilter-inspector-input-selector' ),
		$overlay: true,
		help: ve.msg( 'containerfilter-inspector-input-selector-placeholder' )
	} );
};

/**
 * @inheritdoc
 */
ext.containerfilter.ui.ContainerFilterInspector.prototype.getSetupProcess = function ( data ) {
	return ext.containerfilter.ui.ContainerFilterInspector.super.prototype.getSetupProcess.call(
		this, data
	).next( function () {
		var attributes = this.selectedNode.getAttribute( 'mw' ).attrs;

		this.selectorInput.setValue( attributes.selector || '' );
		this.actions.setAbilities( { done: true } );
	}, this );
};

ext.containerfilter.ui.ContainerFilterInspector.prototype.wireEvents = function () {
	this.titleInput.on( 'change', this.onChangeHandler );
};

ext.containerfilter.ui.ContainerFilterInspector.prototype.updateMwData = function ( mwData ) {
	ext.containerfilter.ui.ContainerFilterInspector.super.prototype.updateMwData.call(
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
ext.containerfilter.ui.ContainerFilterInspector.prototype.formatGeneratedContentsError =
	function ( $element ) {
		return $element.text().trim();
	};

/**
 * Append the error to the current tab panel.
 */
ext.containerfilter.ui.ContainerFilterInspector.prototype.onTabPanelSet = function () {
	this.indexLayout.getCurrentTabPanel().$element.append( this.generatedContentsError.$element );
};

/* Registration */

ve.ui.windowFactory.register( ext.containerfilter.ui.ContainerFilterInspector );
