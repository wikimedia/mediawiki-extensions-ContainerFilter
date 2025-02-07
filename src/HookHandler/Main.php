<?php

namespace MediaWiki\Extension\ContainerFilter\HookHandler;

use MediaWiki\Context\RequestContext;
use MediaWiki\Hook\ParserFirstCallInitHook;
use MediaWiki\Html\Html;
use MediaWiki\Parser\Parser;
use MediaWiki\Parser\PPFrame;
use OOUI\SearchInputWidget;

class Main implements ParserFirstCallInitHook {

	/**
	 * @inheritDoc
	 */
	public function onParserFirstCallInit( $parser ) {
		$parser->setHook( 'containerfilter', function ( $input, array $args, Parser $parser, PPFrame $frame ) {
			return $this->render( $input, $args, $parser, $frame );
		} );
		return true;
	}

	/**
	 * @param string $input
	 * @param array $args
	 * @param Parser $parser
	 * @param PPFrame $frame
	 * @return string
	 */
	private function render( $input, array $args, Parser $parser, PPFrame $frame ) {
		$defaultSelector =
			'.fitlerable-container,' .
			'.wikitable tr:not(:has(th))';
		$selector = $args['selector'] ?? $defaultSelector;
		// Using `$parser->getOutput()->setEnableOOUI( true );` will not work for some reason
		RequestContext::getMain()->getOutput()->enableOOUI();
		$parser->getOutput()->addModules( [ 'ext.containerFilter.tag' ] );
		$searchField = new SearchInputWidget( [
			'classes' => [ 'container-filter-search' ],
			'infusable' => true,
		] );
		$html = Html::rawElement(
			'div',
			[ 'data-selector' => $selector, ],
			$searchField
		);
		return $html;
	}
}
