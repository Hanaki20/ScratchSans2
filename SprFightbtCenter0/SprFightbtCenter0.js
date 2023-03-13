/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SprFightbtCenter0 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "spr_fightbt_center_0",
        "./SprFightbtCenter0/costumes/spr_fightbt_center_0.png",
        { x: 110, y: 42 }
      ),
      new Costume(
        "spr_fightbt_center_1",
        "./SprFightbtCenter0/costumes/spr_fightbt_center_1.png",
        { x: 110, y: 42 }
      )
    ];

    this.sounds = [
      new Sound("laser2", "./SprFightbtCenter0/sounds/laser2.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "buuten hide" },
        this.whenIReceiveBuutenHide
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game done" },
        this.whenIReceiveGameDone
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "button show" },
        this.whenIReceiveButtonShow
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (
        this.touching(this.sprites["SprHeartblue0"].andClones()) &&
        this.keyPressed("m")
      ) {
        this.costume = "spr_fightbt_center_1";
        yield* this.startSound("laser2");
        this.broadcast("Sans damaged");
      } else {
        this.costume = "spr_fightbt_center_0";
      }
      yield;
    }
  }

  *whenIReceiveGameOver() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveBuutenHide() {
    this.visible = false;
  }

  *whenIReceiveGameDone() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveButtonShow() {
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    this.visible = true;
  }
}
