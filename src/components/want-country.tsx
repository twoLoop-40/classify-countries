import { useRecoilState } from "recoil";
import styled from "styled-components";
import { CompareProc, makeSame } from "../shared/util";
import { wantToLiveCountries } from "../recoil/atoms";
import { alreadyGoneCountries } from "../recoil/atoms";
import switchState from "../states-dealers/switch-states";

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  padding-top: 0.5rem;
  padding-right: 0.25rem;
  padding-left: 0.25rem;
  padding-bottom: 1rem;
  color: #dcdde1;
  background-color: #2f3640;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-right: 0.375rem;
  margin-top: 0.25rem;
`;

const List = styled.li`
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: whitesmoke;
`;

interface WantToLiveCountryProps {
  country: string;
}
function WantToLiveCountry({ country }: WantToLiveCountryProps) {
  const isSameCountry: CompareProc<string> = makeSame<string>(
    (arg1, arg2) => arg1 === arg2
  );
  const [haveBeenToCountries, wantCountries] = [
    useRecoilState(alreadyGoneCountries),
    useRecoilState(wantToLiveCountries)
  ];

  const switchHaveWantCountries = switchState<string>(
    isSameCountry,
    haveBeenToCountries,
    wantCountries
  );

  const onSwitchHaveWantClick = () => {
    switchHaveWantCountries(country);
  };
  return (
    <List>
      {country}
      <Button onClick={onSwitchHaveWantClick}>
        <span role="img">👎</span>
      </Button>
    </List>
  );
}

export default WantToLiveCountry;
