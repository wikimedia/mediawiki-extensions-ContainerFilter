<?php

namespace MediaWiki\Extension\ContainerFilter\ContentDroplets;

use MediaWiki\Extension\ContentDroplets\Droplet\TagDroplet;
use MediaWiki\Message\Message;

class ContainerFilter extends TagDroplet {

	/**
	 * @inheritDoc
	 */
	public function getName(): Message {
		return Message::newFromKey( 'containerfiler-droplet-name' );
	}

	/**
	 * @inheritDoc
	 */
	public function getDescription(): Message {
		return Message::newFromKey( 'containerfiler-droplet-description' );
	}

	/**
	 * @inheritDoc
	 */
	public function getIcon(): string {
		return 'droplet-containerfilter';
	}

	/**
	 * @inheritDoc
	 */
	public function getRLModules(): array {
		return [ 'ext.containerFilter.ve.nodes' ];
	}

	/**
	 * @return array
	 */
	public function getCategories(): array {
		return [ 'content', 'navigation' ];
	}

	/**
	 * @return string
	 */
	protected function getTagName(): string {
		return 'containerfilter';
	}

	/**
	 * @return array
	 */
	protected function getAttributes(): array {
		return [
			'selector'
		];
	}

	/**
	 * @return bool
	 */
	protected function hasContent(): bool {
		return false;
	}

	/**
	 * @return string|null
	 */
	public function getVeCommand(): ?string {
		return 'containerFilterCommand';
	}
}
