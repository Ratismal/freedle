export const approach = [
  'sfx/voice/approach1.ogg',
  'sfx/voice/approach2.ogg'
];

export const birdie = [
  'sfx/voice/birdie1.ogg',
  'sfx/voice/birdie2.ogg',
  'sfx/voice/birdie3.ogg'
];

export const doubleEagle = [
  'sfx/voice/double_eagle1.ogg',
  'sfx/voice/double_eagle2.ogg'
];

export const eagle = [
  'sfx/voice/eagle1.ogg',
  'sfx/voice/eagle2.ogg'
];

export const holeInOne = [
  'sfx/voice/hole_in_one1.ogg'
];

export const niceIn = [
  'sfx/voice/in1.ogg',
  'sfx/voice/in2.ogg',
  'sfx/voice/in3.ogg'
];

export const niceOn = [
  'sfx/voice/on1.ogg',
  'sfx/voice/on2.ogg',
  'sfx/voice/on3.ogg'
];

export const par = [
  'sfx/voice/par1.ogg',
  'sfx/voice/par2.ogg'
];

export const niceShot = [
  'sfx/voice/shot1.ogg',
  'sfx/voice/shot2.ogg',
  'sfx/voice/shot3.ogg'
];

export const sixthTry = [
  ...approach,
  ...niceOn,
  ...niceShot,
  ...niceIn
];

export const tryAgain = [
  'sfx/voice/try_again.ogg',
  'sfx/voice/try_again2.ogg',
  'sfx/voice/try_again3.ogg'
];

export const niceCock = [
  'sfx/voice/nice_cock1.ogg',
  'sfx/voice/nice_cock2.ogg',
  'sfx/voice/nice_cock3.ogg'
];

export const niceCockReverb = [
  'sfx/voice/nice_cockr1.ogg',
  'sfx/voice/nice_cockr2.ogg',
  'sfx/voice/nice_cockr3.ogg'
];

export const ffNiceShot = ['sfx/fanfare/nice_shot.ogg'];
export const ffPoint = ['sfx/fanfare/point.ogg'];
export const ffSpare = ['sfx/fanfare/spare.ogg'];
export const ffStrike = ['sfx/fanfare/strike.ogg'];

export const miss = ['sfx/misc/miss.ogg'];
export const aww = ['sfx/misc/aww.ogg'];

const sfx = {
  approach,
  birdie,
  doubleEagle,
  eagle,
  holeInOne,
  niceIn,
  niceOn,
  par,
  niceShot,
  tryAgain,
  niceCock,
  niceCockReverb,
  sixthTry,
  ffNiceShot,
  ffPoint,
  ffSpare,
  ffStrike,
  miss,
  aww
};

export default function getSfx (name) {
  const registry = sfx[name];
  if (!registry) {
    throw new Error('Invalid sound clip registry.');
  }

  const index = Math.floor(Math.random() * registry.length);
  console.log(index);
  return registry[index];
}
