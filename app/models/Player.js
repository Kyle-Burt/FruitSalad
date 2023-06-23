import { generateId } from "../utils/generateId.js"

export class Player {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.score = 0
    }

    get PLTemplate() {
        return `
        <div onclick="" class="d-flex justify-items-between">
            <p class="me-5 fs-4 m-0">${this.name}</p>
            <p class="ms-5 fs-4">Score: ${this.score}</p>
        </div>
        `
    }

    get activePlayerTemplate() {
        return `
        <h2 class="text-light">player name</h2>
        <h2 class="text-light">Score: 0</h2>
        `
    }
}