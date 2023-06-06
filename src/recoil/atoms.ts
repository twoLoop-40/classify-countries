import { atom, DefaultValue } from "recoil";
function localStorageEffect<T>(key: string) {
  return ({
    setSelf,
    onSet
  }: {
    setSelf: (arg: T) => void;
    onSet: (
      setter: (
        newValue: T,
        oldValue: T | DefaultValue,
        isReset: boolean
      ) => void
    ) => void;
  }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue: T, _: T | DefaultValue, isReset: boolean) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
}

export const wishToGoCountries = atom<string[]>({
  key: "wishToGo",
  default: [],
  effects: [localStorageEffect("wishToGo")]
});

export const alreadyGoneCountries = atom<string[]>({
  key: "alreadyGone",
  default: [],
  effects: [localStorageEffect("alreadyGone")]
});

export const wantToLiveCountries = atom<string[]>({
  key: "wantToLive",
  default: [],
  effects: [localStorageEffect("wantToLove")]
});
