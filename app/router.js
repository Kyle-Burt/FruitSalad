import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PlayersController } from "./controllers/PlayersController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: PlayersController,
    view: /*html*/`
      <div class="container">
        <div class="row">
          <div class="col-4">
          <h1 class="ms-4 mt-5 p-3 elevated bg-light shadow text-center">Fruit Salad</h1>
          </div>
        </div>
      </div>
      <div class="container">
      <section class="row">
        <div class="col-6 ms-4 my-5">
          <div id="activePlayer" class="p-4 elevated shadow d-flex justify-content-between align-items-center">
            <h2>active player name</h2>
            <h2>Score: 0</h2>
          </div>
          <div id="activeForm" class=" d-flex flex-column justify-content-center align-items-center elevated shadow my-5">
            <div class="p-5">
              <h2>Random Word</h2>
              <div class="form-floating mb-3">
              <input type="name" class="form-control" id="floatingInput" placeholder="PlayerName">
              <label for="floatingInput">ANSWER</label>
            </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="d-flex flex-column p-4 align-items-center elevated shadow">
            <div id="playerList" class="d-flex flex-column">
              // <div class="d-flex justify-items-between">
              //   <p class="me-5 fs-4 m-0">player name</p>
              //   <p class="ms-5 fs-4">Score: 0</p>
              // </div>
            </div>
            <div class="form-floating mb-3">
              <input type="name" class="form-control" id="floatingInput" placeholder="PlayerName">
              <label for="floatingInput">Name</label>
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    `
  }
]