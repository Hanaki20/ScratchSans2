/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Platformers extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Platformers/costumes/costume1.png", {
        x: 59,
        y: 19
      })
    ];

    this.sounds = [new Sound("pop", "./Platformers/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.keyPressed("v")) {
        this.stage.vars.moving = 1;
        this.createClone();
        yield* this.wait(0);
        this.stage.vars.moving = 0;
      }
      yield* this.wait(0.1);
      yield;
    }
  }

  *startAsClone() {
    this.visible = true;
    if (this.toNumber(this.stage.vars.moving) === 1) {
      while (true) {
        for (let i = 0; i < 22; i++) {
          this.x += 5;
          yield;
        }
        for (let i = 0; i < 22; i++) {
          this.x -= 5;
          yield;
        }
        yield;
      }
    }
  }

  *whenIReceiveGameOver() {
    yield* this.wait(0.5);
    while (true) {
      this.deleteThisClone();
      yield;
    }
  }

  *startAsClone2() {
    while (true) {
      if (this.touching("mouse") && this.keyPressed("0")) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *startAsClone3() {
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed("c")) {
        this.createClone();
      }
      yield* this.wait(0.1);
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.visible = false;
    while (true) {
      this.goto(this.mouse.x, this.mouse.y);
      yield;
    }
  }
}
