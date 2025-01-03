import Image from "next/image";
import GetAllPostData from "@/lib/GetAllPostData";
import parse from "html-react-parser";
import SectionLayout from "@/components/shared/SectionLayout";
import HeroSection from "@/components/blog/BlogHeroSection";
import CardMotion from "@/components/motion/CardMotion";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const css = `
 h1, h2, p, br, nav {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: normal;
}

h1, h2 {
  font-style: blog;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 25px;
}

p {
  font-size: 17px;
  padding-top: 6px;
  padding-bottom: 6px;
}

ul {
  list-style-type: disc;
  margin-left: 30px;
}

`;

function extractTextFromHtml(htmlString) {
  // Use regex to strip HTML tags and extract plain text
  const plainText = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
  return plainText;
}

function truncateText(text, wordLimit) {
  const words = text.split(/\s+/);
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
}

export async function generateMetadata({ params }) {
  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.find(
    (blogs) => blogs.slug === params.slug
  );

  if (!blogDetails) {
    return {
      title: "Blog not found",
      description: "No blog post available.",
    };
  }

  const rawDescription = blogDetails?.body || "";
  const plainTextDescription = extractTextFromHtml(rawDescription);
  const shortDescription = truncateText(plainTextDescription, 120);

  return {
    title: blogDetails?.title,
    description: shortDescription,
    openGraph: {
      title: blogDetails?.title,
      description: shortDescription,
      images: blogDetails?.featuredImage?.image?.url,
      url: `https://www.milwaukeelegalpros.com/blog/${blogDetails?.slug}`,
      type: "article",
      site_name: "milwaukeelegalpros.com",
    },
  };
}

const page = async ({ params }) => {
  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.filter(
    (blogs) => blogs.slug === params.slug
  );

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <>
      <style>{css}</style>
      <HeroSection />
      <SectionLayout bg="bg-white">
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div className="grid gap-12 mb-10 gird-col-1 sm:grid-cols-3">
            {blogDetails?.map((blogs, index) => (
              <div className="col-span-2">
                <div className="flex items-center justify-between">
                  <p className="text-[.9rem] md:text-[1rem] text-black text-left italic mt-4 ">
                    {/* {blogs?.author} */}
                  </p>
                  <p className="text-[.9rem] md:text-[1rem] text-black text-left italic mt-4 ">
                    {postDate(blogs?.createdAt)}
                  </p>
                </div>
                <h1
                  className={`mb-0 md:mb-4 text-2xl md:text-4xl font-bold tracking-normal text-left text-[#1B2639] ${playfair.className}`}
                >
                  {blogs?.title}
                </h1>
                <Image
                  width={1000}
                  height={300}
                  src={blogs?.featuredImage?.image?.url}
                  alt={blogs?.featuredImage?.altText}
                  className="w-full h-auto bg-center bg-cover"
                />

                <div className="mt-8 text-md">{parse(blogs?.body)}</div>
              </div>
            ))}

            <div className="col-span-2 sm:col-span-1 h-[100%] md:h-[1000px] overflow-y-scroll overflow-x-hidden bg-black p-3 rounded-lg">
              <h2 className="font-medium text-4xl text-white border-b-2 border-white pb-4 mb-6">
                Our Latest News
              </h2>
              {blogPostData?.data
                ?.filter((pub, no) => pub.published === true)
                ?.map((blogs, index) => (
                  <Link
                    className="flex items-start gap-6 py-4 border-gray-600 border-b-1"
                    key={index}
                    href={`/blog/${blogs?.slug}`}
                  >
                    <Image
                      width={180}
                      height={180}
                      src={blogs?.featuredImage?.image?.url}
                      alt={blogs?.featuredImage?.altText}
                      className="w-[100px] h-auto bg-center bg-cover"
                    />
                    <div>
                      <div className="text-md font-bold text-[#ffffff] text-left line-clamp-2">
                        {blogs?.title}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </CardMotion>
      </SectionLayout>
    </>
  );
};

export default page;
