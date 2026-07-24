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

const getProducts = async (params = {}) => {
    const { q, category } = params;

    // 1. Fetch categories (collections)
    const collectionsQuery = `
    query {
      collections(first: 20) {
        edges {
          node {
            id
            title
            handle
          }
        }
      }
    }
    `;

    let categories = [];
    try {
        const catData = await executeQuery(collectionsQuery);
        categories = catData.collections.edges.map(edge => edge.node);
    } catch {
        categories = [];
    }

    // 2. Fetch products based on category and search query
    let products = [];

    if (category) {
        const collectionQuery = `
        query($handle: String!) {
          collection(handle: $handle) {
            products(first: 20) {
              edges {
                node {
                  id
                  title
                  description
                  handle
                  featuredImage {
                    url
                  }
                  priceRange {
                    minVariantPrice {
                      amount
                      currencyCode
                    }
                  }
                  collections(first: 5) {
                    edges {
                      node {
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
        }
        `;

        const data = await executeQuery(collectionQuery, { handle: category });
        products = data.collection ? data.collection.products.edges.map(item => item.node) : [];

        if (q && q.trim()) {
            const searchTerm = q.trim().toLowerCase();
            products = products.filter(p => p.title.toLowerCase().includes(searchTerm));
        }
    } else if (q && q.trim()) {
        const searchQuery = `
        query($search: String!) {
          products(first: 20, query: $search) {
            edges {
              node {
                id
                title
                description
                handle
                featuredImage {
                  url
                }
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                collections(first: 5) {
                  edges {
                    node {
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

        const data = await executeQuery(searchQuery, {
            search: `title:*${q.trim()}*`
        });
        products = data.products.edges.map(item => item.node);
    } else {
        const query = `
        query {
          products(first: 20) {
            edges {
              node {
                id
                title
                description
                handle
                featuredImage {
                  url
                }
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                collections(first: 5) {
                  edges {
                    node {
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
        products = data.products.edges.map(item => item.node);
    }

    return {
        products,
        categories
    };
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