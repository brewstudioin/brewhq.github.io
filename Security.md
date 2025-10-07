Security
This page explains the security features and practices Brew Studio uses to keep your workspace, Developer Content, and customer data safe.

Data security
Brew Studio applications are secure‑by‑default, with multiple controls to protect your data.

Encryption: Brew Studio encrypts all sensitive information (API secrets, database credentials, OAuth tokens, Git SSH keys) at rest using AES‑256. TLS 1.2+ is enforced in transit. Keys are managed with strict separation of duties.

Data‑at‑Rest: We apply unique salts and strong hashing where applicable and use tokenization/pseudonymization for sensitive identifiers.

SSL/TLS and edge protection: All connections to brew.studio and app.brewstudio.in are served over HTTPS with valid certificates. Public traffic is fronted by AWS CloudFront and protected by AWS WAF.

Private networking: Brew Studio Cloud connects to databases and external APIs only from compute instances in a private VPC. Egress is controlled.

Compliant hosting: Brew Studio Cloud runs on AWS regions and services that align with SOC 1 and SOC 2. Regular backups protect against data loss.

Access control: Role‑based access control (RBAC), least‑privilege service roles, and audit logs are standard. MFA/2FA is supported for internal access and available to customers where enabled.

Brew Studio Agents
Brew Studio Agents uses model providers (OpenAI, Anthropic) for responses and embeddings api.

Embeddings and retrieval: When you upload files or sync repositories, Brew generates vector embeddings & AI generated code context to power search and planning. Embeddings are stored securely in a private OpenSearch cluster accessible only from the VPC.

Model use: We do not use your private code or Customer Data to train general‑purpose AI models without your explicit permission.

Developer Content and repository access

Read‑only by default: GitHub scopes are read‑only. Brew Studio never writes to your code.

Webhook sync: Repositories are kept in sync via webhooks; removing a repo in Brew cleans up related webhooks automatically.

Retention: On disconnect or workspace deletion, we cease new syncs and delete (or irreversibly anonymize) Developer Content within 7 days; backups age out on a rolling schedule up to 30 days.

Query security
No Data Logging: Brew’s backend is designed to act as a proxy, without logging or storing responses retrieved from databases or API endpoints. This includes response data and user input.

Secure Storage of Queries: Query configurations and bodies are stored securely. In View mode, this information is not exposed to end users.

Credential Handling: When executing a query, Brew Studio securely appends sensitive credentials server‑side just before forwarding the request to your backend. Credentials are never exposed to the client’s browser.

Secrets Management: API secrets and datasource configurations are stored encrypted. In View mode secrets remain concealed; in Edit mode, you can rotate/update but not read existing secret values.

SQL Injection Protection: Prepared statements are enabled by default for SQL datasources to mitigate injection attacks.

JavaScript security
Brew Studio takes measures to ensure JavaScript security within the platform, and it’s important to understand the context in which code executes.

Client‑Side Execution: Custom JavaScript in Brew apps executes on the client. Users can inspect browser‑side code; never embed plaintext secrets in client code.

Handling Sensitive Data: Avoid embedding sensitive keys or credentials in code. Follow client‑side security best practices.

Local Storage Caution: Avoid storing sensitive values using storeValue(); browser storage can be inspected by end users.

DOM API Exposure: Direct DOM APIs are restricted to minimize risk. Safe framework utilities (e.g., timers like setInterval/clearInterval) are provided where needed.

Fetch API Specifics: The Fetch API is supported but configured to exclude automatic cookies/session credentials by default to reduce leakage risk.

Login rate limiting
Rate limiting on password‑based login attempts is implemented as follows:

Subprocessors
We use carefully‑vetted vendors to help deliver our Services. See the Subprocessors page for details: /subprocessor

Security & compliance mapping (informational)
OWASP ASVS: A2/A3 (Auth/Session), A4 (Access Control), A5 (Validation), A8 (Data Protection), A14 (Configuration) reflected in the controls above.
SOC 2 (CC6/CC7): Logical access, change management, monitoring/logging supported via RBAC, rate‑limiting, key management, and event/audit logs.
GDPR/DPDP: Data flows, legal bases, retention, and user rights are documented in our Privacy Policy. See: /privacy-policy