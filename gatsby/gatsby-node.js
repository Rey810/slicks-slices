import path from "path";

async function turnPizzasIntoPages({ graphql, actions }) {
  //  1. Get a template for this page
  const pizzaTemplate = path.resolve("./src/templates/Pizza.js");
  //  2. Query all pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  //  3. Loop over each pizza and create a page for that pizza
  console.log(data);
  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  //  create pages dynamically
  // 1. Pizzas
  await turnPizzasIntoPages(params);
  // 2. Toppings
  // 3. Slicemasters
}
