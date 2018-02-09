[![npm][npm]][npm-url]
[![node][node]][node-url]
# react-flipping-cards

> React adapter for Flipping Cards Carousel

### [Flipping Cards Carousel GitHub repository]

## Usage

Install the package using npm:
```sh
npm install react-flipping-cards --save
```

Import component:

```javascript
import FlippingCards from "react-flipping-cards";
```

## Configuration

Set configuration of the carousel. For example:

```javascript
var configuration = {
    autoFlipMode: false,
    autoFlipDelay: 1500,
    pauseMouseOver: true,

    displayShadow: true,
    transitionDuration: 700,

    rotationMode: "simultaneous",
    sequentialDelay: 600,

    cardWidth: 150,
    cardHeight: 180,

    spacingHorizontal: 15,
    spacingVertical: 15,

    cardsToShow: 3,
    cardsPerRow: 3,

    startFromIndex: 1
};
```

## Content

Set content of the cards of the carousel. For example:

```javascript
var content = [
    '<div>Lorem ipsum 1</div>',
    '<div>Lorem ipsum 2</div>',
    '<div>Lorem ipsum 3</div>',
    ...
 ];
```

Use Flipping Cards Carouser React adapter:

```javascript
  <FlippingCards id="flipping_cards" configuration={configuration} content={content} />
```

License
----

[MIT](http://www.opensource.org/licenses/mit-license.php)

[//]: #

[Flipping Cards Carousel GitHub repository]: <https://github.com/mad48/flipping-cards/>

[npm]: https://img.shields.io/npm/v/react-flipping-cards.svg
[npm-stats]: https://img.shields.io/npm/dm/react-flipping-cards.svg
[npm-url]: https://npmjs.com/package/react-flipping-cards

[node]: https://img.shields.io/node/v/react-flipping-cards.svg
[node-url]: https://nodejs.org