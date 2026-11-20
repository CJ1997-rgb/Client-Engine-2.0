"use client";

import { useState } from "react";
import { contact } from "../lib/site";

// Web3Forms emails each enquiry to the client. The key is public by design.
// It lives in lib/site.js; NEXT_PUBLIC_WEB3FORMS_KEY in Vercel overrides it if set.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || contact.web3formsKey;

function whatsappText(d) {
  return [
    "New enquiry from the Stamfort website",
    `Name: ${d.name}`,
    `Phone: ${d.phone}`,
    d.company && `Company: ${d.company}`,
    d.city && `City: ${d.city}`,
    `Machine and problem: ${d.message}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export default function EnquiryForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | whatsappOnly | emailFailed

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form));
    if (d.botcheck) return; // spam bots fill hidden fields

    // Open WhatsApp first, while the browser still counts this as the visitor's click.
    const waUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(whatsappText(d))}`;
    window.open(waUrl, "_blank", "noopener");

    if (!WEB3FORMS_KEY) {
      setStatus("whatsappOnly");
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Website enquiry from ${d.name}`,
          from_name: "Stamfort website",
          name: d.name,
          phone: d.phone,
          company: d.company,
          city: d.city,
          message: d.message,
        }),
      });
      const json = await res.json();
      setStatus(json.success ? "sent" : "emailFailed");
      if (json.success) form.reset();
    } catch {
      setStatus("emailFailed");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Your name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>
            Company <span className="optional">(optional)</span>
          </span>
          <input name="company" autoComplete="organization" />
        </label>
        <label>
          <span>
            City <span className="optional">(optional)</span>
          </span>
          <input name="city" autoComplete="address-level2" />
        </label>
      </div>
      <label>
        Machine and problem
        <textarea
          name="message"
          required
          rows={5}
          placeholder="For example: 100-tonne power press, clutch slipping since Monday"
        />
      </label>
      <input type="checkbox" name="botcheck" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button type="submit" className="btn btn-signal" disabled={status === "sending"}>
        {status === "sending" ? "Sending enquiry…" : "Send enquiry"}
      </button>

      <p className="form-note" role="status" aria-live="polite">
        {status === "idle" &&
          "WhatsApp opens with your details filled in. Tap Send there to reach us straight away."}
        {status === "sending" && "Sending your enquiry by email…"}
        {status === "sent" &&
          "Enquiry sent. If WhatsApp opened, tap Send there too and we'll reply on WhatsApp."}
        {status === "whatsappOnly" &&
          `WhatsApp opened with your details. Tap Send there to reach us, or call ${contact.phoneDisplay}.`}
        {status === "emailFailed" &&
          `The email didn't go through. Send the WhatsApp message that opened, or call ${contact.phoneDisplay}.`}
      </p>
    </form>
  );
}
