/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SprGameoverbg0 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "spr_gameoverbg_0",
        "./SprGameoverbg0/costumes/spr_gameoverbg_0.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "spr_gameoverbg_2",
        "./SprGameoverbg0/costumes/spr_gameoverbg_2.png",
        { x: 480, y: 360 }
      )
    ];

    this.sounds = [
      new Sound(
        "UnderTale Demo  Game Over Theme.mp3",
        "./SprGameoverbg0/sounds/UnderTale Demo  Game Over Theme.mp3.wav"
      )
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game over" },
        this.whenIReceiveGameOver2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game done" },
        this.whenIReceiveGameDone
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game done" },
        this.whenIReceiveGameDone2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenIReceiveGameOver() {
    this.stage.vars.gameDone = 1;
    this.visible = true;
    this.effects.ghost = 100;
    yield* this.wait(1);
    for (let i = 0; i < 20; i++) {
      this.effects.ghost -= 5;
      yield;
    }
  }

  *whenIReceiveGameOver2() {
    this.stage.watchers.p1Hp.visible = false;
    this.stage.watchers.p2Hp.visible = false;
    yield* this.wait(1);
    while (true) {
      yield* this.playSoundUntilDone("UnderTale Demo  Game Over Theme.mp3");
      yield;
    }
  }

  *whenGreenFlagClicked() {
    yield* this.wait(1);
    while (true) {
      if (this.compare(this.stage.vars.p2Hp, 1) < 0) {
        this.costume = "spr_gameoverbg_0";
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(1);
    while (true) {
      if (this.compare(this.stage.vars.p1Hp, 1) < 0) {
        this.costume = "spr_gameoverbg_2";
        this.broadcast("game done");
        return;
      }
      yield;
    }
  }

  *whenIReceiveGameDone() {
    this.stage.watchers.p1Hp.visible = false;
    this.stage.watchers.p2Hp.visible = false;
    yield* this.wait(1);
    /* TODO: Implement stop all */ null;
  }

  *whenIReceiveGameDone2() {
    this.stage.vars.gameDone = 1;
    this.visible = true;
    this.effects.ghost = 100;
    for (let i = 0; i < 20; i++) {
      this.effects.ghost -= 5;
      yield;
    }
    yield* this.wait(1);
  }

  *whenGreenFlagClicked3() {
    this.stage.watchers.p2Hp.visible = true;
    this.stage.watchers.p1Hp.visible = true;
    this.stage.vars.gameDone = 0;
    this.effects.ghost = 100;
    this.visible = false;
  }
}
