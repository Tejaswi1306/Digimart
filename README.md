# Digimart
Multi-vendor digital goods marketplace built with React, Spring Boot, and Azure.
# DigiMart – Digital Goods Marketplace

DigiMart is a full-stack microservices-based e-commerce platform for buying and selling digital products like templates, eBooks, music, and more.

## 🌐 Tech Stack
- **Frontend:** React.js, Redux Toolkit, Tailwind CSS
- **Backend:** Spring Boot Microservices (Auth, Product, Order, Payment, File, Review)
- **Database:** Azure Cosmos DB, Azure SQL
- **Storage:** Azure Blob Storage
- **Authentication:** Azure AD B2C / Spring Security + JWT
- **Payments:** Stripe (test mode)
- **DevOps:** GitHub Actions, Azure App Services, Azure API Management

## 🔧 Features
- 🔐 User/Seller registration & login
- 📦 Product listing and management (seller)
- 💳 Stripe payment integration (test mode)
- 📥 Secure file upload & download using Azure Blob
- ⭐ Product ratings and reviews
- ☁️ Fully deployed using Azure cloud services

## 📁 Project Structure
```
digimart/
├── frontend/                 # React.js App
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── redux/
│       ├── App.js
│       └── index.js
│
├── backend/                  # Microservices
│   ├── auth-service/
│   ├── product-service/
│   ├── order-service/
│   ├── file-service/
│   ├── payment-service/
│   └── review-service/
│
├── infra/                    # Azure deployment, CI/CD
│   ├── azure-pipelines.yml
│   ├── github-actions/
│   └── terraform/
│
├── .github/ISSUE_TEMPLATE/
│   ├── bug_report.md
│   ├── feature_request.md
│   └── task_setup.md
│
├── .gitignore
├── README.md
└── LICENSE
```

## 🚀 Getting Started
1. Clone the repository
2. Set up environment variables for each service
3. Deploy frontend via Azure Static Web Apps
4. Deploy backend microservices using Azure App Services or Container Apps
5. Configure CI/CD via GitHub Actions

## 📌 License
This project is licensed under the MIT License.

---

## 📋 GitHub Issue Templates

### 🐛 Bug Report
```md
**Bug Description:**
A clear and concise description of what the bug is.

**Steps to Reproduce:**
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior:**
What should have happened instead?

**Environment:**
- Browser or API tool
- OS/Platform

**Screenshots (if any):**
```

### 🚀 Feature Request
```md
**Feature Title:**

**Feature Description:**
Describe the feature, its benefit, and its user.

**Acceptance Criteria:**
- [ ] Criterion 1
- [ ] Criterion 2

**Notes:**
Additional context or references.
```

### 📌 Task Setup
```md
**Task Title:**

**Objective:**
What needs to be done?

**Steps:**
- [ ] Step 1
- [ ] Step 2

**Dependencies (if any):**
Other services or components needed
```
