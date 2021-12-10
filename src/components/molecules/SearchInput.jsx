import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import styled from "styled-components";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="Keyword" />
      <SButtonWrapper>
        <PrimaryButton children="Search Input Button" />
      </SButtonWrapper>
    </SContainer>
  );
};

const SButtonWrapper = styled.div`
  padding-left: 8px;
  align-items: center;
`;

const SContainer = styled.div`
  display: flex;
`;
