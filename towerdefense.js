const width = window.innerWidth;
const height = window.innerHeight;

const config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
}

function create() {
}

function update() {
}