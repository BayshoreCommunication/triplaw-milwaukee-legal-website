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

const TermsOfService = () => {
  return (
    <>
      <style>{css}</style>
      <SectionLayout>
        <div className="text-center md:text-left">
          <div className="text-center mb-4 md:mb-5">
            <h2 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal  ">
              Terms Of Service
            </h2>
          </div>

          <div className="flex flex-col gap-4 lg:gap-5">
            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                AGREEMENT TO OUR LEGAL TERMS
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left">
                By using Milwaukee Legal Pros' services, including the website
                and related products, you agree to these Legal Terms. If you
                disagree with these terms, immediately discontinue use of the
                Services. We reserve the right to modify these Legal Terms at
                any time. Any changes will take effect upon publication.
                Continued use of the Services constitutes acceptance of the
                updated terms.
              </p>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                1. OUR SERVICES
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left">
                The Services are intended for lawful purposes only. You are
                responsible for understanding and complying with local laws if
                you access the Services from a jurisdiction with specific legal
                restrictions.
              </p>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                2. INTELLECTUAL PROPERTY RIGHTS
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left">
                <strong>Our Rights:</strong>{" "}
                <span>
                  {`We own or license all intellectual property related to the Services, including website design, software, source code, databases, and trademarks. These rights are protected under global copyright and trademark laws.`}
                </span>
              </p>
              <p className="text-xl text-stone-950 text-center md:text-left">
                <strong>Your Use:</strong>{" "}
                <span>
                  {`We grant you a non-exclusive, non-transferable, revocable license to access and use the Services for personal or non-commercial purposes. Unauthorized use may result in termination of access.`}
                </span>
              </p>
              <p className="text-xl text-stone-950 text-center md:text-left">
                <strong>Your Submissions:</strong>{" "}
                <span>
                  {`By submitting feedback or content, you grant us the right to use, modify, and distribute it within the Services. Any intellectual property rights in these submissions will be assigned to us.`}
                </span>
              </p>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                3. USER REPRESENTATIONS
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left">
                {`By using the Services, you represent and warrant that:`}
              </p>
              <ul className="list-disc  ms-7">
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Your registration information is accurate, complete, and
                  current.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  You possess the legal capacity to comply with these Legal
                  Terms.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  You are not a minor.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  You will not use automated means to access the Services.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  You will not use the Services for unlawful purposes.{" "}
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  You will comply with all applicable laws.
                </li>
              </ul>
              <p className="text-xl text-stone-950 text-center md:text-left">
                {`Failure to provide accurate information may result in suspension or termination of your account.`}
              </p>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                4. USER REGISTRATION
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left">
                Certain features may require registration. You are responsible
                for maintaining the security of your account and password. We
                reserve the right to remove, reclaim, or alter your username if
                deemed inappropriate.
              </p>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                5. PROHIBITED ACTIVITIES
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left">
                {`You agree not to:`}
              </p>

              <ul className="list-disc  ms-7">
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Use the Services for unauthorized commercial purposes.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Harvest data or use automated tools without permission.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Circumvent security measures, or damage or defame the
                  Services.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Harass or harm others using the Services.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Violate relevant laws.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Upload or transmit harmful software, including viruses or
                  malware.
                </li>
                <li className="text-lg text-stone-950 text-center md:text-left">
                  Misuse the Services for profit or competition.
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                6. USER-GENERATED CONTRIBUTIONS
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left">
                You must ensure that the content you submit does not infringe on
                third-party rights and is truthful. By contributing, you grant
                us the right to use your content as described in these Legal
                Terms.
              </p>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                7. CONTRIBUTION LICENSE
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left">
                By submitting content, you grant us an irrevocable,
                royalty-free, worldwide license to use your content in any
                format and through any medium. You waive any moral rights
                associated with your contributions.
              </p>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                8. PRIVACY POLICY
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left">
                We value your privacy. Please review our Privacy Policy for
                information on how we protect your personal data. By using the
                Services, you consent to the terms of our Privacy Policy.
              </p>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                9. COPYRIGHT INFRINGEMENT
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left">
                We respect intellectual property rights. If you believe your
                copyrighted work has been infringed, contact us with the
                relevant details.
              </p>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                10. MODIFICATIONS AND INTERRUPTIONS
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left">
                We may modify, suspend, or discontinue the Services at any time,
                without prior notice. We are not liable for any interruptions or
                changes to the Services.
              </p>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                11. USER DATA
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left">
                We may retain data related to your use of the Services. While we
                take steps to safeguard your information, you are responsible
                for any data you transmit or store.
              </p>
            </div>
            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                12. CALIFORNIA USERS AND RESIDENTS
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left">
                If you cannot resolve your issue, contact the Consumer
                Assistance Unit of the Division of Consumer Services at the
                California Department of Consumer Affairs. Reach them at{" "}
                <strong>
                  1625 North Market Blvd., Suite N 112, Sacramento, CA 95834,
                </strong>{" "}
                or by phone at <strong>(800) 952-5210</strong>.
              </p>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                CONTACT US
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left">
                For inquiries or issues related to the Services, please contact
                us at:
              </p>
              <p className="text-xl text-stone-950 text-center md:text-left">
                Milwaukee Legal Pros <br /> 230 W Wells St, Ste 800 <br />{" "}
                Milwaukee, WI 53203 <br />
                Phone: <strong>(855) 947-2527</strong>
                <br />
                Email:{" "}
                <Link
                  href="mailto:info@milwaukeelegalpros.com"
                  className="hover:text-primary duration-300 font-medium underline"
                >
                  info@milwaukeelegalpros.com
                </Link>
                <br />
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default TermsOfService;
