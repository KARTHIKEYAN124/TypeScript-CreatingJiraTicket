// jira.ts
import axios from "axios";

interface JiraPayload {
  projectKey: string;
  summary: string;
  description: string;
  issuetype: string;
}

export async function createJiraTicket(payload: JiraPayload) {
  try {
    const response = await axios.post(
      "https://yourdomain.atlassian.net/rest/api/3/issue",
      {
        fields: {
          project: { key: payload.projectKey },
          summary: payload.summary,
          description: payload.description,
          issuetype: { name: payload.issuetype },
        },
      },
      {
        auth: {
          username: "your-email@example.com", // Replace with your email
          password: "your-api-token",         // Replace with Jira API token
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Jira ticket created:", response.data.key);
  } catch (error: any) {
    console.error("Error Creating Jira ticket:", error.message);
  }
}