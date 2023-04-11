// eslint-disable-next-line no-jquery/no-global-selector
$( '.container-filter-search' ).each( function () {
	var $searchField = $( this ),
		$containerEl = $searchField.parent(),
		searchField = OO.ui.infuse( $searchField );
	searchField.selector = $containerEl.data( 'selector' );
	searchField.on( 'change', function ( value ) {
		var normalValue = value.toLowerCase(),
			$elementsToFilter = $( this.selector );
		if ( normalValue === '' ) {
			// eslint-disable-next-line no-jquery/no-fade
			$elementsToFilter.fadeIn();
			return;
		}
		$elementsToFilter.each( function () {
			var $element = $( this ),
				elementText = $element.text().toLowerCase();
			if ( elementText.indexOf( normalValue ) !== -1 ) {
				// eslint-disable-next-line no-jquery/no-fade
				$element.fadeIn();
			} else {
				// eslint-disable-next-line no-jquery/no-fade
				$element.fadeOut();
			}
		} );
	}, [], searchField );
} );
