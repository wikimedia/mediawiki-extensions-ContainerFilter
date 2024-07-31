// eslint-disable-next-line no-jquery/no-global-selector
$( '.container-filter-search' ).each( function () {
	var $searchField = $( this ),
		$containerEl = $searchField.parent(),
		searchField = OO.ui.infuse( $searchField ),
		$resultCounter = $( '<div>' ).attr( 'aria-live', 'polite' ).addClass( 'visually-hidden' );
	searchField.selector = $containerEl.data( 'selector' );

	$( searchField.$input ).attr( 'aria-label', mw.message( 'containerfilter-input-aria-label' ).text() );
	$containerEl.append( $resultCounter );
	searchField.on( 'change', function ( value ) {
		var normalValue = value.toLowerCase(),
			$elementsToFilter = $( this.selector );
		if ( normalValue === '' ) {
			// eslint-disable-next-line no-jquery/no-fade
			$elementsToFilter.fadeIn();
			return;
		}
		var results = 0;
		$elementsToFilter.each( function () {
			var $element = $( this ),
				elementText = $element.text().toLowerCase();
			if ( elementText.indexOf( normalValue ) !== -1 ) {
				// eslint-disable-next-line no-jquery/no-fade
				$element.fadeIn();
				results += 1;
			} else {
				// eslint-disable-next-line no-jquery/no-fade
				$element.fadeOut();
			}
		} );
		$resultCounter.text(
			mw.message( 'containerfilter-filter-results-label', results ).text()
		);
	}, [], searchField );
} );
