import React from 'react';
import { Link, graphql } from 'gatsby';

import { PageHelmet } from '../components/PageHelmet';
import Hero from '../components/Home/Hero';
import Introduction from '../components/Home/Introduction';
import Offerings from '../components/Home/Offerings';
import Products from '../components/Home/Products';
import Team from '../components/Home/Team';
import Advistor from '../components/Home/Advistor';
import Partnerships from '../components/Home/Partnerships';
import Investors from '../components/Home/Investors';
import Hiring from '../components/Home/Hiring';

// ********************************* UI Template (Shared with CMS) *********************************
export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  hero,
  description,
  intro,
  offerings,
  products,
  team,
  advisors,
  investors,
  partnerships,
  hiring,
}) => (
  <div>
    <PageHelmet title={title} description={description} />
    <Hero {...hero} />
    <Introduction {...intro} />
    <Offerings {...offerings} />
    <Products {...products} />
    <Team {...team} />
    <Advistor {...advisors} />
    <Investors {...investors} />
    <Partnerships {...partnerships} />
    <Hiring {...hiring} />
  </div>
);

// ********************************* Render page *********************************
const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return <IndexPageTemplate {...frontmatter} />;
};

export default IndexPage;

// ********************************* Data graphql *********************************
export const pageQuery = graphql`
  query IndexPageWithId($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        subheading
        description
        hero {
          title
          description
          comingDate
          banner {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
          }
        }
        intro {
          heading
          content
          img {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
          }
        }
        offerings {
          heading
          content
          list {
            title
            items
          }
        }
        products {
          heading
          products {
            title
            content
            img {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    src
                    srcSet
                    aspectRatio
                    sizes
                    base64
                  }
                }
              }
            }
            list
          }
        }
        team {
          heading
          content
        }
        advisors {
          heading
        }
        investors {
          heading
          list {
            title
            url
            img {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    src
                    srcSet
                    aspectRatio
                    sizes
                    base64
                  }
                }
              }
            }
          }
        }
        partnerships {
          heading
          list {
            title
            icon {
              image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
                extension
                publicURL
              }
            }
          }
        }
        hiring {
          heading
          content
          link
          linkText
        }
      }
    }
  }
`;
