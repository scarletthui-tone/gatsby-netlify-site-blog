import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

import { Link } from 'gatsby';
import { pageUrls } from '../../../config/pageSetting';
import Box from '../../Atoms/Box';
import PreviewCompatibleImage from '../../PreviewCompatibleImage';

const CardWrapper = styled.article`
  ${space}
`;

const StyledCard = styled.div`
  width: 100%;
  max-width: 280px;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  user-select: none;
  color: ${props => props.theme.color.darkBlue};
  background: white;
  border-radius: 5px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,0.2);
  transition: box-shadow 100ms ease-in;
  img.team-img {
    object-fit: cover;
  }
  a {
    color: inherit;
    transition: color 100ms ease-in;
  }
   &:hover {
     box-shadow: 0 0.25rem 0.5rem rgba(0,0,0,0.3);
     a {
      text-decoration: none;
      color: ${props => props.theme.color.tealish};
     }
   }
`;

const CardImage = styled.figure`
  position: relative;
  margin: 0;
`;

const CardTitle = styled.h5`
  margin: 0;
  padding: 4px 0;
  font-size: 16px;
`;

const CardSubtitle = styled.div`
  font-size: 12px;
  padding-bottom: 4px;
`;

const TeamCard = ({
  url, data, ...rest
}) => (
  <CardWrapper className="team-card" px={1} {...rest}>
    <StyledCard>
      <Link to={url}>
        <CardImage>
          <PreviewCompatibleImage imageInfo={data.profileImage} />
        </CardImage>
        <Box p={2} textAlign="left">
          <CardTitle m={0}>
            {data.name}
          </CardTitle>
          <CardSubtitle>
            {data.position}
          </CardSubtitle>
        </Box>
      </Link>
    </StyledCard>
  </CardWrapper>
);

export default TeamCard;
