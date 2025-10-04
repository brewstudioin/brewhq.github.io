import React from "react";

export function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8"><strong>Last updated:</strong> 31 September 2025</p>

      <p className="mb-4">
        This Privacy Policy explains how Brew studio [sole proprietorship] (<strong>Brew Studio</strong>, <strong>we</strong>, <strong>us</strong>, <strong>our</strong>) collects, uses, discloses, and protects personal information when you visit <strong>brew.studio</strong>, use our applications and services (together, the <strong>Services</strong>), or otherwise interact with us.
      </p>
      <p className="mb-8">
        Brew Studio provides AI-assisted <strong>impact analysis</strong> for software teams by helping you analyze the “blast radius” of change requirements across UI, code, and data, and by integrating with developer tools such as GitHub to link multiple repositories into a single project. (brew.studio)
      </p>
      <p className="mb-8">If you do not agree with this policy, please do not access or use the Services.</p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">1) Who is responsible for your data?</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          <strong>Controller:</strong> For website visits, account signup, billing, marketing, and support data, <strong>User of Brew studio</strong> is the <strong>data controller</strong> under GDPR.
        </li>
        <li>
          <strong>Processor:</strong> For repository/source-code content that customers upload or sync to Brew in connection with a paid workspace, we act primarily as a <strong>data processor</strong> on your instructions (see §6).
        </li>
      </ul>
      <p className="mb-8">
        <strong>Contact:</strong> <a className="underline" href="mailto:support@brewstudio.in">support@brewstudio.in</a>
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">2) Scope &amp; audience</h2>
      <p className="mb-4">This policy covers:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Site visitors</strong> to brew.studio and related pages,</li>
        <li><strong>Users</strong> of Brew web apps and APIs,</li>
        <li><strong>Workspace owners/admins</strong> and their team members,</li>
        <li>Individuals who contact us for support, events, or sales.</li>
      </ul>
      <p className="mb-8">
        Regional disclosures are provided for <strong>GDPR</strong> (EU/UK) and India’s <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>. The DPDP Act received Presidential assent in Aug 2023, and draft implementing rules were published in Jan 2025; final rules were expected around late September 2025. We will follow applicable provisions as they come into force.
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">3) What we collect</h2>
      <h3 className="text-xl font-medium mb-2">A) Account &amp; contact data</h3>
      <p className="mb-6">Name, email, password (hashed), profile photo (optional), organization, role/title, authentication logs, and communications with us (support, feedback).</p>

      <h3 className="text-xl font-medium mb-2">B) Workspace &amp; team data</h3>
      <p className="mb-6">Workspace name/ID, plan, members and roles (RBAC), invitations, audit logs, settings, and usage metrics (e.g., features used, performance telemetry).</p>

      <h3 className="text-xl font-medium mb-2">C) Repository &amp; project data (“Developer Content”)</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Repository metadata (repo names/IDs, branches, file paths, commit hashes), pull/merge request metadata, issue/PR links, and code graph adjacency.</li>
        <li><strong>Source code</strong> that you instruct us to sync for analysis.</li>
        <li><strong>We do not intentionally ingest environment variables or external secrets/config files</strong>; our sync only reads <strong>source code</strong> and selected metadata necessary for analysis. (You can restrict scopes in your Git provider.)</li>
        <li>Connection details and tokens required to integrate with GitHub or other developer tools (stored encrypted; rotated per best practice).</li>
      </ul>

      <h3 className="text-xl font-medium mb-2">D) Device &amp; usage data</h3>
      <p className="mb-6">IP address, device/OS/browser type, pages viewed, timestamps, referrers, basic telemetry, and coarse geolocation derived from IP, collected via cookies or similar technologies (see §10).</p>

      <h3 className="text-xl font-medium mb-2">E) Billing data (if applicable)</h3>
      <p className="mb-6">Billing contact, company details, tax/VAT, and transaction identifiers via our payment provider(s). We do not store full payment instrument numbers on Brew systems.</p>

      <h3 className="text-xl font-medium mb-2">F) Support &amp; survey data</h3>
      <p className="mb-6">Issue reports, reproduction steps, email or chat transcripts, satisfaction ratings, and interview notes when you consent to research.</p>

      <h3 className="text-xl font-medium mb-2">G) Job applications (if applicable)</h3>
      <p className="mb-6">Resume/CV, links you provide, and information shared during interviews.</p>
      <p className="mb-8">We do <strong>not</strong> seek to collect sensitive personal data (e.g., health, religious, biometric) and do not knowingly collect children’s data (§17).</p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">4) Sources of data</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Directly from you (forms, settings, API calls),</li>
        <li>From your organization admin (provisioning users),</li>
        <li>From <strong>integration providers you authorize</strong> (e.g., GitHub) to pull code/metadata needed for impact analysis,</li>
        <li>From cookies/telemetry (site/app analytics).</li>
      </ul>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">5) Purposes &amp; legal bases (GDPR)</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full text-left border border-border rounded-md overflow-hidden">
          <thead className="bg-muted/50">
            <tr>
              <th className="p-3 border-b border-border">Purpose</th>
              <th className="p-3 border-b border-border">Typical data</th>
              <th className="p-3 border-b border-border">Legal bases</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-muted/20">
              <td className="p-3 align-top">Provide &amp; secure the Services (auth, RBAC, audit logs, code sync, analysis runs)</td>
              <td className="p-3 align-top">A–D</td>
              <td className="p-3 align-top">Contract (Art. 6(1)(b)); Legitimate interests in security &amp; service quality (Art. 6(1)(f))</td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-3 align-top">Run analysis and deliver insights (impact graphs, change risk)</td>
              <td className="p-3 align-top">C</td>
              <td className="p-3 align-top">Contract; Legitimate interests</td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-3 align-top">Customer support, incident response</td>
              <td className="p-3 align-top">A, F</td>
              <td className="p-3 align-top">Contract; Legitimate interests</td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-3 align-top">Improve performance &amp; reliability; detect abuse</td>
              <td className="p-3 align-top">B–D</td>
              <td className="p-3 align-top">Legitimate interests</td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-3 align-top">Billing &amp; account management</td>
              <td className="p-3 align-top">E</td>
              <td className="p-3 align-top">Contract; Legal obligation</td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-3 align-top">Product updates, service notices</td>
              <td className="p-3 align-top">A</td>
              <td className="p-3 align-top">Legitimate interests; Contract</td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-3 align-top">Marketing communications (opt-in/opt-out)</td>
              <td className="p-3 align-top">A</td>
              <td className="p-3 align-top">Consent; Legitimate interests</td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-3 align-top">Compliance (tax, legal, audits)</td>
              <td className="p-3 align-top">A–E</td>
              <td className="p-3 align-top">Legal obligation; Legitimate interests</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-8">Where consent is used, you can withdraw it any time via in-product settings or by contacting us.</p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">6) Developer Content &amp; repository data</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>We <strong>only</strong> access repositories and code that you explicitly connect and authorize.</li>
        <li>Code and repository metadata are processed <strong>to provide impact analysis</strong> and related features you request.</li>
        <li><strong>We do not use your private code to train general-purpose AI models</strong> without your explicit permission.</li>
        <li><strong>Config files and environment variables</strong>: Brew’s sync is designed to read <strong>source code</strong>; we do not intentionally ingest env/config/secrets from external stores.</li>
        <li>You can disconnect integrations at any time; upon disconnection or workspace deletion, we cease new syncs and follow the retention policy (§12).</li>
      </ul>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">7) Security measures</h2>
      <p className="mb-4">We apply administrative, technical, and physical safeguards appropriate to the risk, including:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Authentication &amp; session protection (OWASP ASVS A2/A3)</strong>: JWT-based auth, secure cookie flags, session hardening, MFA options where enabled.</li>
        <li><strong>Access control (A4)</strong>: Role-based access control (RBAC) for teams, least-privilege service roles, and scoped API tokens.</li>
        <li><strong>Input validation (A5)</strong> and <strong>secure defaults</strong> to mitigate injection and deserialization risks.</li>
        <li><strong>Data protection (A8)</strong>: TLS in transit; encryption at rest for personal data and Developer Content; key management with strict separation of duties.</li>
        <li><strong>Configuration (A14)</strong>: Infrastructure as code, secrets management, image-scanning, and baseline hardening.</li>
        <li><strong>Network boundary &amp; monitoring</strong>: We operate in a <strong>VPC</strong> with egress controlled; public access is fronted by <strong>AWS CloudFront</strong> and <strong>AWS WAF</strong>; rate-limiting, anomaly detection, and audit/event logs support monitoring (SOC 2 CC6/CC7 alignment for logical access, change management, and logging).</li>
        <li><strong>Third-party security</strong>: Due diligence and contractual controls for vendors; subprocessors listed in §9.</li>
      </ul>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">8) International transfers</h2>
      <p className="mb-8">We may process data in countries where we or our subprocessors operate. Where GDPR applies and data is transferred outside the EEA/UK, we use appropriate safeguards such as Standard Contractual Clauses (SCCs). For India, we monitor DPDP Act rules on cross-border transfers and will comply as they come into force.</p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">9) Sharing &amp; subprocessors</h2>
      <p className="mb-4">We share personal data only as necessary to provide the Services, comply with law, or with your direction:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Cloud infrastructure &amp; security</strong> (e.g., <strong>Amazon Web Services</strong> for hosting, CDN, and WAF).</li>
        <li><strong>Authentication / email / observability / analytics</strong> providers (limited to what’s necessary).</li>
        <li><strong>Payment processors</strong> (for subscriptions).</li>
        <li><strong>Integration providers</strong> you connect (e.g., GitHub or Jira)—data exchange is per your authorization.</li>
        <li><strong>Professional services</strong> (legal, accounting) under confidentiality.</li>
        <li><strong>Change of control</strong> (merger/acquisition) with notice where required.</li>
      </ul>
      <p className="mb-8">We maintain a <a className="underline" href="/legal/subprocessor"><strong>Subprocessors</strong></a> page and Data Processing Addendum (DPA) for customers upon request.</p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">10) Cookies &amp; analytics</h2>
      <p className="mb-8">We use necessary cookies, and may use privacy-respecting analytics to understand product usage. You can control cookies via your browser. If we use third-party analytics, they will be listed on our Subprocessors page (§9).</p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">11) Your rights</h2>
      <p className="mb-4">Depending on your region (e.g., EU/UK GDPR; India DPDP Act), you may have the right to:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Access, correct, or delete your personal data,</li>
        <li>Port your data,</li>
        <li>Restrict or object to certain processing,</li>
        <li>Withdraw consent (where used),</li>
        <li>Lodge a complaint with a supervisory authority (e.g., your local data protection authority).</li>
      </ul>
      <p className="mb-8">Requests can be made via <a className="underline" href="mailto:support@brewstudio.in">support@brewstudio.in</a> or in-product controls. For Developer Content where we act as <strong>processor</strong>, please contact your workspace admin first; we’ll support them in fulfilling your request.</p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">12) Retention &amp; deletion</h2>
      <p className="mb-4">We retain personal data only as long as needed to provide the Services, fulfill contractual/legal obligations, resolve disputes, and enforce agreements. Typical examples:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Account data:</strong> kept for your subscription and a short period after closure (90 days) unless legal retention requires longer.</li>
        <li><strong>Developer Content:</strong> retained for the duration of the workspace; upon deletion request or contract end, we delete or irreversibly anonymize within <strong>7</strong> days, subject to backups that age out on a rolling schedule <strong>[up to 30 days]</strong>.</li>
        <li><strong>Audit logs &amp; security telemetry:</strong> retained <strong>6</strong> months for security and compliance.</li>
      </ul>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">13) Data we don’t sell</h2>
      <p className="mb-8">We do <strong>not</strong> sell personal data. We do not serve interest-based advertising in our product.</p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">14) Automated decision-making</h2>
      <p className="mb-8">We do not engage in solely automated decisions that produce legal or similarly significant effects. Our AI features provide <strong>assistance</strong> and insights; humans (you/your team) decide what to adopt.</p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">15) Legal disclosures &amp; requests</h2>
      <p className="mb-8">We may disclose data where required by law or valid legal process, after assessing the request and notifying affected customers where legally permissible.</p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">16) Marketplace &amp; integrations</h2>
      <p className="mb-8">If you install a Brew integration from ecosystems like <strong>Atlassian Marketplace</strong> or connect third-party tools, the provider’s terms and privacy notices also apply. We encourage reviewing each provider’s permissions and scopes.</p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">17) Children’s privacy</h2>
      <p className="mb-8">Our Services are not directed to children under the age of <strong>16</strong> (or as defined by local law). We do not knowingly collect data from children. If you believe a child has provided personal data, contact <a className="underline" href="mailto:support@brewstudio.in">support@brewstudio.in</a> for deletion.</p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">18) Changes to this policy</h2>
      <p className="mb-8">We may update this Policy to reflect changes to our practices or legal requirements. We will post updates here and revise the “Last updated” date. For material changes, we’ll provide additional notice (e.g., in-app or email).</p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">19) Contact us</h2>
      <div className="mb-8 space-y-1">
        <p>Brew studio (sole proprietorship)</p>
        <p>Address: A2/401, Kumar shantiniketan phase 1, Pashan, Pune, Maharastra, India - 411021</p>
        <p>Email: <a className="underline" href="mailto:support@brewstudio.in">support@brewstudio.in</a></p>
        <p><strong>For GDPR requests:</strong> include “GDPR Request” in the subject line.</p>
        <p><strong>For DPDP requests:</strong> include “DPDP Request” in the subject line.</p>
      </div>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">Security &amp; compliance mapping (informational)</h2>
      <ul className="list-disc pl-6 mb-2 space-y-2">
        <li><strong>OWASP ASVS</strong>: A2 (Authentication), A3 (Session Management), A4 (Access Control), A5 (Validation), A8 (Data Protection), A14 (Configuration) reflected in §7 controls.</li>
        <li><strong>SOC 2 (CC6/CC7)</strong>: Logical access, change management, monitoring/logging addressed via RBAC, key management, rate-limiting, audit logs, and SIEM/monitoring (§7).</li>
        <li><strong>GDPR/PII</strong>: Data flows documented (§3–6), legal bases (§5), retention (§12), user rights (§11); encryption at rest/in transit and access logs (§7).</li>
        <li><strong>India DPDP Act, 2023</strong>: We’ll comply with operative provisions as notified (consent, notice, rights, breach reporting, cross-border transfer).</li>
      </ul>
    </div>
  );
}


