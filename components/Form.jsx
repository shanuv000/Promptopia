import { useState } from "react";
import { useRouter } from "next/navigation";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const router = useRouter();
  const [charCount, setCharCount] = useState(post.prompt.length);

  const handleCharCount = (value) => {
    setCharCount(value);
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism p-8 rounded-lg shadow-md"
      >
        <label className="flex flex-col">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => {
              setPost({ ...post, prompt: e.target.value });
              handleCharCount(e.target.value.length);
            }}
            placeholder="Write your post here"
            required
            className="form_textarea resize-none h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <span className="text-sm text-gray-500 mt-1">
            Characters: {charCount}
          </span>
        </label>

        <label className="flex flex-col">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Field of Prompt{" "}
            <span className="font-normal">
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="form_input p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>

        <div className="flex items-center justify-between mt-5">
          <button
            type="button"
            onClick={handleCancel}
            className="text-gray-500 text-sm cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={submitting}
            className={`px-5 py-2 text-sm rounded-full ${
              submitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary-orange hover:bg-primary-orange-dark"
            } text-white`}
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
