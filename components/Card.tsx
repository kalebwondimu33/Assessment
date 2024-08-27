import React from "react";

// Define the interface for the component props
interface CardProps {
  image: string;
  title: string;
  description: string;
  author?: {
    name: string;
  };
  tags: string[];
}

// Use the interface in the functional component
const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  author,
  tags,
}) => {
  return (
    <div className="blog-card shadow-md p-4 rounded-md hover:shadow-lg transition duration-300 flex items-center gap-4 w-[75%] mx-auto mt-[50px]">
      {/* Container for text content */}
      <div className="text-content flex-1">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-4">
          {author?.name || "Unknown Author"}
        </p>
        {tags && tags.length > 0 && (
          <div className="tags flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm bg-gray-200 rounded-full px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Container for image */}
      {image && (
        <img
          src={image}
          alt={title || "Blog Image"}
          className="w-48 h-32 object-cover rounded-md"
        />
      )}
    </div>
  );
};

export default Card;
