class GoldRush extends Matrix {
    constructor() {
        super(5, 5)
        this.player1 = { postion: this.findCoordinate(1), score: 0 }
        this.player2 = { postion: this.findCoordinate(2), score: 0 }
        // players={1 : { postion: this.findCoordinate(1), score: 0 },
        // 2 :{ postion: this.findCoordinate(2), score: 0 }}
        this.numOfCoins = 0
        this.generateCoins()
    }

    getRandomPostion() {
        var random1 = Math.floor((Math.random() * (this.matrix.length)));
        return this.matrix[random1][Math.floor((Math.random() * (this.matrix[random1].length)))];
    }
    generateCoins() {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (Math.random() > 0.4 && this.matrix[i][j] === '.') {
                    this.alter(i, j, 'c')
                    this.numOfCoins += 10
                }
            }
        }


    }
    validMove(x, y) {
        if (y < this.matrix.length && x < this.matrix[y].length) {
            return true
        }
        return false
    }
    updateScore(x, y, playerNumber) {
        if (this.get(y, x) === 'c') {
            if (playerNumber === 1) {
                this.player1.score = this.player1.score + 10
            }
            else if (playerNumber === 2) {
                this.player2.score = this.player2.score + 10
            }
        }

    }

    movePlayer(playerNumber, direction) {
        let postion = this.findCoordinate(playerNumber)
        switch (direction) {
            case 'left':
                if (this.validMove(postion.x - 1, postion.y)) {
                    this.updateScore(postion.x - 1, postion.y, playerNumber)
                    this.alter(postion.y, postion.x - 1, playerNumber)
                    this.alter(postion.y, postion.x, ".")
                }
                break;
            case 'right':
                if (this.validMove(postion.x + 1, postion.y)) {
                    this.updateScore(postion.x + 1, postion.y, playerNumber)
                    this.alter(postion.y, postion.x + 1, playerNumber)
                    this.alter(postion.y, postion.x, ".")
                }
                break;
            case 'down':
                if (this.validMove(postion.x, postion.y + 1)) {
                    this.updateScore(postion.x, postion.y + 1, playerNumber)
                    this.alter(postion.y + 1, postion.x, playerNumber)
                    this.alter(postion.y, postion.x, ".")
                }
                break;
            case 'up':
                if (this.validMove(postion.x, postion.y - 1)) {
                    this.updateScore(postion.x, postion.y - 1, playerNumber)
                    this.alter(postion.y - 1, postion.x, playerNumber)
                    this.alter(postion.y, postion.x, ".")
                }
                break;

            default:
                console.log(`Sorry, there is no ${direction}.`);
        }
    }
    getBoard() {
        return this.matrix
    }
    playerScores() {
        return [this.player1.score, this.player2.score]
    }
    getCoins() {
        return this.numOfCoins
    }

}




