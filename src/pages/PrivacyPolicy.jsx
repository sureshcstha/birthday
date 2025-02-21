const PrivacyPolicy = () => (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">Last updated: February 21, 2025</p>
      
      <section className="mb-4">
        <p className="text-gray-700">
          Welcome to the BirthdayMails website. Your privacy is important to us. This Privacy Policy explains how we handle your data when you use our website.
        </p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <p className="text-gray-700">
          When you use our website, we collect and store the following personal information:
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>First Name (Required, up to 50 characters)</li>
          <li>Last Name (Optional, up to 50 characters)</li>
          <li>Birthdate (Required)</li>
          <li>Email Address (Required, unique, up to 100 characters)</li>
          <li>Phone Number (Optional, unique, up to 15 characters)</li>
          <li>Subscription Status (Whether you are subscribed to our service)</li>
          <li>Account Creation Date</li>
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold">How We Use Your Information</h2>
        <p className="text-gray-700">
          We use the collected information to:
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Send birthday messages as per your subscription.</li>
          <li>Ensure uniqueness and prevent duplicate registrations.</li>
          <li>Maintain account records and support customer inquiries.</li>
          <li>Improve our services and user experience.</li>
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold">Data Sharing and Third Parties</h2>
        <p className="text-gray-700">
          We do not sell or share your personal data with third parties. However, we use third-party services for email and phone message delivery. These services may have their own privacy policies governing data processing.
        </p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold">Data Security</h2>
        <p className="text-gray-700">
          We implement appropriate security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
        </p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold">Your Rights</h2>
        <p className="text-gray-700">
          You have the right to:
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Access your personal data.</li>
          <li>Request corrections to inaccurate information.</li>
          <li>Unsubscribe from our service at any time.</li>
          <li>Request deletion of your account and personal data.</li>
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold">Changes to This Privacy Policy</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact us at
          <a href="mailto:sureshcstha@gmail.com" className="text-blue-600 hover:underline"> sureshcstha@gmail.com</a>.
        </p>
      </section>
    </div>
);
  
export default PrivacyPolicy;
