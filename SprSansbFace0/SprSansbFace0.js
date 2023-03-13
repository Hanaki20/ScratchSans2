/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SprSansbFace0 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "spr_sansb_face_0",
        "./SprSansbFace0/costumes/spr_sansb_face_0.png",
        { x: 32, y: 30 }
      ),
      new Costume(
        "spr_sansb_blueeye_0",
        "./SprSansbFace0/costumes/spr_sansb_blueeye_0.png",
        { x: 32, y: 30 }
      ),
      new Costume(
        "spr_sansb_blueeye_1",
        "./SprSansbFace0/costumes/spr_sansb_blueeye_1.png",
        { x: 32, y: 30 }
      ),
      new Costume(
        "spr_sansb_face_5",
        "./SprSansbFace0/costumes/spr_sansb_face_5.png",
        { x: 32, y: 30 }
      ),
      new Costume(
        "spr_sansb_face_6",
        "./SprSansbFace0/costumes/spr_sansb_face_6.png",
        { x: 32, y: 30 }
      ),
      new Costume(
        "spr_sansb_face_10",
        "./SprSansbFace0/costumes/spr_sansb_face_10.png",
        { x: 32, y: 30 }
      )
    ];

    this.sounds = [new Sound("pop", "./SprSansbFace0/sounds/pop.wav")];

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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Sans damaged" },
        this.whenIReceiveSansDamaged
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.p1Hp = 1;
    this.costume = "spr_sansb_face_0";
    this.goto(-3, 30);
  }

  *whenGreenFlagClicked2() {
    while (true) {
      while (
        !!(
          this.keyPressed("s") ||
          this.keyPressed("w") || this.keyPressed("d") || this.keyPressed("a")
        )
      ) {
        this.costume = "spr_sansb_blueeye_0";
        yield* this.wait(0.1);
        this.costume = "spr_sansb_blueeye_1";
        yield* this.wait(0.1);
        yield;
      }
      this.costume = "spr_sansb_face_0";
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.keyPressed("l")) {
        this.x += 5;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.keyPressed("j")) {
        this.x -= 5;
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.keyPressed("i")) {
        this.y += 5;
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.keyPressed("k")) {
        this.y -= 5;
      }
      yield;
    }
  }

  *whenIReceiveGameDone() {
    while (true) {
      this.costume = "spr_sansb_face_10";
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    while (true) {
      if (
        this.touching(this.sprites["SprHeartblue0"].andClones()) &&
        this.keyPressed("m")
      ) {
        this.costume = "spr_sansb_blueeye_1";
        yield* this.startSound("laser2");
        this.broadcast("Sans damaged");
      } else {
        this.costume = "spr_sansb_face_0";
      }
      yield;
    }
  }

  *whenIReceiveSansDamaged() {
    if (
      !(
        this.keyPressed("i") ||
        this.keyPressed("j") || this.keyPressed("k") || this.keyPressed("l")
      )
    ) {
      this.costume = "spr_sansb_face_6";
      this.stage.vars.p1Hp--;
      yield* this.wait(0.1);
      this.costume = "spr_sansb_face_0";
    }
  }

  *whenGreenFlagClicked8() {}
}
