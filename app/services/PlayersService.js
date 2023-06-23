import { AppState } from "../AppState.js"



class PlayersService {
    showcasePlayer(dataId) {
        const players = AppState.players

        const foundPlayer = players.find(p => p.id == dataId)

        console.log("find anything", foundPlayer)

        AppState.activePlayer = foundPlayer
    }
}

export const playersService = new PlayersService()