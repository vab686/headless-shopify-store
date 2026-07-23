const shopify = require("../config/shopify");

const executeQuery = async (query, variables = {}) => {
    const response = await shopify.post("", {
        query,
        variables
    });

    if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
    }

    return response.data.data;
};

const getProducts = async () => {

    const query = `
    query{
      products(first:20){
        edges{
          node{
            id
            title
            description
            handle
            featuredImage{
              url
            }
            priceRange{
              minVariantPrice{
                amount
                currencyCode
              }
            }
            collections(first:5){
              edges{
                node{
                  id
                  title
                  handle
                }
              }
            }
          }
        }
      }
    }
  `;

    const data = await executeQuery(query);

    return data.products.edges.map(item => item.node);
};

const getProductByHandle = async (handle) => {

    const query = `
    query($handle:String!){
      product(handle:$handle){
        id
        title
        description
        handle

        featuredImage{
          url
        }

        images(first:10){
          edges{
            node{
              url
            }
          }
        }

        variants(first:20){
          edges{
            node{
              id
              title
              availableForSale
              price{
                amount
                currencyCode
              }
            }
          }
        }

        collections(first:5){
          edges{
            node{
              id
              title
              handle
            }
          }
        }
      }
    }
  `;

    const data = await executeQuery(query, { handle });

    return data.product;
};

const searchProducts = async (search) => {

    const query = `
    query($search:String!){
      products(first:20,query:$search){
        edges{
          node{
            id
            title
            handle

            featuredImage{
              url
            }

            priceRange{
              minVariantPrice{
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

    const data = await executeQuery(query, {
        search: `title:*${search}*`
    });

    return data.products.edges.map(item => item.node);
};

const getProductsByCollection = async (handle) => {

    const query = `
    query($handle:String!){
      collection(handle:$handle){
        products(first:20){
          edges{
            node{
              id
              title
              handle

              featuredImage{
                url
              }

              priceRange{
                minVariantPrice{
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  `;

    const data = await executeQuery(query, { handle });

    if (!data.collection) {
        return [];
    }

    return data.collection.products.edges.map(item => item.node);
};

module.exports = {
    getProducts,
    getProductByHandle,
    searchProducts,
    getProductsByCollection
};