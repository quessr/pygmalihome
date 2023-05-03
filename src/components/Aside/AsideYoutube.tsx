import CardHeader from "@/components/Feed/FeedCardHeader.tsx";
import AsideLayout from "./AsideLayout";
import { StyledAsideHeader } from "./AsideStatus";
import { AsideProps } from ".";
import { FC } from "react";
import styled from "@emotion/styled";
import SectionBodyListItem from "@/common/SectionBodyListItem";
import { css } from "@emotion/react";
import { Triangle as Loading } from "react-loader-spinner";

export interface AsideYoutubeProps extends Pick<AsideProps, "youtubeList"> {
  isLoading?: boolean;
}

const AsideYoutube: FC<AsideYoutubeProps> = ({ youtubeList, isLoading }) => {
  return (
    <AsideLayout>
      {/* Header */}
      <StyledAsideHeader>Youtube</StyledAsideHeader>

      {/* Body */}
      {isLoading ? (
        <LoadingContainer>
          <Loading color="#29A19C" height="40px" width="40px" />
        </LoadingContainer>
      ) : (
        <StyledAsideYoutubeBody>
          {youtubeList &&
            youtubeList.map(({ id, ...rest }) => (
              <SectionBodyListItem key={id} {...rest} />
            ))}
        </StyledAsideYoutubeBody>
      )}
    </AsideLayout>
  );
};

export default AsideYoutube;

const StyledAsideYoutubeBody = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 12px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`;
