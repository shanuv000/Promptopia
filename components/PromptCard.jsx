import React, { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(post.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const isUserOwner = session?.user.id === post.creator._id;
  const isOnProfilePage = pathName === "/profile";

  return (
    <div className="prompt_card p-4 border border-gray-200 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="text-xs text-gray-500">{post.creator.email}</p>
          </div>
        </div>
        <div
          className="copy_btn cursor-pointer"
          onClick={handleCopy}
          title={copied ? "Copied!" : "Copy to Clipboard"}
        >
          <Image
            src={copied ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
            width={16}
            height={16}
          />
        </div>
      </div>
      <p className="my-2 text-sm text-gray-700">{post.prompt}</p>
      <p
        className="text-sm text-blue-500 cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>
      {isUserOwner && isOnProfilePage && (
        <div className="mt-3 flex items-center gap-4">
          <p
            className="text-sm text-green-500 cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="text-sm text-orange-500 cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
