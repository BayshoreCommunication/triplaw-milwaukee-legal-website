import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";

const css = `
  h2{
    padding-top: 10px;
    font-size: 25px;
    padding-bottom: 10px;
  }
  h5{
    padding-top: 15px;
    font-size: 22px;
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

const PrivacyPolicy = () => {
  return (
    <>
      <style>{css}</style>
      <SectionLayout>
        <div className="text-center md:text-left text-md md:text-xl">
          <div className="text-center mb-4 md:mb-5">
            <h1 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal  ">
              Privacy Policy
            </h1>
          </div>

          <div className="flex flex-col gap-4 lg:gap-5">
            <p className="text-lg text-stone-950 text-center md:text-left">
              Welcome to the Milwaukee Legal Pros website. By accessing or using
              this Site, you agree to the terms outlined in this Privacy Policy.
              We are committed to protecting your privacy and ensuring that your
              personal information is handled responsibly. This policy explains
              how we collect, use, and safeguard your information.
            </p>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Communication and Call Recording
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`Welcome to the Milwaukee Legal Pros website (the “Site”). By accessing or using this Site, you agree to the terms outlined in this Privacy Policy. We are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This policy explains how we collect, use, and safeguard your information.`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Limitations on Use
              </h5>

              <p className="text-lg text-stone-950 text-center md:text-left">
                {`When using the Milwaukee Legal Pros website (the "Site"), you agree to refrain from the following actions:`}
              </p>
              <ul className="list-decimal  ms-7">
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Do not reproduce, distribute, publicly display, or transfer
                  any part of the Site or its content without authorization.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  {`Avoid adapting, altering, modifying, reverse engineering, disassembling, or decompiling the Site or its underlying technology`}
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  You are prohibited from preparing derivative works based on
                  the Site or any Milwaukee Legal Pros technology.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Do not remove, obscure, or modify any copyright, trademark, or
                  proprietary notices displayed on the Site.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Do not frame, mirror, in-line link, or incorporate any portion
                  of the Site into another website, application, or service
                  without prior approval.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Do not use the Site for unlawful, fraudulent, or malicious
                  purposes, or to encourage or solicit such activities.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Avoid attempting to gain unauthorized access to any accounts,
                  systems, or networks associated with the Site, including
                  through hacking or password mining.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Do not interfere with the Site’s security measures or attempt
                  to disable or bypass any access controls.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Do not post unlawful, harmful, abusive, defamatory, obscene,
                  hateful, or objectionable content that could cause legal
                  issues.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Do not submit or post any false, misleading, or inaccurate
                  information.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Do not use the Site to violate intellectual property, privacy,
                  or proprietary rights of Milwaukee Legal Pros or others.
                </li>
              </ul>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`Milwaukee Legal Pros may limit or end access for harmful actions, violating terms, laws, or impacting users or partners.`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Use of the Site Does Not Create a Legal Relationship or
                Obligation
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`Laws differ by jurisdiction; this site’s information is for general purposes and doesn’t replace professional legal advice.The content on this site should not be relied upon as legal guidance. For specific legal concerns, you should consult with an attorney licensed in your state who is familiar with the facts of your case. Only an attorney formally retained by you can provide legal advice tailored to your situation.`}
              </p>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`Accessing this site does not establish an attorney-client relationship with Milwaukee Legal Pros. The information provided, including any submission forms, does not create such a relationship or constitute an offer to represent you. It is essential to seek professional legal counsel regarding your legal rights, obligations, and remedies.
`}
              </p>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`Milwaukee Legal Pros disclaims any liability for actions taken or not taken based on the information provided on this site. We provide the site and content "as is" without guarantees of accuracy, completeness, or reliability. We do not guarantee that the site will meet your needs or be error-free, uninterrupted, or free of harmful components, including viruses. Any unauthorized use of this site will result in the immediate revocation of any permissions granted under these Terms.`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Accounts
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`To access specific features of this website, you must create an account. By creating an account, you agree to provide accurate, current, and complete information and promptly update it as needed. You are responsible for maintaining the confidentiality of your login credentials and all activities conducted under your account. If you suspect unauthorized account use, notify Milwaukee Legal Pros immediately. We may suspend or terminate your account at our discretion for reasons including unauthorized activity, suspected misuse, or account management purposes.`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                No Assurance of Confidentiality
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`Information submitted to Milwaukee Legal Pros via email or this website is not secure and may not remain confidential. While we strive to protect your privacy, the nature of online communications makes confidentiality impossible to guarantee. Contacting us does not establish an attorney-client relationship, and any information shared is not protected as privileged communication.`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Important Notice: This Site Does Not Offer Legal Advice
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`This website provides information through articles, videos, and images but does not offer legal advice. Always seek guidance from a qualified attorney for your legal concerns. Do not delay seeking legal advice or disregard professional counsel based on information obtained from this website. This site may contain links to third-party websites or external resources. `}
              </p>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`Milwaukee Legal Pros does not endorse or verify the accuracy of these resources. References to trade names are for identification purposes only and do not imply endorsement. Additionally, some content, such as drug recall updates, may not reflect the most recent developments. Consult appropriate professionals before making legal, medical, or other significant decisions based on this website’s content.`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Milwaukee Legal Pros Is Not Responsible for Content; Limitation
                on Liability
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`Milwaukee Legal Pros reserves the right to modify, remove, or update this website’s content without prior notice. The information provided may contain errors or inaccuracies, and we do not guarantee its completeness, reliability, or suitability.`}
              </p>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`Use this website at your own risk. Milwaukee Legal Pros and affiliates aren't liable for any damages from use. This includes, but is not limited to, damages arising from errors, omissions, or interruptions in the content provided.`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Third-Party Website Disclosures
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`Milwaukee Legal Pros provides links to third-party websites solely for user convenience. These links do not constitute an endorsement or imply any affiliation with the linked sites. Milwaukee Legal Pros neither controls these websites nor guarantees their compliance with our policies. By accessing third-party links, you assume all associated risks. We recommend reviewing the terms and privacy policies of any linked websites. Links on our site do not imply sponsorship, endorsement, or authorization to use trademarks or copyrighted materials associated with these third-party websites.
`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Variations in State-Specific Legislation
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`Milwaukee Legal Pros provides legal information on various topics, but state laws differ. The content on this site may reference general principles or past legal outcomes, which may not align with your specific circumstances or jurisdiction. We advise consulting an attorney for personalized legal guidance. In some cases, Milwaukee Legal Pros may collaborate with or refer clients to law firms specializing in specific areas of law.`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Milwaukee Legal Pros Clients
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`Individuals become Milwaukee Legal Pros clients only upon entering into a mutually signed retainer agreement. Certain sections of the website are restricted to clients. For Milwaukee Legal Pros clients, communications within designated areas of the website are treated as confidential under the attorney-client relationship. We implement appropriate measures to protect client information and uphold attorney-client privilege in compliance with legal standards.`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Compliance with Legal and Ethical Standards
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`Milwaukee Legal Pros complies with all applicable legal and ethical requirements in the development and maintenance of this site. We commit to adhering to relevant rules and will update the site as necessary when new or revised requirements arise. In accordance with professional responsibility rules in all applicable jurisdictions, Milwaukee Legal Pros designates its principal office located at 230 W Wells St, Ste 800, Milwaukee, WI 53203, and attorney Alexander Tripathi as responsible for this site.`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                For inquiries, contact:
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                Legal Action of Wisconsin - Milwaukee & Waukesha Office
              </p>
              <p className="text-lg text-stone-950 text-center md:text-left">
                <strong>Phone:</strong> <span> (855) 947-2527</span>
              </p>
              <p className="text-lg text-stone-950 text-center md:text-left">
                <strong>Address:</strong>{" "}
                <span> 230 W Wells St, Ste 800, Milwaukee, WI 53203</span>
              </p>
              <p className="text-lg text-stone-950 text-center md:text-left">
                Specializing in Bankruptcy, Civil Rights, Consumer, and Criminal
                Law.
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Disclosure of Advertising Activities
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`Content on the Milwaukee Legal Pros website may constitute lawyer advertising. Choosing a lawyer is a significant decision and should not rely solely on advertisements. Prospective clients may request additional information about our qualifications and experience. Milwaukee Legal Pros does not guarantee case outcomes, as each legal matter is unique and must be evaluated individually. Prior results do not predict future outcomes. Contingent fees and costs apply only upon monetary recovery and are subject to negotiation. Some cases may be referred to or handled jointly with other firms as co-counsel or referral counsel.`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Legal Jurisdiction and Governing Law in Disputes
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`This Privacy Policy and related Terms of Use are governed by the laws of the State of Florida, USA, without regard to conflict-of-law principles. Any disputes arising under these Terms must be resolved as outlined in the Arbitration section below.`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Submissions{" "}
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                {`Any content, information, or material you provide through this website ("Submissions") is deemed non-confidential and non-proprietary. By submitting content, you grant Milwaukee Legal Pros a worldwide, royalty-free license to use, copy, and distribute it.`}
              </p>
              <div>
                <p className="text-lg text-stone-950 text-center md:text-left">
                  You affirm and agree that for each Submission:
                </p>
                <ul className="list-decimal  ms-7">
                  <li className="text-lg text-stone-950 text-center md:text-left">
                    You have the authority to provide the Submission and grant
                    the rights specified above.
                  </li>
                  <li className="text-lg text-stone-950 text-center md:text-left">
                    The Submission does not infringe on the rights of any third
                    party, including intellectual property or privacy rights.
                  </li>
                  <li className="text-lg text-stone-950 text-center md:text-left">
                    Milwaukee Legal Pros does not require additional permissions
                    or incur royalties for its use of the Submission.
                  </li>
                  <li className="text-lg text-stone-950 text-center md:text-left">
                    The Submission complies with all applicable laws,
                    regulations, and this Privacy Policy.
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Arbitration
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                All disputes related to this website must be resolved through
                binding arbitration under the American Arbitration Association
                rules in Florida.
              </p>
              <p className="text-lg text-stone-950 text-center md:text-left">
                By agreeing to arbitration, you waive your right to file a
                lawsuit, request a jury trial, or engage in broad discovery
                processes. Arbitration decisions are final and binding,
                enforceable by courts with appropriate jurisdiction. Class
                action lawsuits and representative actions are prohibited under
                this agreement.
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                International Use
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                Milwaukee Legal Pros operates this website from the United
                States and does not guarantee its services’ suitability for use
                outside the U.S. Accessing the website from outside the U.S. is
                at your own risk and responsibility.
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Other Terms
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                If any provision of this Privacy Policy or Terms of Use is
                deemed invalid or unenforceable, the remaining terms will remain
                in full effect. Milwaukee Legal Pros may block or terminate
                website access for Terms violations or misuse at its discretion.
                Failure to enforce any provision does not constitute a waiver of
                Milwaukee Legal Pros’ rights.
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Copyright{" "}
              </h5>
              <p className="text-lg text-stone-950 text-center md:text-left">
                Milwaukee Legal Pros owns all materials on this site unless
                attributed or public domain; unauthorized use is prohibited.
                Copyright © 2024 Milwaukee Legal Pros. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default PrivacyPolicy;
