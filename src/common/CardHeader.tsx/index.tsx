import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

interface CardHeaderProps {
  image?: string;
  category?: string;
  color?: "primary" | "secondary";
}

const CardHeader: FC<CardHeaderProps> = ({
  image,
  category,
  color = "secondary",
}) => {
  return (
    <CardHeaderContainer>
      <AgencyImage src={image} />
      <Title color={color}>{category}</Title>
    </CardHeaderContainer>
  );
};

export default CardHeader;

export const CardHeaderContainer = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

export const AgencyImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  background-color: skyblue;
  border-radius: 7.5rem;
`;

const Title = styled.h3<Pick<CardHeaderProps, "color">>`
  color: ${(props) => (props.color === "primary" ? "#29A19C" : "#ffff")};
  display: flex;
  align-items: center;
`;
