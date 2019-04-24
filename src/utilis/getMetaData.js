import { graphql, useStaticQuery } from 'gatsby';

export const metaQuery = graphql`
  query SITE_METADATA_QUERY {
    site {
      siteMetadata {
        meta {
          title
          description
        }
        hubspot {
          portalID
          form {
            whitelist
            subscribe
            contact
            listing
          }
        }
      }
    }
  }
`

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(metaQuery);
  return site.siteMetadata;
};
