const Contact = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Get in <span className="blue-gradient_text font-semibold">Touch</span>
      </h1>

      <p className="mt-4 text-slate-500">
        You can contact me through LinkedIn or email.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        <a
          href="mailto:your-email@example.com"
          className="text-blue-600 hover:underline"
        >
          your-email@example.com
        </a>

        <a
          href="https://www.linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
