# TypeScript-CreatingJiraTicket
This project is a TypeScript-based backend application that processes a list of products, validates them based on predefined rules, and automatically creates Jira tickets for invalid products.
# 🛠️ TypeScript Product Validation & Jira Integration

## 📌 Project Description

This project is a **TypeScript-based backend application** that processes a list of products, validates them based on predefined rules, and automatically creates Jira tickets for invalid products.

It simulates a real-world **Content-Tech / Data Processing workflow**, where product data is:

1. Retrieved or defined
2. Validated against business rules
3. Logged if valid ✅
4. Sent to Jira as an issue if invalid ❌

---

## 🚀 Features

* ✅ Product validation logic
* 🔄 Iterative processing of multiple products
* 🐞 Automatic Jira ticket creation for invalid products
* ⚠️ Error handling for failed API requests
* 📜 Console-based logging for tracking workflow

---

## 📂 Project Structure

```
Typescript-project-Basic/
│
├── src/
│   ├── index.ts        # Main entry point
│   ├── validator.ts    # Product validation logic
│   ├── jira.ts         # Jira API integration
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/typescript-product-validation.git
cd typescript-product-validation
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the project

```bash
npx ts-node src/index.ts
```

---

## 🧪 Sample Output

```
Product 1 is valid
Creating Jira Ticket for product 2
Error Creating Jira ticket: Request failed with status code 400
Product 3 is valid
Creating Jira Ticket for product 4
Error Creating Jira ticket: Request failed with status code 400
...
```

---

## 🔍 How It Works

### Step 1: Product Processing

* A list of products is iterated one by one.

### Step 2: Validation

* Each product is checked against validation rules.
* Valid products → Logged in console
* Invalid products → Sent for Jira ticket creation

### Step 3: Jira Integration

* API call is made to create a Jira issue.
* If the request fails (e.g., status code 400), an error is logged.

---

## ❗ Common Errors

### 🔴 Jira टिकट creation failed (400 error)

Possible reasons:

* Invalid payload format
* Missing required fields
* Incorrect API credentials
* Wrong Jira endpoint

---

## 🔧 Improvements (Next Steps)

* ✅ Add environment variables for API keys
* ✅ Improve validation rules
* ✅ Add retry mechanism for failed Jira requests
* ✅ Store logs in a file instead of console
* ✅ Add unit tests using Jest

---

## 🧠 Learning Outcomes

This project helps you understand:

* TypeScript fundamentals
* API integration (Jira)
* Error handling in async operations
* Real-world backend workflows
* Data validation patterns

---

## 🤝 Contributing

Feel free to fork this repository and improve it. Contributions are welcome!

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Karthikeyan**

* 💼 Aspiring Backend Developer / Data Engineer
* 🌐 Focused on TypeScript, APIs, and Data Processing

---
