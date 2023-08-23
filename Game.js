const Board = require("./Board")
const Player = require("./Player")
class Game {
    
    constructor(player0Name, player1Name) {
        this.turn = 0
        this.isGameEnded = false
        this.board = new Board()
        this.players = [new Player(player0Name, 'X'),
        new Player(player1Name, 'O')]
    }
    static newGame(player0Name, player1Name) {
        //validation
        if (player0Name != player1Name || typeof player0Name != 'string'
            || typeof player1Name != 'string') {
            return ['Invalid parameter', null]
        }
        return ['Object Created', new Game(player0Name, player1Name)]
    }

    play(cellNumber) {   //validation
        if (isNaN(cellNumber)) {
            return 'Cell should be a string '
        }
        if (this.isGameEnded) {
            return 'Game Ended'
        }
        if (!this.board.isCellEmpty(cellNumber)) {
            return 'Cell is not Empty'
        }

        let currentPlayer = null
        if (this.turn % 2 == 0) {
            currentPlayer = this.players[0]
        }
        else {
            currentPlayer = this.players[1]
        }

        this.board.markCell(cellNumber, currentPlayer.getSymbol())
        this.turn++

        // analyze winner from board 
        let winnerSymbol = this.board.winningConditions()
        //console.log("winnerSymbol " , winnerSymbol )
        let winner = null
        if (winnerSymbol == 'X') {
            winner = this.players[0]
            this.isGameEnded = true
            return `Game won by ${winner.name}`
        }

        if (winnerSymbol == 'O') {
            winner = this.players[1]
            this.isGameEnded = true
            return `Game won by ${winner.name}`
        }
        // if (gameStatus == "Draw") {
        //     this.isGameEnded = true
        // }
        if(this.board.isDraw())
        {
            this.isGameEnded=false
            return "Game Ended in a Draw"

        }
        // if (winner == null && this.isGameEnded) {
        //     //console.log("winner == null && this.isGameEnded", winner, this.isGameEnded)
        //     return "Game Ended in a Draw"
        // }
        this.board.printBoard()
        return "Continue Playing"

    }


}
module.exports = Game