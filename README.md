---

## **README.md**

### **E-Commerce POC Backend**

#### **Overview**
This repository contains the backend implementation for an e-commerce platform proof-of-concept (POC). The backend is built using Go (Gin + GORM + SQLite) and provides RESTful APIs for various services such as authentication, product management, order processing, payment handling, notifications, and more. The frontend is built with React (Vite + React Bootstrap).

The system is designed to be scalable, secure, and maintainable, following best practices for API development and integration with third-party services.

---

### **Features**

#### 1. **Authentication Service**
- **User Roles**: Supports vendors, buyers, and admins.
- **JWT/OAuth**: Secure login sessions using JSON Web Tokens (JWT).
- **Role-Based Access Control (RBAC)**: Enforces permissions based on user roles.
- **Session Management**: Proper expiration and renewal mechanisms.
- **Multi-Factor Authentication (MFA)**: Adds an extra layer of security.
- **Account Verification**: Via email or SMS.
- **API Endpoints**:
  - `/register`: User registration.
  - `/login`: User login.
  - `/logout`: User logout.
  - `/password-recovery`: Password reset.

#### 2. **Product Service**
- **CRUD Operations**: Create, update, retrieve, and delete products.
- **Inventory Management**: Tracks stock levels and sends alerts when stock is low.
- **Categories & Subcategories**: Efficient querying for product categorization.
- **Price Tracking & Discounts**: Manages pricing and discount rules.
- **Bulk Uploads**: Allows vendors to upload multiple products at once.
- **Image Handling**: Stores and retrieves product images securely.

#### 3. **Order Service**
- **Order Processing**: Handles creation, confirmation, and payment validation.
- **Order Status Tracking**: Supports statuses like Pending, Confirmed, Shipped, Delivered, Canceled, Returned.
- **Cancellation & Returns**: Enables users to cancel orders or request returns.
- **Refunds**: Automates refund processes where applicable.
- **Real-Time Updates**: Uses WebSockets or push notifications for real-time updates.
- **API Endpoints**:
  - `/orders/create`: Create a new order.
  - `/orders/status`: Fetch order status.
  - `/orders/history`: Retrieve order history.

#### 4. **Payment Service**
- **Payment Gateways**: Integrates with external providers like Paystack, Flutterwave.
- **Split Payments**: Distributes payments among multiple vendors.
- **Transaction History**: Retrieves transaction records for users and vendors.
- **Secure Storage**: Ensures compliance with PCI DSS standards.
- **Vendor Payouts**: Automates payouts to vendors.
- **Dispute Handling**: Processes failed or disputed transactions.

#### 5. **Notification Service**
- **Event-Driven System**: Sends notifications based on events (e.g., order updates, delivery alerts).
- **Email & SMS Notifications**: Uses third-party providers like Twilio, SendGrid.
- **In-App Notifications**: Provides real-time updates within the application.
- **Templates**: Customizable notification templates for different events.
- **Preferences**: Users can manage their notification settings.

#### 6. **Vendor Management Service**
- **Store Management**: Vendors can manage store details, inventory, and sales reports.
- **Sales Analytics**: Provides insights into vendor performance.
- **Order Management**: Vendors can process customer orders and handle returns.
- **Performance Tracking**: Monitors store performance metrics.

#### 7. **Review and Rating Service**
- **Reviews**: Buyers can post, update, and delete reviews.
- **Rating System**: Implements a 1-5 star rating system.
- **Moderation Tools**: Flags inappropriate reviews for review by admins.
- **Filtering & Sorting**: Allows filtering and sorting of reviews.

#### 8. **Search and Recommendation Service**
- **Search Engine**: Provides advanced search capabilities with filters and sorting options.
- **Recommendations**: Uses machine learning or rule-based logic to suggest personalized products.
- **Caching**: Optimizes search performance through caching strategies.

#### 9. **Subscription Plans & Traffic Limitation**
- **User Limits**: Enforces session limits based on subscription plans (Basic, Premium, Diamond).
- **Alerts**: Notifies vendors before reaching user limits.
- **Plan Management**: APIs for managing subscriptions and upgrades.

#### 10. **Product Importation from Aliexpress**
- **Third-Party Integration**: Imports products from Aliexpress using their API.
- **Data Mapping**: Maps Aliexpress categories to local categories.
- **Duplicate Prevention**: Ensures data consistency and avoids duplicate imports.
- **Manual Selection**: Vendors can manually select and import products.

---

### **Setup Instructions**

#### **Backend Setup**
1. **Prerequisites**:
   - Go 1.21+
   - SQLite (or PostgreSQL for production)
   - Gin framework
   - GORM ORM

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/ecommerce-poc.git
   cd ecommerce-poc/backend
   ```

3. **Install Dependencies**:
   ```bash
   go mod tidy
   ```

4. **Set Environment Variables**:
   Create a `.env` file in the root directory with the following variables:
   ```env
   JWT_SECRET=your_jwt_secret_key
   DATABASE_URL=sqlite:///test.db
   PAYSTACK_API_KEY=your_paystack_api_key
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   SENDGRID_API_KEY=your_sendgrid_api_key
   ```

5. **Run the Application**:
   ```bash
   go run main.go
   ```

#### **Frontend Setup**
1. **Prerequisites**:
   - Node.js 16+
   - npm or yarn

2. **Clone the Repository**:
   ```bash
   cd ecommerce-poc/frontend
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```

---

### **Database Schema**
The database schema includes the following tables:
- `users`: Stores user information (email, password, role).
- `products`: Stores product details (name, price, stock, vendor_id).
- `orders`: Stores order details (status, total_price, buyer_id).
- `vendors`: Stores vendor-specific information (store_name, sales_data).
- `reviews`: Stores user reviews and ratings.

---

### **Testing**
Automated tests are implemented for all services. Run the following command to execute tests:
```bash
go test ./...
```

---

### **Contributing**
To contribute to this project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

---

### **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### **Contact**
For any questions or feedback, please contact [your-email@example.com](mailto:your-email@example.com).

---

### **Conclusion**
This e-commerce POC demonstrates the core functionalities required for a robust backend system. It is designed to be extensible, allowing for future enhancements and integrations. Contributions and suggestions are welcome! 🚀

---

Let me know if you'd like further refinements or additional sections!
