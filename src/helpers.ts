export const isOnMobile = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
};

export const splitStringToArrayOfChars = (text: string) => {
  let characters: string[] = [];
  for (let i = 0; i < text.length; i++) {
    characters.push(text[i]);
  }
  return characters;
};

export interface FlowFieldEffectConfig {
  framesPerSecond: number;
  cellSize: number; // >10 for best performance
  lineWidth: number;
  vr: number; // velocity of how fast radius changes
  gradientColors: { offset: number; color: string }[]; // example [{0.1, "#ff5c33"}, {0.2, "#ff66b3"}]
  sizeOfMouse: number; // something between 10-50 for best result
  lineLength: { min: number; max: number };
  angleMultiplier: { x: number; y: number };
  radiusClampValues: { min: number; max: number };
}
