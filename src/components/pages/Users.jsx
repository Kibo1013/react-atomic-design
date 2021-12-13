import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organism/user/UserCard";
// import { useLocation } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
// import { useContext } from "react";
// import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "../../store/UserState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `SEKINE_${val}`,
    img: "https://source.unsplash.com/lylytYIVMnI",
    email: "aaa@aaa",
    phone: "000-000-0000",
    company: { name: "abc" },
    website: "https://google.com"
  };
});

export const Users = () => {
  // const { state } = useLocation();
  // const isAdmin = state ? state.isAdmin : false;
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };
  return (
    <SContainer>
      <h2>This is Top Usres Page!!!</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>Switch</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
