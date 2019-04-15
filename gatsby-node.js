const get = require('lodash/get');
const uniq = require('lodash/uniq');
const kebabCase = require('lodash/kebabCase');
const includes = require('lodash/includes');
const pull = require('lodash/pull');
const some = require('lodash/some');

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

const { langList, DEFAULT_LANG } = require('./src/config/langSetting');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
      const { id } = edge.node;
      let { slug } = edge.node.fields;
      let currLang = DEFAULT_LANG;

      if (!edge.node.frontmatter.templateKey) {
        return;
      }

      console.log(`slug: ${slug}`);

      // TODO: better loop?
      some(pull(langList, DEFAULT_LANG), (lang) => {
        console.log(`looping lang: ${lang}`);

        if (includes(slug, `--${lang}/`)) {
          console.log('include lang!');

          currLang = lang;
          slug = `/${lang}${slug.replace(`--${lang}/`, '/')}`;
          return true;
        }
        return false;
      });

      console.log(`rewrite slug: ${slug.replace('/home/', '/').replace('/index/', '/')}`);

      createPage({
        path: slug.replace('/home/', '/').replace('/index/', '/'), // handle home page and index
        tags: edge.node.frontmatter.tags,
        component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
        // additional data can be passed via context as this.props.pageContext
        context: {
          id,
          lang: currLang,
        },
      });

      console.log('-------------------------');
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = uniq(tags);

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve('src/templates/tags.js'),
        context: {
          tag,
        },
      });
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  // create page that is not a md for all lang
  langList.forEach((lang) => {
    createPage({
      ...page,
      path: `/${lang}${page.path}`,
      context: {
        ...page.context,
        lang,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  console.log(node.path);

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }
};
