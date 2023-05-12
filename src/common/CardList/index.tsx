import { FC, ReactNode } from "react";
import FeedCardListLayout from "@/components/Feed/FeedCardListLayout";
import styled from "@emotion/styled";
import FeedCard from "@/components/Feed/FeedCard";
import { css } from "@emotion/react";
import { FeedCardListProps } from "@/components/Feed/FeedCardList";

const CardList: FC<FeedCardListProps> = ({ title, icon, cardList }) => {
  return (
    <FeedCardListLayout>
      {/* title */}
      {title && (
        <CategoryContainer>
          {icon && <span>{icon}</span>}
          <h3>{title}</h3>
        </CategoryContainer>
      )}
      {/* cardList */}

      <div
        css={css`
          padding: 30px;
        `}
      >
        {cardList && cardList.length !== 0 ? (
          <CardListContainer>
            {cardList.map(
              (card) =>
                card !== null && (
                  <FeedCard
                    key={card?.id}
                    title={card?.title}
                    type={card?.type}
                    category={card?.category}
                    startDate={card?.startDate}
                    link={card?.link}
                  />
                )
            )}
          </CardListContainer>
        ) : (
          <div
            css={css`
              color: #ffff;
              text-align: center;
            `}
          >
            No data available
          </div>
        )}
      </div>
    </FeedCardListLayout>
  );
};

export default CardList;

const CategoryContainer = styled.div`
  display: flex;
  gap: 5px;
  border-bottom: 1px solid rgba(225, 225, 225, 0.07);
  padding: 10px 30px;
  align-items: center;
  color: #29a19c;
  margin: 0 20px;

  & > span {
    color: #ecca75;
  }
`;

const CardListContainer = styled.div<FeedCardListProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 20px;
  padding-bottom: 10px;
  overflow: auto;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
    :hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;