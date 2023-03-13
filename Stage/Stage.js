/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [
      new Sound(
        "Undertale OST_ 100 - Megalovania.mp3",
        "./Stage/sounds/Undertale OST_ 100 - Megalovania.mp3.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game over" },
        this.whenIReceiveGameOver
      )
    ];

    this.vars.jumpingLeft = 0;
    this.vars.p2Hp = 92;
    this.vars.gameDone = 0;
    this.vars.p1Hp = 1;
    this.vars.bigBlaster = 0;
    this.vars.longBone = 0;
    this.vars.moving = 0;
    this.vars.longBone2 = 0;

    this.watchers.p2Hp = new Watcher({
      label: "P2: HP",
      style: "normal",
      visible: true,
      value: () => this.vars.p2Hp,
      x: 233,
      y: 184
    });
    this.watchers.p1Hp = new Watcher({
      label: "P1: HP",
      style: "normal",
      visible: true,
      value: () => this.vars.p1Hp,
      x: 336,
      y: 184
    });
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.playSoundUntilDone("Undertale OST_ 100 - Megalovania.mp3");
      yield;
    }
  }

  *whenIReceiveGameOver() {
    /* TODO: Implement stop other scripts in stage */ null;
  }
}
