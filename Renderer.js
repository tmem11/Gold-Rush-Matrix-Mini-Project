class Renderer {
    constructor() {
        this.borad = []
    }
    renderBoard(board) {
        this.board = board
        $('.grid-container').empty();
        const source = $('#loadBoard-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({ board: board.getBoard() });
        $('.grid-container').append(newHTML);
        this.renderScores()
    }
    renderScores() {
        $('.score-container').empty();
        const source = $('#result-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({ score: board.playerScores() });
        $('.score-container').append(newHTML);

    }


}
Handlebars.registerHelper('initSettings', function (item) {
    if (item === 'c')
        return `<div class="grid-item"><img src=${COIN} width=30px height=30px /></div>`
    else if (item === 1)
        return `<div class="grid-item"><img src=${PLAYER1} width=30px height=30px /></div>`
    else if (item === 2)
        return `<div class="grid-item"><img src=${PLAYER2} width=30px height=30px /></div>`
    else
        return `<div class="grid-item"><img src=${BLOCK} width=80px height=50px /></div>`
})
Handlebars.registerHelper('initScores', function (players) {
    let inGame = 1
    let wiinerCoins = (board.getCoins() / 2)
    if (players[0] > wiinerCoins) {
        alert("Player 1 won !!")
    }
    else if (players[1] > wiinerCoins) {
        alert("Player 2 won !!")
    }
    if (inGame === 1) {
        return `<div class=player-score> 
        <div ><p>Player 1</p>Score ${players[0]}</div>
        <div ><p>Player 2</p>Score ${players[1]}</div>
        </div>`
    }
})