import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"



function _drawPlayerList() {
    const players = AppState.players
    let template = ''
    console.log(players)

    players.forEach(p => template += p.PLTemplate)

    setHTML('playerList', template)
}

function _drawActivePlayer() {
    const currentPlayer = AppState.activePlayer
    console.log('active player', currentPlayer)

    setHTML('activePlayer', currentPlayer.activePlayerTemplate)
}


export class PlayersController {
    constructor() {
        console.log('controller running')

        _drawPlayerList()
        _drawActivePlayer()

        AppState.on('activePlayer', _drawActivePlayer)
    }

    showcasePlayer(dataId) {

    }
}