import { useForm, ValidationError } from "@formspree/react";

const CareersForm = () => {
  const [state, handleSubmit] = useForm("contactForm");

  return (
    <form className="container bg-main p-4 border-r col-12" onSubmit={handleSubmit}>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="form-part col mb-3">
          <label className="form-label" htmlFor="name">
            Your Full Name*
          </label>
          <input
            className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
            id="name"
            type="name"
            name="Full name"
            required
            disabled={state.succeeded}
          />
        </div>
        <div className="form-part col mb-3">
          <label className="form-label" htmlFor="phone">
            Contact Number *
          </label>
          <input
            className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
            id="name"
            type="text"
            name="phone"
            required
            disabled={state.succeeded}
          />
        </div>
      </div>

      <div className="form-part mb-3">
        <label className="form-label" htmlFor="email">
          Email Address*
        </label>
        <input
          className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
          id="email"
          type="email"
          name="email"
          required
          disabled={state.succeeded}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="form-part mb-3">
        <label className="form-label" htmlFor="address">
          Personal Address*
        </label>
        <input
          className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
          id="address"
          type="address"
          name="Inspection Site Address"
          disabled={state.succeeded}
        />
      </div>

      <div className="form-part mb-3">
        <label className="form-label" htmlFor="message">
          Your Message*
        </label>
        <textarea
          className={`form-control pg-input shadow ${state.succeeded && "text-secondary bg-main-light bg-gradient"}`}
          id="message"
          name="message"
          rows="5"
          required
          disabled={state.succeeded}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <h4>
        Download the application form{" "}
        <a href="/forms/complaint_form.pdf" target="_blank" rel="noreferrer" className="text-light">
          by clicking here
        </a>
      </h4>
      <button className={`btn btn-light text-main shadow ${state.succeeded && "disabled"}`} type="submit" disabled={state.submitting}>
        {state.succeeded ? "✓ Submitted" : "Submit"}
      </button>

      {state.succeeded && (
        <p className="text mt-3 text-center">Thank you for contacting us! We&apos;ll get back to you very soon! For emergency purposes, call us at 0800 0016 705.</p>
      )}
    </form>
  );
};

export default CareersForm;
