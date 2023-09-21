import styled from '@emotion/styled';

const PageHeader = () => (
  <Header>
    <Title>페이지 헤더</Title>
  </Header>
);

const Header = styled.nav`
  display: flex;
  padding: 16px 32px;
  margin-bottom: 16px;
  border-bottom: 1px solid #c0c0c0;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
`;

export default PageHeader;
