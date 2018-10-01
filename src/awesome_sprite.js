export default class AwesomeSprite {
    constructor(width = 64, height = 32, blockSize = 10, container = null) {
        this.blockSize = blockSize;
        this.width = width * parseInt(this.blockSize, 10);
        this.height = height * parseInt(this.blockSize, 10);
        this.container = container;
    }

    initialize() {
        const canvas = document.createElement('canvas');

        canvas.width = this.width;
        canvas.height = this.height;
        canvas.style.backgroundColor = '#000';

        this.container.appendChild(canvas);
        this.ctx = canvas.getContext('2d');
    }

    writeFB(x, y, sprite) {
        this.ctx.save();

        sprite.forEach((byte, index) => {
            let bits = byte.toString(2);

            // keep the leading 0's
            bits = '00000000'.substr(bits.length) + bits;
            this.drawSprite(x, y + index, bits);
        });

        this.ctx.restore();
    }

    clearFB() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    drawSprite(initialX, initialY, bits) {
        const blockSize = parseInt(this.blockSize, 10);
        const width = parseInt(this.width, 10);
        const height = parseInt(this.height, 10);

        bits.split('').forEach((bit, index) => {
            let x = parseInt(bit, 10);

            this.ctx.fillStyle = x ? '#fff' : '#000';

            x = index * blockSize + initialX * blockSize;
            x = x < width ? x : x - width;

            let y = blockSize * initialY;
            y = y < height ? y : y - height;

            this.ctx.fillRect(x, y, blockSize, blockSize);
        });
    }
}
