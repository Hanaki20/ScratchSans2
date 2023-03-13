/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SprSansbTorso0 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "spr_sansb_torso_2",
        "./SprSansbTorso0/costumes/spr_sansb_torso_2.png",
        { x: 55, y: -15 }
      ),
      new Costume(
        "spr_sansb_rightstrike_3",
        "./SprSansbTorso0/costumes/spr_sansb_rightstrike_3.png",
        { x: 73, y: -15 }
      ),
      new Costume(
        "spr_sansb_rightstrike_4",
        "./SprSansbTorso0/costumes/spr_sansb_rightstrike_4.png",
        { x: 71, y: -15 }
      ),
      new Costume(
        "spr_sansb_handup_1",
        "./SprSansbTorso0/costumes/spr_sansb_handup_1.png",
        { x: 61, y: 36 }
      ),
      new Costume(
        "spr_sansb_handup_2",
        "./SprSansbTorso0/costumes/spr_sansb_handup_2.png",
        { x: 60, y: 36 }
      ),
      new Costume(
        "spr_sansb_handup_3",
        "./SprSansbTorso0/costumes/spr_sansb_handup_3.png",
        { x: 61, y: 29 }
      ),
      new Costume(
        "spr_sansb_torso_5",
        "./SprSansbTorso0/costumes/spr_sansb_torso_5.png",
        { x: 51, y: -19 }
      )
    ];

    this.sounds = [new Sound("pop", "./SprSansbTorso0/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game done" },
        this.whenIReceiveGameDone
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(
        this.sprites["SprSansbFace0"].x,
        this.sprites["SprSansbFace0"].y
      );
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.costume = "spr_sansb_torso_2";
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.keyPressed("s")) {
        this.costume = "spr_sansb_handup_3";
        yield* this.wait(0);
        this.costume = "spr_sansb_handup_2";
        yield* this.wait(0);
        this.costume = "spr_sansb_handup_1";
        while (!!this.keyPressed("s")) {
          yield;
        }
        yield* this.wait(0);
        this.costume = "spr_sansb_torso_2";
        yield* this.wait(0);
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.keyPressed("d")) {
        this.costume = "spr_sansb_torso_2";
        yield* this.wait(0);
        this.costume = "spr_sansb_rightstrike_3";
        yield* this.wait(0);
        this.costume = "spr_sansb_rightstrike_4";
        while (!!this.keyPressed("d")) {
          yield;
        }
        yield* this.wait(0);
        this.costume = "spr_sansb_rightstrike_3";
        yield* this.wait(0);
        this.costume = "spr_sansb_torso_2";
        yield* this.wait(0);
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.keyPressed("a")) {
        this.costume = "spr_sansb_rightstrike_4";
        yield* this.wait(0);
        this.costume = "spr_sansb_rightstrike_3";
        yield* this.wait(0);
        this.costume = "spr_sansb_torso_2";
        yield* this.wait(0);
        while (!!this.keyPressed("a")) {
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.keyPressed("w")) {
        this.costume = "spr_sansb_handup_1";
        yield* this.wait(0);
        this.costume = "spr_sansb_handup_2";
        yield* this.wait(0);
        this.costume = "spr_sansb_handup_3";
        while (!!this.keyPressed("w")) {
          yield;
        }
        yield* this.wait(0);
        this.costume = "spr_sansb_handup_2";
        yield* this.wait(0);
        this.costume = "spr_sansb_torso_2";
        yield* this.wait(0);
      }
      yield;
    }
  }

  *whenIReceiveGameDone() {
    this.costume = "spr_sansb_torso_5";
  }

  *whenGreenFlagClicked7() {
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
