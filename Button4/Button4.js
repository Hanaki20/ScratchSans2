/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button4-a", "./Button4/costumes/button4-a.svg", {
        x: -5,
        y: 1
      }),
      new Costume("button4-b", "./Button4/costumes/button4-b.svg", {
        x: 35,
        y: 34
      })
    ];

    this.sounds = [new Sound("pop", "./Button4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {}

  *whenthisspriteclicked() {
    this.broadcast("button show");
    this.goto(152, 174);
  }
}
