import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organism/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

const user = {
  name: "SEKINE",
  img: "https://source.unsplash.com/lylytYIVMnI",
  email: "aaa@aaa",
  phone: "000-000-0000",
  company: { name: "abc" },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton children="TEST01" />
        <SecondaryButton children="TEST02" />
        <br />
        <SearchInput />
        <br />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
