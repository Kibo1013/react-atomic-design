import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserInfo } from "../../molecules/user/UserInfo";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserInfo image={user.img} name={user.name} />
      <SDl>
        <dt>MAIL</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>COM</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
