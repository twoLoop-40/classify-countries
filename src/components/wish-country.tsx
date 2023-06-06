import { useRecoilState } from "recoil";
import { CompareProc, makeSame } from "../shared/util";
import { wishToGoCountries } from "../recoil/atoms";
import deleteStates from "../states-dealers/delete-state";
import styled from "styled-components";
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

interface WishCountryProps {
  country: string;
}
function WishCountry({ country }: WishCountryProps) {
  const isSameCountry: CompareProc<string> = makeSame<string>(
    (arg1, arg2) => arg1 === arg2
  );
  const [wishCountries, haveBeenToCountries] = [
    useRecoilState(wishToGoCountries),
    useRecoilState(alreadyGoneCountries)
  ];
  const deleteCountries = deleteStates(wishCountries, isSameCountry);
  const switchCountries = switchState<string>(
    isSameCountry,
    wishCountries,
    haveBeenToCountries
  );
  const onSwitchClick = () => {
    switchCountries(country);
  };
  const onDeleteClick = () => {
    deleteCountries(country);
  };
  return (
    <List>
      {country}
      <Button onClick={onSwitchClick}>
        <span role="img">✅</span>
      </Button>
      <Button onClick={onDeleteClick}>
        <span role="img">🗑</span>
      </Button>
    </List>
  );
}

export default WishCountry;
