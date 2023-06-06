import { SetterOrUpdater } from "recoil";
import { CompareProc } from "../shared/util";
import addStates from "./add-state";
import deleteStates from "./delete-state";

type ValuesAndSetter<T> = [T[], SetterOrUpdater<T[]>];

function switchState<T>(
  isSameItems: CompareProc<T>,
  [sourceValues, setSourceValues]: ValuesAndSetter<T>,
  [targetValues, setTargetValues]: ValuesAndSetter<T>
): (item: T) => void {
  const updateValue = (
    item: T,
    values: T[],
    setValues: SetterOrUpdater<T[]>
  ) => {
    if (values.includes(item)) {
      deleteStates<T>([values, setValues], isSameItems)(item);
    } else {
      addStates<T>([values, setValues])(item);
    }
  };
  return (item: T): void => {
    updateValue(item, sourceValues, setSourceValues);
    updateValue(item, targetValues, setTargetValues);
  };
}

export default switchState;
