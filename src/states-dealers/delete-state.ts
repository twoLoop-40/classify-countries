import { ValuesAndSetter } from "../shared/types";
import { CompareProc } from "../shared/util";

export default function deleteStates<T>(
  [values, setValues]: ValuesAndSetter<T>,
  isSameItems: CompareProc<T>
) {
  return (item: T) => {
    if (values.includes(item)) {
      setValues((prev) =>
        prev.filter((oldItem) => !isSameItems(item, oldItem))
      );
      return values;
    } else {
      return values;
    }
  };
}
