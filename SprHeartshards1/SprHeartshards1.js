/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SprHeartshards1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "spr_heartbreak_0",
        "./SprHeartshards1/costumes/spr_heartbreak_0.png",
        { x: 20, y: 16 }
      ),
      new Costume(
        "spr_heartshards_1",
        "./SprHeartshards1/costumes/spr_heartshards_1.png",
        { x: 6, y: 4 }
      ),
      new Costume(
        "spr_heartshards_0",
        "./SprHeartshards1/costumes/spr_heartshards_0.png",
        { x: 6, y: 6 }
      ),
      new Costume(
        "spr_heartshards_2",
        "./SprHeartshards1/costumes/spr_heartshards_2.png",
        { x: 6, y: 8 }
      ),
      new Costume(
        "spr_heartshards_3",
        "./SprHeartshards1/costumes/spr_heartshards_3.png",
        { x: 6, y: 4 }
      )
    ];

    this.sounds = [
      new Sound("pop", "./SprHeartshards1/sounds/pop.wav"),
      new Sound("bwee bwoo", "./SprHeartshards1/sounds/bwee bwoo.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.moveAhead();
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.watchers.p2Hp.visible = true;
    this.visible = false;
  }

  *startAsClone() {
    this.visible = true;
    this.costume = this.random(2, 5);
    this.goto(this.sprites[undefined].x, this.sprites[undefined].y);
    for (let i = 0; i < this.random(10, 30); i++) {
      this.x += this.random(-22, 22);
      this.y += this.random(5, 15);
      this.moveAhead();
      yield;
    }
    while (!(this.compare(this.y, -150) < 0)) {
      this.x += this.random(-10, 10);
      this.y -= 10;
      this.moveAhead();
      yield;
    }
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveGameOver() {
    this.goto(this.sprites["SprHeartblue0"].x, this.sprites["SprHeartblue0"].y);
    this.costume = "spr_heartbreak_0";
    this.visible = true;
    yield* this.wait(1);
    yield* this.startSound("bwee bwoo");
    this.visible = false;
    for (let i = 0; i < 5; i++) {
      this.createClone();
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    yield* this.wait(1);
    while (true) {
      if (this.compare(this.stage.vars.p2Hp, 1) < 0) {
        this.stopAllSounds();
        this.stage.watchers.p2Hp.visible = false;
        this.broadcast("Game over");
        yield* this.wait(1);
        return;
      }
      yield;
    }
  }
}
