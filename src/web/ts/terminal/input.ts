export const convertMouseButton = (btn: number): number | undefined => {
  switch (btn) {
    case 0: return 1; // Left
    case 1: return 3; // Middle
    case 2: return 2; // Right
    default: return undefined;
  }
};

export const convertMouseButtons = (btn: number): number | undefined => {
  if ((btn & 1) !== 0) return 1; // Left
  if ((btn & 2) !== 0) return 2; // Right
  if ((btn & 4) !== 0) return 3; // Middle
  return undefined;
};

enum BasicKeys {
  Digit1 = 2,
  Digit2 = 3,
  Digit3 = 4,
  Digit4 = 5,
  Digit5 = 6,
  Digit6 = 7,
  Digit7 = 8,
  Digit8 = 9,
  Digit9 = 10,
  Digit0 = 11,
  Minus = 12,
  Equal = 13,
  Backspace = 14,
  Tab = 15,
  KeyQ = 16,
  KeyW = 17,
  KeyE = 18,
  KeyR = 19,
  KeyT = 20,
  KeyY = 21,
  KeyU = 22,
  KeyI = 23,
  KeyO = 24,
  KeyP = 25,
  BracketLeft = 26,
  BracketRight = 27,
  Enter = 28,
  ControlLeft = 29,
  KeyA = 30,
  KeyS = 31,
  KeyD = 32,
  KeyF = 33,
  KeyG = 34,
  KeyH = 35,
  KeyJ = 36,
  KeyK = 37,
  KeyL = 38,
  Semicolon = 39,
  Quote = 40,
  Backquote = 41,
  ShiftLeft = 42,
  IntlBackslash = 43,
  KeyZ = 44,
  KeyX = 45,
  KeyC = 46,
  KeyV = 47,
  KeyB = 48,
  KeyN = 49,
  KeyM = 50,
  Comma = 51,
  Period = 52,
  Slash = 53,
  ShiftRight = 54,
  NumpadMultiply = 55,
  AltLeft = 56,
  Space = 57,
  CapsLock = 58,
  F1 = 59,
  F2 = 60,
  F3 = 61,
  F4 = 62,
  F5 = 63,
  F6 = 64,
  F7 = 65,
  F8 = 66,
  F9 = 67,
  F10 = 68,
  NumLock = 69,
  ScollLock = 70,
  Numpad7 = 71,
  Numpad8 = 72,
  Numpad9 = 73,
  NumpadSubtract = 74,
  Numpad4 = 75,
  Numpad5 = 76,
  Numpad6 = 77,
  NumpadAdd = 78,
  Numpad1 = 79,
  Numpad2 = 80,
  Numpad3 = 81,
  Numpad0 = 82,
  NumpadDecimal = 83,
  F11 = 87,
  F12 = 88,
  F13 = 100,
  F14 = 101,
  F15 = 102,

  // I have absolutely no clue about these. If someone has a keyboard
  // with these on, please confim that they're right.
  Kana = 112,
  Convert = 121,
  Noconvert = 123,
  Yen = 125,
  NumpadEquals = 141,
  Cimcumflex = 144,
  At = 145,
  Colon = 146,
  Underscore = 147,
  Kanji = 148,
  Stop = 149,
  Ax = 150,

  NumpadEnter = 156,
  ControlRight = 157,
  NumpadComma = 179,
  NumpadDivide = 181,
  AltRight = 184,
  Pause = 197,
  Home = 199,
  ArrowUp = 200,
  PageUp = 201,
  ArrowLeft = 203,
  ArrowRight = 205,
  End = 207,
  ArrowDown = 208,
  PageDown = 209,
  Insert = 210,
  Delete = 211,
}

export const convertKey = (key: string): number | undefined => {
  return BasicKeys[key as any] as any;
};
