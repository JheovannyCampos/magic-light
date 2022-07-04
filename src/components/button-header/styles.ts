import styled from "styled-components";

interface TypeProps {
  isFooter: boolean;
}

export const Container = styled.div`
  display: inline-block;
  width: fit-content;
  margin: 1rem;
  cursor: pointer;
`;

export const Title = styled.span<TypeProps>`
  font-size: 22px;
  color: ${({ isFooter }) => (isFooter ? "#ffffff" : "#8f8d8d")};
  margin: 0 auto;

  &:hover {
    margin-top: ${({ isFooter }) => (isFooter ? "0px" : "2px")};
    border-bottom: ${({ isFooter }) => (isFooter ? "" : "2px solid #ffd000")};
    color: ${({ isFooter }) => (isFooter ? "#ffd000" : "#0286ad")};
  }
`;
