import React from "react";
import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-2">
        {name}'s Profile
      </h1>
      <p className="text-gray-600 mb-4">{desc}</p>

      {data.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No prompts available for this profile.</p>
      )}
    </section>
  );
};

export default Profile;
