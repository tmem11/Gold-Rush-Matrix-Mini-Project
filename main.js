const board = new GoldRush()
const render = new Renderer()
render.renderBoard(board)

$(document).keypress(function (e) {
    switch (e.which) {
        case 119:
            board.movePlayer(1, "up")
            render.renderBoard(board)
            break;
        case 115:
            board.movePlayer(1, "down")
            render.renderBoard(board)
            break;
        case 97:
            board.movePlayer(1, "left")
            render.renderBoard(board)
            break;
        case 100:
            board.movePlayer(1, "right")
            render.renderBoard(board)
            break;
        default:
            changed = false
            break;
    }
})
$(document).keydown(function (e) {
    switch (e.which) {
        case 38:
            board.movePlayer(2, "up")
            render.renderBoard(board)
            break;
        case 40:
            board.movePlayer(2, "down")
            render.renderBoard(board)
            break;
        case 37:
            board.movePlayer(2, "left")
            render.renderBoard(board)
            break;
        case 39:
            board.movePlayer(2, "right")
            render.renderBoard(board)
            break;
        default:
            changed = false
            break;
    }
})
