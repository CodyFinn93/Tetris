//board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//blocks
var blockX = blockSize * 9;
var blockY = blockSize * 4;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used for drawing on the board

    document.addEventListener("keydown", changeDirection);

    setInterval(update, 1000/10);
}

function update() {
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="white";
    context.fillRect(blockX, blockY, blockSize * 4, blockSize * 4);
}

function changeDirection(e) {
    if (e.code == "ArrowLeft") {
        blockX -= 25;
    }
    else if (e.code == "ArrowRight") {
        blockX += 25;
    }
}