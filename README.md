# ContainerFilter

## Installation
Execute

    composer require mediawiki/container-filter ~1
within MediaWiki root or add `mediawiki/container-filter` to the
`composer.json` file of your project

## Activation
Add

    wfLoadExtension( 'ContainerFilter' );
to your `LocalSettings.php` or the appropriate `settings.d/` file.

## Usage

Within the page content use e.g.

```
<containerfilter selector=".wikitable tr:not(:has(th))"/>
```

To filter the content of the container with the given selector.
In this case all rows of the table that do not contain a header cell are filtered.