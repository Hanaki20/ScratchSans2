/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bones extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bones", "./Bones/costumes/bones.png", { x: 62, y: 21 }),
      new Costume("uiterlijk1", "./Bones/costumes/uiterlijk1.png", {
        x: 141,
        y: 21
      })
    ];

    this.sounds = [new Sound("00002a1c", "./Bones/sounds/00002a1c.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "2" }, this.whenKey2Pressed)
    ];
  }

  *startAsClone() {
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["SprHeartblue0"].y - this.y,
        this.sprites["SprHeartblue0"].x - this.x
      )
    );
    if (this.toNumber(this.stage.vars.longBone) === 1) {
      this.costume = "costume2";
    } else {
      this.costume = "costume1";
    }
    while (!this.touching("edge")) {
      this.visible = true;
      this.move(10);
      yield;
    }
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.vars.longBone = 0;
    while (true) {
      if (this.keyPressed("z")) {
        if (this.toNumber(this.stage.vars.gameDone) === 0) {
          this.direction = this.radToScratch(
            Math.atan2(
              this.sprites["SprHeartblue0"].y - this.y,
              this.sprites["SprHeartblue0"].x - this.x
            )
          );
          this.goto(this.mouse.x, this.mouse.y);
          this.createClone();
        }
      }
      yield;
    }
  }

  *whenKey2Pressed() {
    if (this.toNumber(this.stage.vars.longBone) === 1) {
      this.stage.vars.longBone = 0;
    } else {
      this.stage.vars.longBone = 1;
    }
  }
}
