import { useRecoilValue } from "recoil";
import { alreadyGoneCountries } from "../recoil/atoms";
import { H2 } from "../shared/styles";
import HaveBeenToCountry from "./have-country";

function HaveBeenTo() {
  const haveBeenToCountries = useRecoilValue(alreadyGoneCountries);
  return (
    <>
      <H2>가본 나라들</H2>;
      <ul>
        {haveBeenToCountries.map((countryName, idx) => (
          <HaveBeenToCountry key={idx} country={countryName} />
        ))}
      </ul>
    </>
  );
}

export default HaveBeenTo;
