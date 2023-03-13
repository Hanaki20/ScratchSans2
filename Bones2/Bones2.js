/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bones2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bones 2", "./Bones2/costumes/bones 2.png", {
        x: 320,
        y: 124
      })
    ];

    this.sounds = [new Sound("plop", "./Bones2/sounds/plop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.KEY_PRESSED, { key: "3" }, this.whenKey3Pressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game over" },
        this.whenIReceiveGameOver
      )
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.keyPressed("b")) {
        this.createClone();
      }
      yield* this.wait(0.1);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    this.stage.vars.longBone2 = 0;
    while (true) {
      if (this.keyPressed("b")) {
        if (this.toNumber(this.stage.vars.gameDone) === 0) {
          this.goto(this.mouse.x, this.mouse.y);
          this.createClone();
        }
      }
      yield;
    }
  }

  *startAsClone() {
    while (true) {
      if (this.touching("mouse") && this.keyPressed("0")) {
        this.deleteThisClone();
      }
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

  *startAsClone2() {
    this.visible = true;
    this.size = 40;
    if (this.toNumber(this.stage.vars.longBone2) === 1) {
      this.size = 60;
    }
  }

  *whenKey3Pressed() {
    if (this.toNumber(this.stage.vars.longBone2) === 1) {
      this.stage.vars.longBone2 = 0;
    } else {
      this.stage.vars.longBone2 = 1;
    }
  }

  *whenIReceiveGameOver() {
    yield* this.wait(0.5);
    while (true) {
      this.deleteThisClone();
      yield;
    }
  }
}
