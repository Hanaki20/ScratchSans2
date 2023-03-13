/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stop extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("stop", "./Stop/costumes/stop.svg", { x: 6, y: 6 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(208, 171);
  }

  *whenthisspriteclicked() {
    this.broadcast("buuten hide");
  }
}
