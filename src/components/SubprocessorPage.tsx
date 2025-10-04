import React from "react";

export function SubprocessorPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold mb-2">Subprocessors</h1>
      <p className="text-sm text-muted-foreground mb-8"><strong>Last updated:</strong> 1-oct-2025</p>

      <p className="mb-6">
        Brew Studio uses carefully‑vetted third‑party service providers (<strong>Sub‑processors</strong>) to help deliver our Services. We impose data‑protection terms on each Sub‑processor and assess their security practices. We will post changes to this page at least <strong>[15] days</strong> before a new Sub‑processor begins processing Customer Personal Data.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Current Sub‑processors</h2>
      <div className="mb-10 overflow-x-auto">
        <table className="w-full text-left border border-border rounded-md overflow-hidden">
          <thead className="bg-muted/50">
            <tr>
              <th className="p-3 border-b border-border">Provider</th>
              <th className="p-3 border-b border-border">Purpose</th>
              <th className="p-3 border-b border-border">Categories of Personal Data</th>
              <th className="p-3 border-b border-border">Data Location(s)</th>
              <th className="p-3 border-b border-border">Transfer Mechanism (if outside EEA/UK)</th>
              <th className="p-3 border-b border-border">Data Retention</th>
              <th className="p-3 border-b border-border">More Info</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-muted/20">
              <td className="p-3 align-top"><strong>Amazon Web Services, Inc. (AWS)</strong></td>
              <td className="p-3 align-top">Cloud hosting, storage, CDN/WAF</td>
              <td className="p-3 align-top">Account data; usage telemetry; Developer Content</td>
              <td className="p-3 align-top"><strong>[Regions used, e.g., ap-south-1, eu-central-1, us-east-1]</strong></td>
              <td className="p-3 align-top"><strong>SCCs</strong>; <strong>UK Addendum</strong>; optionally <strong>DPF</strong> where applicable</td>
              <td className="p-3 align-top">Per Brew retention policy and backups</td>
              <td className="p-3 align-top"><a className="underline" href="https://aws.amazon.com/compliance/" target="_blank" rel="noreferrer">aws.amazon.com/compliance</a></td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-3 align-top"><strong>Transactional Email Provider - Resend</strong></td>
              <td className="p-3 align-top">Account emails, security notices, system alerts</td>
              <td className="p-3 align-top">Name, email, limited metadata (timestamps, delivery status)</td>
              <td className="p-3 align-top"><strong>[Region / Global]</strong></td>
              <td className="p-3 align-top">SCCs / UK Addendum; <strong>DPF</strong> if vendor‑certified</td>
              <td className="p-3 align-top">Message metadata retained per provider defaults</td>
              <td className="p-3 align-top"><a className="underline" href="https://resend.com/security" target="_blank" rel="noreferrer">resend.com/security</a></td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-3 align-top"><strong>Error Monitoring (e.g., Sentry) [TBD]</strong></td>
              <td className="p-3 align-top">Error tracking and performance monitoring</td>
              <td className="p-3 align-top">Pseudonymous telemetry; stack traces (no secrets)</td>
              <td className="p-3 align-top"><strong>[Region / EU option if available]</strong></td>
              <td className="p-3 align-top">SCCs / UK Addendum; DPF if certified</td>
              <td className="p-3 align-top">Rolling <strong>[X] days</strong></td>
              <td className="p-3 align-top">[Provider link]</td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-3 align-top"><strong>Logging/Observability (e.g., Datadog) [TBD]</strong></td>
              <td className="p-3 align-top">Logs/metrics to secure and operate product</td>
              <td className="p-3 align-top">Pseudonymous telemetry; limited IP/device data</td>
              <td className="p-3 align-top"><strong>[Region / EU option if available]</strong></td>
              <td className="p-3 align-top">SCCs / UK Addendum; DPF if certified</td>
              <td className="p-3 align-top">Rolling <strong>[X] days</strong></td>
              <td className="p-3 align-top">[Provider link]</td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-3 align-top"><strong>Analytics (privacy‑respecting, e.g., Plausible/Heap) [TBD]</strong></td>
              <td className="p-3 align-top">Product analytics to improve UX</td>
              <td className="p-3 align-top">Pseudonymous usage data; no cross‑site tracking</td>
              <td className="p-3 align-top"><strong>[Region / EU option]</strong></td>
              <td className="p-3 align-top">SCCs / UK Addendum; DPF if certified</td>
              <td className="p-3 align-top"><strong>[X] months</strong></td>
              <td className="p-3 align-top">[Provider link]</td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-3 align-top"><strong>Customer Support (e.g., Zendesk/Intercom) [TBD]</strong></td>
              <td className="p-3 align-top">Support tickets and in‑app chat</td>
              <td className="p-3 align-top">Name, email, ticket content</td>
              <td className="p-3 align-top"><strong>[Region / Global]</strong></td>
              <td className="p-3 align-top">SCCs / UK Addendum; DPF if certified</td>
              <td className="p-3 align-top"><strong>[X] months</strong></td>
              <td className="p-3 align-top">[Provider link]</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
      <ul className="list-disc pl-6 mb-2 space-y-3">
        <li>
          <strong>How will I be notified of changes?</strong> We’ll keep this page updated.
        </li>
        <li>
          <strong>How can I object?</strong> Email <a className="underline" href="mailto:support@brewstudio.in">support@brewstudio.in</a> within <strong>[15] days</strong> of notice with reasonable, data‑protection‑related grounds. We’ll work with you in good faith. If we can’t resolve, you may suspend the affected Service.
        </li>
      </ul>

      <hr className="my-8" />
    </div>
  );
}


