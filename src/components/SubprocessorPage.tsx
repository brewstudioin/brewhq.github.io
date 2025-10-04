import React from "react";

export function SubprocessorPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold mb-2">Subprocessor list for Brew Studio</h1>
      <p className="text-sm text-muted-foreground mb-8"><strong>Last updated:</strong> 1-oct-2025</p>

      <p className="mb-6">
        Brew Studio uses carefully‑vetted third‑party service providers (<strong>Sub‑processors</strong>) to help deliver our Services. We impose data‑protection terms on each Sub‑processor and assess their security practices. We will post changes to this page at least <strong>[15] days</strong> before a new Sub‑processor begins processing Customer Personal Data.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Current Sub‑processors</h2>
      <div className="mb-10 overflow-x-auto">
        <table className="w-full table-fixed text-left border border-border rounded-md overflow-hidden text-sm leading-6">
          <colgroup>
            <col className="w-[14rem]" />
            <col className="w-[14rem]" />
            <col className="w-[18rem]" />
            <col className="w-[10rem]" />
            <col className="w-[18rem]" />
            <col className="w-[12rem]" />
            <col className="w-[10rem]" />
          </colgroup>
          <thead className="bg-muted/50">
            <tr>
              <th className="p-4 border-b border-border">Provider</th>
              <th className="p-4 border-b border-border">Purpose</th>
              <th className="p-4 border-b border-border">Categories of Personal Data</th>
              <th className="p-4 border-b border-border">Data Location(s)</th>
              <th className="p-4 border-b border-border">Transfer Mechanism (if outside EEA/UK)</th>
              <th className="p-4 border-b border-border">Data Retention</th>
              <th className="p-4 border-b border-border">More Info</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-muted/20">
              <td className="p-4 align-top break-words"><strong>Amazon Web Services, Inc. (AWS)</strong></td>
              <td className="p-4 align-top break-words">Cloud hosting, storage, CDN/WAF, Logging & Monitoring</td>
              <td className="p-4 align-top break-words">Account data; usage telemetry; Developer Content</td>
              <td className="p-4 align-top break-words"><strong>us-east-1</strong></td>
              <td className="p-4 align-top break-words"><strong>SCCs</strong>; <strong>UK Addendum</strong>; optionally <strong>DPF</strong> where applicable</td>
              <td className="p-4 align-top break-words">Per Brew retention policy and backups</td>
              <td className="p-4 align-top break-words"><a className="underline" href="https://aws.amazon.com/compliance/" target="_blank" rel="noreferrer noopener">aws.amazon.com/compliance</a></td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-4 align-top break-words"><strong>Transactional Email Provider - Resend</strong></td>
              <td className="p-4 align-top break-words">Account emails, security notices, system alerts</td>
              <td className="p-4 align-top break-words">Name, email, limited metadata (timestamps, delivery status)</td>
              <td className="p-4 align-top break-words"><strong>[Region / Global]</strong></td>
              <td className="p-4 align-top break-words">SCCs / UK Addendum; <strong>DPF</strong> if vendor‑certified</td>
              <td className="p-4 align-top break-words">Message metadata retained per provider defaults</td>
              <td className="p-4 align-top break-words"><a className="underline" href="https://resend.com/security" target="_blank" rel="noreferrer noopener">resend.com/security</a></td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-4 align-top break-words"><strong>OpenAI OpCo, LLC</strong></td>
              <td className="p-4 align-top break-words">LLM inference (prompt processing, embeddings); optional fine-tuning where enabled</td>
              <td className="p-4 align-top break-words">Prompts & outputs; code snippets; repository metadata; end-user data contained in prompts; usage metadata</td>
              <td className="p-4 align-top break-words"><strong>US (default) or EU (if EU data residency is enabled and eu.api.openai.com is used)</strong></td>
              <td className="p-4 align-top break-words">SCCs / UK Addendum; DPF if certified</td>
              <td className="p-4 align-top break-words">Stored data at rest remains in selected geography; prompts/outputs not used to train base models</td>
              <td className="p-4 align-top break-words">OpenAI Enterprise Privacy / DPA / EU Data Residency docs</td>
            </tr>
            <tr className="hover:bg-muted/20">
              <td className="p-4 align-top break-words"><strong>Jina AI GmbH</strong></td>
              <td className="p-4 align-top break-words">Embeddings & reranker inference for retrieval/search</td>
              <td className="p-4 align-top break-words">Text & code snippets sent in prompts; limited request metadata</td>
              <td className="p-4 align-top break-words">EU only (provider states all infrastructure & data processing in EU)</td>
              <td className="p-4 align-top break-words">N/A for EU‑only processing; SCCs/UK Addendum if cross‑border introduced</td>
              <td className="p-4 align-top break-words">Input stored only as necessary to provide the service; website logs 7 days; confirm API retention in MSA</td>
              <td className="p-4 align-top break-words">Jina Legal & Privacy / SOC 2 info</td>
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


