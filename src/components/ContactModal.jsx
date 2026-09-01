import React, { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    scope: "",
    consent: false,
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace YOUR_FORMSPREE_ID with your actual endpoint (Formspree, Make.com, or your backend)
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          scope: formData.scope,
          gdprConsent: formData.consent ? "Agreed to data processing" : "Not agreed",
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");
      
      setSubmitted(true);
    } catch (error) {
      // Fallback: Opens the user's default email client if the API fails or isn't configured yet
      window.location.href = `mailto:dev@technixit.com?subject=Tech Review Inquiry - ${encodeURIComponent(
        formData.fullName
      )}&body=${encodeURIComponent(
        `Name: ${formData.fullName}\nEmail: ${formData.email}\nGDPR Consent: Yes\n\nScope:\n${formData.scope}`
      )}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ fullName: "", email: "", scope: "", consent: false }); // Reset form
        onClose();
      }, 3000);
    }
  };

  return (
    <div className="tx-modal-overlay" onClick={onClose}>
      <div className="tx-modal" onClick={(e) => e.stopPropagation()}>
        <button className="tx-modal-close" onClick={onClose} disabled={loading}>
          <X size={20} />
        </button>
        <div style={{ marginBottom: 20 }}>
          <h3 className="tx-h2 tx-display" style={{ fontSize: 22 }}>
            Schedule Tech Review
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: 13, margin: 0 }}>
            Fill in your project details to connect with a lead engineer.
          </p>
        </div>

        {submitted ? (
          <div style={{ padding: "20px 0", textAlign: "center", color: "var(--success)" }}>
            <CheckCircle2 size={36} style={{ margin: "0 auto 12px" }} />
            Project Details Submitted. An engineer will reach out shortly.
          </div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="tx-form-group">
              <label className="tx-label">FULL NAME</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="tx-input"
                placeholder="Jane Doe"
              />
            </div>
            
            <div className="tx-form-group">
              <label className="tx-label">WORK EMAIL</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="tx-input"
                placeholder="jane@company.eu"
              />
            </div>
            
            <div className="tx-form-group">
              <label className="tx-label">PROJECT SCOPE & TECH STACK</label>
              <textarea
                name="scope"
                rows="3"
                required
                value={formData.scope}
                onChange={handleChange}
                className="tx-textarea"
                placeholder="E.g. React frontend with FastAPI backend, AI model fine-tuning, PostgreSQL database setup..."
              ></textarea>
            </div>

            {/* GDPR Consent Checkbox */}
            <div className="tx-form-group" style={{ margin: "16px 0" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                  lineHeight: "1.4",
                }}
              >
                <input
                  type="checkbox"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  style={{ marginTop: "2px", cursor: "pointer" }}
                />
                <span>
                  I agree to allow TECHNIX to process and store my contact details to respond to this inquiry in accordance with EU GDPR compliance.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="tx-btn tx-btn-primary"
              style={{ width: "100%", marginTop: 8 }}
            >
              {loading ? "Sending..." : "Submit Architecture Inquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}