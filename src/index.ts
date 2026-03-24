import { fetchProducts } from "./api";
import { validateProduct } from "./validator";
import { createJiraTicket } from "./jira";

async function run() {
  const products = await fetchProducts();

  for (const product of products) {
    const errors = validateProduct(product);

    if (errors.length > 0) {
      const summary = `Product ${product.id} has invalid data`;
      const description = `Errors:\n${errors.join("\n")}`;

      console.log(`Creating Jira Ticket for product ${product.id}`);

      await createJiraTicket({
        projectKey: "YOUR_PROJECT_KEY", // Replace with your Jira project key
        summary,
        description,
        issuetype: "Task",
      });
    } else {
      console.log(`Product ${product.id} is valid`);
    }
  }
}

run();