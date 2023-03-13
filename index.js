import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import SprSansbFace0 from "./SprSansbFace0/SprSansbFace0.js";
import SprSansbTorso0 from "./SprSansbTorso0/SprSansbTorso0.js";
import SprSansbLegs0 from "./SprSansbLegs0/SprSansbLegs0.js";
import SprHeartblue0 from "./SprHeartblue0/SprHeartblue0.js";
import Bones from "./Bones/Bones.js";
import SprGasterblaster0 from "./SprGasterblaster0/SprGasterblaster0.js";
import SprHeartshards1 from "./SprHeartshards1/SprHeartshards1.js";
import SprGameoverbg0 from "./SprGameoverbg0/SprGameoverbg0.js";
import SprFightbtCenter0 from "./SprFightbtCenter0/SprFightbtCenter0.js";
import Platformers from "./Platformers/Platformers.js";
import Stop from "./Stop/Stop.js";
import Button4 from "./Button4/Button4.js";
import Bones2 from "./Bones2/Bones2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  SprSansbFace0: new SprSansbFace0({
    x: -3,
    y: 30,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  SprSansbTorso0: new SprSansbTorso0({
    x: -3,
    y: 30,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  SprSansbLegs0: new SprSansbLegs0({
    x: -3,
    y: 30,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  SprHeartblue0: new SprHeartblue0({
    x: 0,
    y: -150,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Bones: new Bones({
    x: -46,
    y: 16,
    direction: 158.31770838675507,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  SprGasterblaster0: new SprGasterblaster0({
    x: -46,
    y: 16,
    direction: 164.5114985570903,
    costumeNumber: 7,
    size: 70,
    visible: false,
    layerOrder: 4
  }),
  SprHeartshards1: new SprHeartshards1({
    x: 40,
    y: -50,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  SprGameoverbg0: new SprGameoverbg0({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  SprFightbtCenter0: new SprFightbtCenter0({
    x: -6,
    y: -108,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Platformers: new Platformers({
    x: 240,
    y: 180,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Stop: new Stop({
    x: 208,
    y: 171,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  Button4: new Button4({
    x: 152,
    y: 174,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 11
  }),
  Bones2: new Bones2({
    x: 240,
    y: 180,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
