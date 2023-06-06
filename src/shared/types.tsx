import { SetterOrUpdater } from "recoil";

type ValuesAndSetter<T> = [T[], SetterOrUpdater<T[]>];

export { SetterOrUpdater, ValuesAndSetter };
