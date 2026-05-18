import React, { useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import "./RSVP.css";
import { useTranslation } from "react-i18next";

const RSVP = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    attendance: "Joyfully Accepts",
    side: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // منع الإرسال المتكرر إذا كان جاري الإرسال بالفعل
    if (loading) return;

    setLoading(true);

    const postData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      joiningUs: formData.attendance === "Joyfully Accepts",
      side: formData.side,
    };

    try {
      const response = await fetch("https://alaaalgharbi.pythonanywhere.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("RSVP submission failed");
      }
    } catch (error) {
      console.error("Error submitting RSVP:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="background">
      <div
        ref={ref}
        className={`rsvp hidden ${isVisible ? "slide-in-up" : ""}`}
      >
        <h2 className={`hidden ${isVisible ? "fade-in-up delay-1" : ""}`}>
          {t("rsvp.rsvp")}
        </h2>

        {submitted ? (
          <div className="thank-you-message" role="status" aria-live="polite">
            {formData.attendance === "Joyfully Accepts"
              ? t("rsvp.thankYou")
              : t("rsvp.regretfulMessage")}
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder={t("rsvp.firstName")}
              value={formData.firstName}
              onChange={handleChange}
              required
              className={`hidden ${isVisible ? "fade-in-up delay-2" : ""}`}
              aria-label={t("rsvp.firstName")}
            />

            <input
              type="text"
              name="lastName"
              placeholder={t("rsvp.lastName")}
              value={formData.lastName}
              onChange={handleChange}
              required
              className={`hidden ${isVisible ? "fade-in-up delay-3" : ""}`}
              aria-label={t("rsvp.lastName")}
            />

            <div
              className={`radio-group hidden ${
                isVisible ? "fade-in-up delay-4" : ""
              }`}
            >
              <p>{t("rsvp.joining")}</p>
              <label>
                <input
                  type="radio"
                  name="attendance"
                  value="Joyfully Accepts"
                  checked={formData.attendance === "Joyfully Accepts"}
                  onChange={handleChange}
                />
                <span className="custom-radio" />
                <span className="radio-label">{t("rsvp.accepts")}</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="attendance"
                  value="Regretfully Declines"
                  checked={formData.attendance === "Regretfully Declines"}
                  onChange={handleChange}
                />
                <span className="custom-radio" />
                <span className="radio-label">{t("rsvp.declines")}</span>
              </label>
            </div>

            <div
              className={`radio-group hidden ${
                isVisible ? "fade-in-up delay-5" : ""
              }`}
            >
              <p>{t("rsvp.side")}</p>
              <label>
                <input
                  type="radio"
                  name="side"
                  value="Majd’s Side"
                  checked={formData.side === "Majd’s Side"}
                  onChange={handleChange}
                  required
                />
                <span className="custom-radio" />
                <span className="radio-label">{t("rsvp.majdSide")}</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="side"
                  value="Reem’s Side"
                  checked={formData.side === "Reem’s Side"}
                  onChange={handleChange}
                  required
                />
                <span className="custom-radio" />
                <span className="radio-label">{t("rsvp.reemSide")}</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`hidden ${isVisible ? "fade-in-up delay-6" : ""} submit-btn`}
              aria-busy={loading}
            >
              {loading ? <span className="btn-loader" aria-hidden="true" /> : t("rsvp.send")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RSVP;
