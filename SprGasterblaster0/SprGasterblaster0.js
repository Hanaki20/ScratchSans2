/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SprGasterblaster0 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "spr_gasterblaster_0",
        "./SprGasterblaster0/costumes/spr_gasterblaster_0.png",
        { x: 62, y: 48 }
      ),
      new Costume(
        "spr_gasterblaster_1",
        "./SprGasterblaster0/costumes/spr_gasterblaster_1.png",
        { x: 68, y: 45 }
      ),
      new Costume(
        "spr_gasterblaster_2",
        "./SprGasterblaster0/costumes/spr_gasterblaster_2.png",
        { x: 70, y: 42 }
      ),
      new Costume(
        "spr_gasterblaster_3",
        "./SprGasterblaster0/costumes/spr_gasterblaster_3.png",
        { x: 63, y: 48 }
      ),
      new Costume(
        "spr_gasterblaster_4",
        "./SprGasterblaster0/costumes/spr_gasterblaster_4.png",
        { x: 66, y: 49 }
      ),
      new Costume(
        "spr_gasterblaster_5",
        "./SprGasterblaster0/costumes/spr_gasterblaster_5.svg",
        { x: 31, y: 29 }
      ),
      new Costume(
        "spr_gasterblaster_6",
        "./SprGasterblaster0/costumes/spr_gasterblaster_6.png",
        { x: 78, y: 73 }
      ),
      new Costume(
        "spr_gasterblaster_7",
        "./SprGasterblaster0/costumes/spr_gasterblaster_7.png",
        { x: 82, y: 79 }
      ),
      new Costume(
        "spr_gasterblaster_8",
        "./SprGasterblaster0/costumes/spr_gasterblaster_8.png",
        { x: 99, y: 84 }
      ),
      new Costume(
        "spr_gasterblaster_9",
        "./SprGasterblaster0/costumes/spr_gasterblaster_9.png",
        { x: 69, y: 77 }
      ),
      new Costume(
        "spr_gasterblaster_10",
        "./SprGasterblaster0/costumes/spr_gasterblaster_10.png",
        { x: 61, y: 83 }
      ),
      new Costume(
        "spr_gasterblaster_11",
        "./SprGasterblaster0/costumes/spr_gasterblaster_11.svg",
        { x: 39, y: 40 }
      )
    ];

    this.sounds = [
      new Sound("Blaster Fire", "./SprGasterblaster0/sounds/Blaster Fire.wav"),
      new Sound(
        "Blaster Fire2",
        "./SprGasterblaster0/sounds/Blaster Fire2.wav"
      ),
      new Sound(
        "Blaster Fire3",
        "./SprGasterblaster0/sounds/Blaster Fire3.wav"
      ),
      new Sound(
        "Blaster Fire4",
        "./SprGasterblaster0/sounds/Blaster Fire4.wav"
      ),
      new Sound(
        "Blaster Fire5",
        "./SprGasterblaster0/sounds/Blaster Fire5.wav"
      ),
      new Sound(
        "Blaster Fire6",
        "./SprGasterblaster0/sounds/Blaster Fire6.wav"
      ),
      new Sound(
        "Blaster Fire7",
        "./SprGasterblaster0/sounds/Blaster Fire7.wav"
      ),
      new Sound(
        "Blaster Fire8",
        "./SprGasterblaster0/sounds/Blaster Fire8.wav"
      ),
      new Sound(
        "Blaster Fire9",
        "./SprGasterblaster0/sounds/Blaster Fire9.wav"
      ),
      new Sound(
        "Blaster Fire10",
        "./SprGasterblaster0/sounds/Blaster Fire10.wav"
      ),
      new Sound(
        "Blaster Appear",
        "./SprGasterblaster0/sounds/Blaster Appear.wav"
      ),
      new Sound(
        "Blaster Appear2",
        "./SprGasterblaster0/sounds/Blaster Appear2.wav"
      ),
      new Sound(
        "Blaster Appear3",
        "./SprGasterblaster0/sounds/Blaster Appear3.wav"
      ),
      new Sound(
        "Blaster Appear4",
        "./SprGasterblaster0/sounds/Blaster Appear4.wav"
      ),
      new Sound(
        "Blaster Appear5",
        "./SprGasterblaster0/sounds/Blaster Appear5.wav"
      ),
      new Sound(
        "Blaster Appear6",
        "./SprGasterblaster0/sounds/Blaster Appear6.wav"
      ),
      new Sound(
        "Blaster Appear7",
        "./SprGasterblaster0/sounds/Blaster Appear7.wav"
      ),
      new Sound(
        "Blaster Appear8",
        "./SprGasterblaster0/sounds/Blaster Appear8.wav"
      ),
      new Sound(
        "Blaster Appear9",
        "./SprGasterblaster0/sounds/Blaster Appear9.wav"
      ),
      new Sound(
        "Blaster Appear10",
        "./SprGasterblaster0/sounds/Blaster Appear10.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.KEY_PRESSED, { key: "1" }, this.whenKey1Pressed)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.bigBlaster = 0;
    this.visible = false;
    while (true) {
      if (this.keyPressed("x")) {
        if (this.toNumber(this.stage.vars.gameDone) === 0) {
          this.direction = this.radToScratch(
            Math.atan2(
              this.sprites["SprHeartblue0"].y - this.y,
              this.sprites["SprHeartblue0"].x - this.x
            )
          );
          this.goto(this.mouse.x, this.mouse.y);
          this.createClone();
          if (this.toNumber(this.stage.vars.bigBlaster) === 1) {
            this.size = 999;
          } else {
            this.size = 70;
          }
        }
      }
      yield;
    }
  }

  *startAsClone() {
    if (this.toNumber(this.stage.vars.bigBlaster) === 1) {
      this.size = 125;
      this.costume = "spr_gasterblaster_6";
    } else {
      this.size = 70;
      this.costume = "spr_gasterblaster_0";
    }
    this.visible = true;
    yield* this.startSound(this.random(11, 20));
    this.effects.ghost = 100;
    for (let i = 0; i < 20; i++) {
      this.effects.ghost -= 5;
      yield;
    }
    if (this.toNumber(this.stage.vars.bigBlaster) === 1) {
      yield* this.wait(0);
      this.costume = "spr_gasterblaster_7";
      yield* this.wait(0);
      this.costume = "spr_gasterblaster_8";
      yield* this.wait(0);
      this.costume = "spr_gasterblaster_9";
      yield* this.wait(0);
      yield* this.startSound(this.random(1, 10));
      this.costume = "spr_gasterblaster_10";
      yield* this.wait(0);
      this.costume = "spr_gasterblaster_11";
      yield* this.wait(0.7);
      for (let i = 0; i < 10; i++) {
        this.effects.ghost += 10;
        yield;
      }
      this.deleteThisClone();
    } else {
      yield* this.wait(0.07);
      this.costume = "spr_gasterblaster_1";
      yield* this.wait(0.07);
      this.costume = "spr_gasterblaster_2";
      yield* this.wait(0.07);
      this.costume = "spr_gasterblaster_3";
      yield* this.wait(0.07);
      yield* this.startSound(this.random(1, 10));
      this.costume = "spr_gasterblaster_4";
      yield* this.wait(0);
      this.costume = "spr_gasterblaster_5";
      yield* this.wait(0.3);
      for (let i = 0; i < 10; i++) {
        this.effects.ghost += 10;
        yield;
      }
      this.deleteThisClone();
    }
  }

  *startAsClone2() {
    for (let i = 0; i < 2; i++) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["SprHeartblue0"].y - this.y,
          this.sprites["SprHeartblue0"].x - this.x
        )
      );
      yield;
    }
  }

  *whenKey1Pressed() {
    if (this.toNumber(this.stage.vars.bigBlaster) === 1) {
      this.stage.vars.bigBlaster = 0;
    } else {
      this.stage.vars.bigBlaster = 1;
    }
  }
}
