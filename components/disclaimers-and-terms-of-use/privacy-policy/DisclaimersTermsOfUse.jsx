import SectionLayout from "@/components/shared/SectionLayout";
import Link from "next/link";
import React from "react";

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

const DisclaimersTermsOfUse = () => {
  return (
    <>
      <style>{css}</style>
      <SectionLayout>
        <div className="text-center md:text-left text-md md:text-xl">
          <div className="text-center mb-4 md:mb-5">
            <h2 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal  ">
              Disclaimers
            </h2>
          </div>

          <div className="flex flex-col gap-4 lg:gap-5">
            <p className="text-lg lg:text-xl text-stone-950 text-center md:text-left">
              By accessing and using the website of Milwaukee Legal Pros, you
              acknowledge and agree to the following terms:
            </p>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Communication and Call Recording
              </h5>
              <p className="text-lg lg:text-xl text-stone-950 text-center md:text-left">
                {`Milwaukee Legal Pros may record phone calls with you to ensure accurate, courteous, and prompt service. We may also contact you by phone, email, or text at any number or address you have provided. Communication may include pre-recorded/artificial voice messages and/or automatic dialing systems. By providing your contact information, you confirm that you are authorized to receive communications at those numbers or addresses.`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Information Only, Not Legal Advice
              </h5>

              <p className="text-lg lg:text-xl text-stone-950 text-center md:text-left">
                {` The content provided on our website is for educational and informational purposes only. It is not and should not be construed as legal advice. We do not offer services or legal advice through this website. The information provided may not reflect the latest legal developments, and we do not guarantee the accuracy, completeness, or timeliness of the content. Always consult with an attorney before making legal decisions.`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Website Terms of Use
              </h5>
              <p className="text-lg lg:text-xl text-stone-950 text-center md:text-left">
                {`By using this website, you agree to abide by our Terms of Use. We may update or modify these terms at any time, and those changes will take effect immediately upon posting. It is your responsibility to review these terms periodically for updates. Continued use of the site constitutes your acceptance of these updated terms. If any part of these terms is found to be invalid or unenforceable, the remainder will still be in effect.`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Intellectual Property Rights
              </h5>
              <p className="text-lg lg:text-xl text-stone-950 text-center md:text-left">
                {`Milwaukee Legal Pros and its licensors own the site's content, technology, and software, protected by copyright and trademark laws.You are granted a limited, non-exclusive, non-transferable license to use the website solely for personal use. You may not reproduce, distribute, or use the site’s content for commercial purposes without prior written permission from Milwaukee Legal Pros.`}
              </p>
            </div>
            <div className="">
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Limitation of Liability
              </h5>
              <p className="text-lg lg:text-xl text-stone-950 text-center md:text-left">
                {`Milwaukee Legal Pros may change or discontinue the website anytime without notice and does not ensure its accuracy or functionality. We are not liable for any damages resulting from your use or inability to use this website.`}
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default DisclaimersTermsOfUse;
