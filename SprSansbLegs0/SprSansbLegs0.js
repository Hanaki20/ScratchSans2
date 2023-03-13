/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SprSansbLegs0 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "spr_sansb_legs_0",
        "./SprSansbLegs0/costumes/spr_sansb_legs_0.png",
        { x: 44, y: -63 }
      )
    ];

    this.sounds = [new Sound("pop", "./SprSansbLegs0/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(
        this.sprites["SprSansbTorso0"].x,
        this.sprites["SprSansbTorso0"].y
      );
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.costume = "spr_sansb_legs_0";
  }

  *whenGreenFlagClicked3() {
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
}
