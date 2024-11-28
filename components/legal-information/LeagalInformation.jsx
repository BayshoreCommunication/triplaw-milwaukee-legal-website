import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";

const css = `
  h1{
    font-size: 40px;
    font-weight: 700;
  }
  h2{
    padding-top: 10px;
    font-size: 25px;
    padding-bottom: 10px;
  }
  h5{
    padding-top: 15px;
    font-size: 20px;
    padding-bottom: 15px;
    font-weight: bold;
  }
  p{
    padding-top: 6px;
    padding-bottom: 6px;
  }
  ul{
    list-style-type: disc;
    margin-left: 30px;

  }
  li{
    margin-bottom: 5px;
  }
  br{
    padding-top: 6px;
    padding-bottom: 6px;
}

`;

const LegalInformation = () => {
  return (
    <>
      <style>{css}</style>
      <SectionLayout>
        <div className="text-center md:text-left">
          <div className="text-center mb-4 md:mb-5">
            <h1 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal">
              Legal Information
            </h1>
          </div>

          <div>
            <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
              Privacy Policy
            </h5>
            <p className="text-xl text-stone-950 text-center md:text-left">
              At Milwaukee Legal Pros, we value your privacy and are dedicated
              to securing your personal information. This Privacy Policy
              explains how we collect, use, disclose, and protect your
              information when you visit our website,{" "}
              <Link
                href={"www.milwaukeelegalpros.com"}
                className="underline hover:text-primary duration-300"
              >
                www.milwaukeelegalpros.com,
              </Link>{" "}
              or any associated platforms. Please take a moment to read it
              carefully. If you do not agree with this policy, we ask that you
              refrain from using our site.
            </p>
            <p className="text-xl text-stone-950 text-center md:text-left">
              We reserve the right to update this Privacy Policy at any time.
              Any updates will take effect immediately upon posting, with the
              "Last Updated" date reflecting the changes. By continuing to use
              our site after updates are made, you agree to the revised terms.
              We encourage you to review this policy periodically to remain
              informed about how we handle your information.
            </p>
          </div>
          <div>
            <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
              How We Collect Your Information
            </h5>
            <p className="text-xl text-stone-950 text-center md:text-left">
              We collect information through various methods to provide you with
              the best service:
            </p>
            <ul className="list-disc ms-7">
              <li className="text-xl text-stone-950 text-center md:text-left">
                <strong>Information You Provide:</strong> When you reach out to
                us, we collect the details you share, such as your name,
                address, email, and phone number.
              </li>

              <li className="text-xl text-stone-950 text-center md:text-left">
                <strong>Automatic Data Collection: </strong> Our servers
                automatically gather technical information, including your IP
                address, browser type, and the pages you visit on our website.
              </li>

              <li className="text-xl text-stone-950 text-center md:text-left">
                <strong>Mobile Device Information: </strong> When you access our
                website on a mobile device, we collect your device's unique ID
                and location.
              </li>
              <li className="text-xl text-stone-950 text-center md:text-left">
                <strong>Data from Third-Party Services: </strong>
                When you connect your account with third-party services, we
                receive information they share, like your social media profile
                or personal details.
              </li>
              <li className="text-xl text-stone-950 text-center md:text-left">
                <strong>Contest and Survey Participation: </strong>
                If you participate in any contests or surveys we offer, we
                collect the information you provide, including responses,
                feedback, and contact details.
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
              Information Usage
            </h5>
            <p className="text-xl text-stone-950 text-center md:text-left">
              We use the information we collect to:
            </p>
            <ul className="list-disc ms-7">
              <li className="text-xl text-stone-950 text-center md:text-left">
                Manage and maintain your account while providing the services
                you request.
              </li>
              <li className="text-xl text-stone-950 text-center md:text-left">
                Send you marketing and promotional materials related to our
                services.
              </li>
              <li className="text-xl text-stone-950 text-center md:text-left">
                Analyze usage patterns to enhance and improve the website
                experience.
              </li>
              <li className="text-xl text-stone-950 text-center md:text-left">
                Prevent fraud and ensure the security of your data.
              </li>
              <li className="text-xl text-stone-950 text-center md:text-left">
                Respond to legal requests, enforce our legal rights, and comply
                with applicable regulations.
              </li>
            </ul>
          </div>
          {/* Transparency in Information Use */}
          <div>
            <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
              Transparency in Information Use
            </h5>
            <p className="text-xl text-stone-950 text-center md:text-left">
              We prioritize your privacy and transparency regarding how we use
              your information. We collect data through various methods and
              outline how we use it below:
            </p>
            <ul>
              <li className="text-xl text-stone-950 text-center md:text-left">
                <strong>Legal Obligations: </strong> We may disclose your
                information when necessary to comply with legal obligations,
                such as responding to court orders, subpoenas, or protecting our
                rights.
              </li>
              <li className="text-xl text-stone-950 text-center md:text-left">
                <strong>Third-Party Service Providers: </strong> We may share
                your information with third-party providers who assist us with
                services such as payment processing and marketing.These
                providers may access your information only to the extent
                required to perform their services.
              </li>

              <li className="text-xl text-stone-950 text-center md:text-left">
                <strong>Marketing Communications: </strong> With your consent,
                we may send promotional materials regarding our services. You
                can withdraw your consent and opt out from receiving these
                communications at any time.
              </li>

              <li className="text-xl text-stone-950 text-center md:text-left">
                <strong>User Interactions and Contributions: </strong> When you
                engage with other users on our site or post content, we may
                share your information as part of these interactions.
              </li>

              <li className="text-xl text-stone-950 text-center md:text-left">
                <strong>Business Transactions: </strong> If we undergo a merger,
                acquisition, or sale of all or part of our business, we may
                transfer your information as part of that transaction.
              </li>

              <li className="text-xl text-stone-950 text-center md:text-left">
                <strong>Third-Party Advertising: </strong> We may provide your
                information to third-party advertisers to serve targeted ads
                based on your interests and behavior.
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
              Use of Cookies and Tracking Technologies
            </h5>
            <p className="text-xl text-stone-950 text-center md:text-left">
              We use cookies, web beacons, tracking pixels, and similar
              technologies to enhance your experience and personalize your
              interaction with our website. These technologies collect
              non-personally identifiable information. Most web browsers accept
              cookies by default, but you can adjust your settings to disable or
              reject them. Disabling cookies may affect the performance and
              functionality of the site. You cannot disable web beacons, but
              adjusting your cookie settings can minimize their impact.
            </p>
          </div>

          <div>
            <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
              Security of Information
            </h5>
            <p className="text-xl text-stone-950 text-center md:text-left">
              We implement a variety of security measures to protect the
              information you share with us. Although we take steps to preserve
              your data, no system can guarantee complete security. We urge you
              to stay cautious when sharing personal information online.
            </p>
          </div>

          <div>
            <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
              Children's Privacy Protection
            </h5>
            <p className="text-xl text-stone-950 text-center md:text-left">
              We do not collect personal information from children under the age
              of 13. If you believe we have inadvertently collected such
              information, please contact us immediately so we can take
              appropriate action.
            </p>
          </div>

          <div>
            <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
              Do-Not-Track (DNT) Signals
            </h5>
            <p className="text-xl text-stone-950 text-center md:text-left">
              Currently, we do not respond to Do-Not-Track (DNT) signals that
              your browser transmis. If you enable DNT settings, it may affect
              your experience on our website.
            </p>
          </div>

          <div>
            <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
              Management of Personal Information
            </h5>
            <p className="text-xl text-stone-950 text-center md:text-left">
              You have control over your personal information. If you wish to
              opt out of communications, update your preferences through your
              account settings or contact us directly. For communications from
              third parties, please reach out to them directly to opt-out.
            </p>
          </div>

          <div>
            <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
              Privacy Rights and Access to Data
            </h5>
            <p className="text-xl text-stone-950 text-center md:text-left">
              If you reside in the United States, you have the right to request
              information about the personal data we have shared with third
              parties for marketing purposes. You may make this request once a
              year at no charge. Minors can request the removal of publicly
              posted data associated with them.
            </p>
          </div>

          <div>
            <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
              Consent and Agreement
            </h5>
            <p className="text-xl text-stone-950 text-center md:text-left">
              By using our website, you agree to the terms outlined in this
              privacy policy. We recommend checking this page regularly as we
              may update it. If you have any questions or need more information,
              contact us.
            </p>
          </div>

          <div>
            <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
              Comment Submission and Conduct Policy
            </h5>
            <p className="text-xl text-stone-950 text-center md:text-left">
              We encourage your comments and feedback on our site. We expect all
              users to engage respectfully and avoid posting offensive or
              inappropriate content. We reserve the right to remove any comments
              that violate these guidelines or disrupt the site's functionality.
            </p>
          </div>

          <div>
            <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
              Copyright and Intellectual Property Rights
            </h5>
            <p className="text-xl text-stone-950 text-center md:text-left">
              Milwaukee Legal Pros owns all content on this website, including
              text, images, graphics, and other materials, and protects it under
              copyright laws. Unauthorized use or reproduction of this content
              without express written permission is strictly prohibited.
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default LegalInformation;
