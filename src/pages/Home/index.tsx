/* eslint-disable react/jsx-no-bind */
import React from "react";
import { Input } from "../../components/Form/Input/Input";

interface IAppState {
  email: string;
  password: string;
}
const Home: React.FC = () => {
  const [home, setHome] = React.useState<IAppState>({
    email: "",
    password: "",
  });

  const handleChange = (name: string | number, value: string | number) => {
    setHome({ ...home, [name]: value });
  };
  return (
    <>
      Home
      <Input
        type="text"
        name="email"
        value={home.email}
        handleChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        value={home.password}
        handleChange={handleChange}
      />
    </>
  );
};

export default Home;
