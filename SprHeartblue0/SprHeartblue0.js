/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SprHeartblue0 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "spr_heartblue_0",
        "./SprHeartblue0/costumes/spr_heartblue_0.png",
        { x: 16, y: 16 }
      ),
      new Costume(
        "spr_heartblue_2",
        "./SprHeartblue0/costumes/spr_heartblue_2.png",
        { x: 16, y: 16 }
      )
    ];

    this.sounds = [
      new Sound("00002a1c", "./SprHeartblue0/sounds/00002a1c.wav"),
      new Sound("00002a1c2", "./SprHeartblue0/sounds/00002a1c2.wav"),
      new Sound("00002a1c3", "./SprHeartblue0/sounds/00002a1c3.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked9),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked10),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked11),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked12),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked13),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked14),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked15),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked16),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked17),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked18),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked19),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked20)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.keyPressed("w")) {
        while (!!this.keyPressed("w")) {
          this.direction = -90;
          this.y += 50;
          yield;
        }
        if (
          !(
            this.keyPressed("d") ||
            this.keyPressed("s") || this.keyPressed("a")
          )
        ) {
          this.direction = 90;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed("w") || this.keyPressed("d") || 0) {
        0;
      } else {
        if (!(this.costumeNumber === 2)) {
          if (this.direction === 90) {
            this.y -= 10;
          }
          if (this.direction === -90) {
            this.y += 10;
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.keyPressed("d")) {
        while (!!this.keyPressed("d")) {
          this.direction = 0;
          this.x += 50;
          yield;
        }
        this.direction = 90;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.keyPressed("a")) {
        while (!!this.keyPressed("a")) {
          this.direction = 180;
          this.x -= 50;
          yield;
        }
        this.direction = 90;
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    this.costume = "spr_heartblue_0";
    for (let i = 0; i < 10; i++) {
      this.stopAllSounds();
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.touching(this.sprites["Bones"].andClones())) {
        yield* this.startSound("00002a1c2");
        this.stage.vars.p2Hp--;
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    while (true) {
      if (this.touching(this.sprites["SprGasterblaster0"].andClones())) {
        yield* this.startSound("00002a1c3");
        this.stage.vars.p2Hp--;
      }
      yield;
    }
  }

  *whenKeySpacePressed() {
    this.costumeNumber++;
  }

  *whenGreenFlagClicked8() {
    this.goto(0, -150);
    this.costume = "spr_heartblue_2";
  }

  *whenGreenFlagClicked9() {
    while (true) {
      if (this.keyPressed("down arrow")) {
        this.y -= 10;
      }
      yield;
    }
  }

  *whenGreenFlagClicked10() {
    while (true) {
      if (this.keyPressed("left arrow")) {
        this.x -= 10;
      }
      yield;
    }
  }

  *whenGreenFlagClicked11() {
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.x += 10;
      }
      yield;
    }
  }

  *whenGreenFlagClicked12() {
    while (true) {
      if (this.keyPressed("up arrow")) {
        if (this.costumeNumber === 2) {
          this.y += 10;
        } else {
          if (this.direction === 90) {
            while (
              !(
                !this.keyPressed("up arrow") ||
                this.compare(20, this.stage.vars.jumpingLeft) < 0
              )
            ) {
              this.y += 15;
              this.stage.vars.jumpingLeft++;
              yield;
            }
            while (
              !(this.touching(Color.rgb(0, 102, 34)) || this.touching("edge"))
            ) {
              yield;
            }
            this.stage.vars.jumpingLeft = 0;
          }
          if (this.direction === -90) {
            while (
              !(
                !this.keyPressed("up arrow") ||
                this.compare(20, this.stage.vars.jumpingLeft) < 0
              )
            ) {
              this.y -= 55;
              this.stage.vars.jumpingLeft++;
              yield;
            }
            while (
              !(this.touching(Color.rgb(0, 102, 34)) || this.touching("edge"))
            ) {
              yield;
            }
            this.stage.vars.jumpingLeft = 0;
          }
          if (this.direction === 0) {
            while (
              !(
                !this.keyPressed("up arrow") ||
                this.compare(20, this.stage.vars.jumpingLeft) < 0
              )
            ) {
              this.x -= 55;
              this.stage.vars.jumpingLeft++;
              yield;
            }
            while (
              !(this.touching(Color.rgb(0, 102, 34)) || this.touching("edge"))
            ) {
              yield;
            }
            this.stage.vars.jumpingLeft = 0;
          }
          if (this.direction === 180) {
            while (
              !(
                !this.keyPressed("up arrow") ||
                this.compare(20, this.stage.vars.jumpingLeft) < 0
              )
            ) {
              this.x += 55;
              this.stage.vars.jumpingLeft++;
              yield;
            }
            while (
              !(this.touching(Color.rgb(0, 102, 34)) || this.touching("edge"))
            ) {
              yield;
            }
            this.stage.vars.jumpingLeft = 0;
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked13() {
    this.stage.vars.jumpingLeft = 0;
  }

  *whenGreenFlagClicked14() {
    while (true) {
      if (this.keyPressed("s")) {
        while (!!this.keyPressed("s")) {
          this.direction = 90;
          this.y -= 50;
          yield;
        }
        this.direction = 90;
      }
      yield;
    }
  }

  *whenGreenFlagClicked15() {
    while (true) {
      if (this.touching("edge")) {
        if (
          this.keyPressed("s") ||
          this.keyPressed("w") || this.keyPressed("d") || this.keyPressed("a")
        ) {
          yield* this.startSound("00002a1c");
          this.stage.vars.p2Hp--;
          while (!!this.touching("edge")) {
            yield;
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked16() {
    this.stage.vars.p2Hp = 92;
  }

  *whenIReceiveGameOver() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenGreenFlagClicked17() {
    this.visible = true;
  }

  *whenGreenFlagClicked18() {
    this.direction = 90;
  }

  *whenGreenFlagClicked19() {
    while (true) {
      if (this.costumeNumber === 1) {
        if (this.touching(Color.rgb(0, 102, 34))) {
          this.y += 10;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked20() {
    while (true) {
      if (this.touching(this.sprites["Bones2"].andClones())) {
        yield* this.startSound("00002a1c3");
        this.stage.vars.p2Hp--;
      }
      yield;
    }
  }
}
