import { MdLocalPizza as icon } from "react-icons/md";

import PriceInput from "../components/PriceInput";

export default {
  // Computer name
  name: "pizza",
  // visible title
  title: "Pizzas",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Pizza name",
      type: "string",
      description: "Name of the pizza",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the pizza in cents.",
      validation: (Rule) => Rule.min(1000),
      // TODO: add custom component
      inputComponent: PriceInput,
    },
    {
      name: "toppings",
      title: "Toppings",
      type: "array",
      of: [{ type: "reference", to: [{ type: "topping" }] }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      topping0: "toppings.0.name",
      topping1: "toppings.1.name",
      topping2: "toppings.2.name",
      topping3: "toppings.3.name",
      is0Veg: "toppings.0.vegetarian",
      is1Veg: "toppings.1.vegetarian",
      is2Veg: "toppings.2.vegetarian",
      is3Veg: "toppings.3.vegetarian",
    },
    prepare: ({
      title,
      media,
      is0Veg,
      is1Veg,
      is2Veg,
      is3Veg,
      ...toppings
    }) => {
      const tops = Object.values(toppings).filter(Boolean);

      // remove undefined (when there aren't 4 toppings
      const isVeg = [is0Veg, is1Veg, is2Veg, is3Veg]
        .filter((topping) => topping !== undefined)
        // make sure there are only true values for "isVeg"
        .every((isVeg) => isVeg);

      return {
        title: `${title} ${isVeg ? "(v.)" : ""}`,
        media,
        subtitle: Object.values(tops).join(", "),
      };
    },
  },
};
