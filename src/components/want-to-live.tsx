import { useRecoilValue } from "recoil";
import { wantToLiveCountries } from "../recoil/atoms";
import { H2 } from "../shared/styles";
import WantToLiveCountry from "./want-country";

function WantToLive() {
  const wantCountries = useRecoilValue(wantToLiveCountries);
  return (
    <>
      <H2>내가 살고 싶은 나라들</H2>);
      <ul>
        {wantCountries.map((countryName, idx) => (
          <WantToLiveCountry key={idx} country={countryName} />
        ))}
      </ul>
    </>
  );
}

export default WantToLive;
