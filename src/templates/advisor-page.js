import React from 'react';
import { kebabCase } from 'lodash';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import { TeamPageTemplate } from './team-page';


const AdvisorPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <TeamPageTemplate
      content={post.html}
      contentComponent={HTMLContent}
      data={post.frontmatter}
      isAdvisor
      currSlug={post.fields.slug}
    />
  );
};

export default AdvisorPage;

export const pageQuery = graphql`
  query AdvistorByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        name
        position
        linkedin
        twitter
        profileImg {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
