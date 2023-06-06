import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import addStates from "../states-dealers/add-state";
import { wishToGoCountries } from "../recoil/atoms";
import { H2 } from "../shared/styles";
import WishCountry from "./wish-country";

const Input = styled.input`
  display: block;
  width: 20rem;
  height: 2rem;
  border-radius: 0.375rem;
  border: none;
  padding: 0.375rem 0.5rem 0.375rem 0.5rem;
  color: #7f1d1d;
  box-shadow: 0 0 0 1px #fbbf24 inset;

  ::placeholder {
    color: #fbbf24;
  }

  &:focus {
    box-shadow: 0 0 0 2px #f87171 inset;
  }
`;

type ErrorMessageProps = {
  isError: boolean;
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 21rem;
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

const ErrorMessage = styled.div`
  display: ${(props: ErrorMessageProps) =>
    props.isError === false ? "none" : null};
  width: 20rem;
  height: 0.5rem;
  border-radius: 0.375rem;
  border: none;
  padding-top: 0.25rem;
  padding-right: 0.25rem;
  padding-left: 0.25rem;
  padding-bottom: 1rem;
  color: #dcdde1;
  background-color: #2f3640;
  text-align: center;
  margin-right: 0.25rem;
  margin-left: 0.25rem;
`;

type CountryInput = {
  country: string;
};

function WishToGo() {
  const [wishCountries, setWishCountries] = useRecoilState(wishToGoCountries);
  const addCountries = addStates([wishCountries, setWishCountries]);
  const {
    register,
    resetField,
    formState: { errors },
    setError,
    handleSubmit
  } = useForm<CountryInput>();

  const onSubmit = (data: CountryInput) => {
    const countryName = data.country.trim();
    if (!countryName) {
      setError(
        "country",
        { message: "나라 이름을 입력하세요" },
        { shouldFocus: true }
      );
    } else {
      addCountries(data.country);
      resetField("country");
    }
  };

  return (
    <>
      <H2>내가 가고싶은 나라들</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("country")} />
        <ErrorMessage isError={Boolean(errors.country)}>
          {errors.country?.message}
        </ErrorMessage>
        <Button>가자!</Button>
      </form>
      <ul>
        {wishCountries.map((countryName, idx) => (
          <WishCountry key={idx} country={countryName} />
        ))}
      </ul>
    </>
  );
}

export default WishToGo;
