import { CiTwitter } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { IoDocumentTextOutline, IoTrashBinOutline } from "react-icons/io5";
import { PiArticle, PiYoutubeLogoLight } from "react-icons/pi";
import { IoShareSocialOutline } from "react-icons/io5";
import { useToast } from "@/hooks/use-toast";

interface CardProps {
  title: string;
  type: "tweet" | "video" | "article" | "link" | "document";
  link: string;
}

const vaiantIcons = {
  tweet: <CiTwitter className="text-gray-500 text-xl" />,
  video: <PiYoutubeLogoLight className="text-gray-500 " />,
  article: <PiArticle className="text-gray-500 " />,
  link: <IoIosLink className="text-gray-500 " />,
  document: <IoDocumentTextOutline className="text-gray-500 " />,
};

function Card({ title, type, link }: CardProps) {
  const { toast } = useToast();

  return (
    <div className="shadow-sm border border-gray-200 p-4 rounded-md bg-white max-w-[300px]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          {vaiantIcons[type]}
          <h2 className="font-medium">{title}</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              navigator.clipboard.writeText(link);
              toast({
                type: "foreground",

                title: "link copied to clipboard !",
              });
            }}
          >
            <IoShareSocialOutline className="text-gray-500 " />
          </button>
          <button>
            <IoTrashBinOutline className="text-gray-500 " />
          </button>
        </div>
      </div>
      <div className="w-full ">
        {type === "video" && (
          <iframe
            width={"100%"}
            height={"auto"}
            src={link.replace("watch?v=", "embed/")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {type === "tweet" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x", "twitter")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
}

export default Card;
