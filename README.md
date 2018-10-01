# Awesome Sprite

## Install
  ```
  npm install --save awesome-sprite
  ```

## Usage

```
import AwesomeSprite from 'awesome-sprite';
const aSprite = new AwesomeSprite(width, height, blockSize, container);
```

- width: width of the screen (default = 64)
- height: height of the screen (default = 32)
- blockSize: size of the pixel;
- container: JS element where the screen is going to be printed.

```
aSprite.initialize(); // initialize and prints the sprite screen insinde the container element
aSprite.writeFB(xCoord, yCoord, bytesArray); // writes a sprite in a given coordinate aSprite.writeFB(1, 2, [0b11001100, 0b10101010]);
aSprite.clearFB(); // clears the screen
```