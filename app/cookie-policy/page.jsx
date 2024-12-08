import PageHeroSection from "@/components/shared/PageHeroSection";
import SectionLayout from "@/components/shared/SectionLayout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const page = () => {
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
  return (
    <>
      <style>{css}</style>
      <Head>
        <title>Cookie Policy - Attorney Hardam Tripathi, Esq.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`Learn about Trip-Law's commitment to your privacy, the use of cookies, comment policy, and legal notices in our detailed Legal Information section`}
        />
      </Head>
      {/* <HeroSection /> */}
      <PageHeroSection
        image={"/assets/about/about-us-hero-banner.png"}
        title={"Cookie Policy"}
      />
      <SectionLayout>
        <div className="text-center md:text-left">
          <div className="text-center">
            <h2 className="text-center text-3xl md:text-[40px] font-extrabold leading-normal  ">
              Cookie Policy
            </h2>
          </div>

          <div className="flex flex-col gap-4 lg:gap-5">
            <div>
              <p className="text-xl text-stone-950 text-center md:text-left ">
                Milwaukee Legal Pros ("we", "us", or "our") uses cookies on our
                website,{" "}
                <Link
                  href="#"
                  className=" duration-300 hover:text-primary underline"
                >
                  www.milwaukeelegalpros.com
                </Link>
                . By accessing or using our website, you consent to the use of
                cookies in accordance with this Cookie Policy.
              </p>
              <p className="text-xl text-stone-950 text-center md:text-left ">
                This Cookie Policy explains cookie usage, third-party
                involvement, your options, and how to manage cookies
                effectively.
              </p>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                What are Cookies?
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left ">
                Cookies are small text files stored in your web browser when you
                visit a website. These files allow the website to remember
                information about your visit, making your future interactions
                with the site more efficient and personalized. Cookies can be
                "persistent" (remaining in your browser after you leave the
                site) or "session" cookies (which are deleted after you close
                your browser).
              </p>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                How We Use Cookies
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left ">
                When you visit{" "}
                <Link
                  href="#"
                  className=" duration-300 hover:text-primary underline"
                >
                  www.milwaukeelegalpros.com,
                </Link>{" "}
                we may place a number of cookies on your browser to enhance your
                experience and provide specific functions. We use cookies for
                the following purposes:
              </p>
              <ul className="list-decimal  ms-7">
                <li className="text-lg lg:text-xl text-stone-950 text-center md:text-left">
                  <strong> Essential Cookies: </strong> These cookies are
                  necessary for the basic functionality of our website. They
                  enable core features such as security and access to secure
                  areas. Without these cookies, the website may not function
                  properly.
                </li>
                <li className="text-lg lg:text-xl text-stone-950 text-center md:text-left">
                  <strong>Analytics Cookies:</strong> We use cookies to track
                  website usage, including popular pages and any errors users
                  encounter. These insights help us improve the performance and
                  functionality of the site.
                </li>
                <li className="text-lg lg:text-xl text-stone-950 text-center md:text-left">
                  <strong>Functional Cookies: </strong> These cookies allow the
                  website to remember your preferences, such as your preferred
                  language, and provide a more personalized experience.
                </li>
                <li className="text-lg lg:text-xl text-stone-950 text-center md:text-left">
                  <strong>Third-Party Cookies:</strong> We use our own cookies
                  and third-party services (e.g., Google Analytics, social
                  media) for usage statistics and ads. Please refer to the
                  respective privacy and cookie policies of these third-party
                  services for further information.
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Managing Cookies
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left ">
                You have control over how cookies are used on your device. Most
                web browsers allow you to manage your cookie preferences. You
                can delete existing cookies or set your browser to refuse
                cookies. However, please note that disabling cookies may impact
                the functionality of the website and prevent you from accessing
                certain features.
              </p>
              <ul className="list-disc  ms-7">
                <li className="text-lg lg:text-xl text-stone-950 text-center md:text-left">
                  <Link
                    href={"https://support.google.com/accounts/answer/32050"}
                    className=" duration-300 hover:text-primary underline"
                  >
                    Google Chrome
                  </Link>
                </li>
                <li className="text-lg lg:text-xl text-stone-950 text-center md:text-left">
                  <Link
                    href={"http://support.microsoft.com/kb/278835"}
                    className=" duration-300 hover:text-primary underline"
                  >
                    Microsoft Internet Explorer
                  </Link>
                </li>
                <li className="text-lg lg:text-xl text-stone-950 text-center md:text-left">
                  <Link
                    href={
                      "https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                    }
                    className="duration-300 hover:text-primary underline "
                  >
                    Mozilla Firefox
                  </Link>
                </li>
                <li className="text-lg lg:text-xl text-stone-950 text-center md:text-left">
                  <Link
                    href={"https://support.apple.com/kb/PH21411?locale=en_US"}
                    className=" duration-300 hover:text-primary underline"
                  >
                    Apple Safari
                  </Link>
                </li>
              </ul>
              <p className="text-xl text-stone-950 text-center md:text-left ">
                Additionally, you can opt out of Google Analytics by installing
                the Google Analytics opt-out browser add-on. This tool prevents
                your activity from being tracked by Google Analytics on any
                website.
              </p>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                Where to Find More Information
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left ">
                For additional information about cookies, you can visit the
                following third-party resources:
              </p>
              <ul className="list-disc  ms-7">
                <li className="text-lg lg:text-xl text-stone-950 text-center md:text-left">
                  <Link
                    href={"http://www.allaboutcookies.org/"}
                    className=" duration-300 hover:text-primary underline"
                  >
                    All About Cookies
                  </Link>
                </li>
                <li className="text-lg lg:text-xl text-stone-950 text-center md:text-left">
                  <Link
                    href={"http://www.networkadvertising.org/"}
                    className=" duration-300 hover:text-primary underline"
                  >
                    Network Advertising Initiative
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left">
                CONTACT US
              </h5>
              <p className="text-xl text-stone-950 text-center md:text-left">
                If you have any questions about our Cookie Policy or how we use
                cookies, please contact us at:
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

export default page;
