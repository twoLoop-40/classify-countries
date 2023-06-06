import { ValuesAndSetter } from "../shared/types";

export default function addStates<T>([values, setValues]: ValuesAndSetter<T>) {
  return (item: T) => {
    if (values.includes(item)) {
      return values;
    } else {
      setValues((prev) => [...prev, item]);
      return values;
    }
  };
}
