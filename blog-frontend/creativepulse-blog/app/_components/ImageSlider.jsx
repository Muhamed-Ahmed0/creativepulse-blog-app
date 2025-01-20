import React from "react";
import "../../app/globals.css";
const ImageSlider = () => {
  const data = [
    {
      imageUrl: "/_images/batman.png",
      opinion:
        "Even the darkest nights can’t overshadow the brilliance of this blog. It’s a beacon of knowledge and inspiration—almost like my Bat-Signal.",
    },
    {
      imageUrl: "/_images/man.png",
      opinion:
        "This blog is my go-to source for understanding complex trends in technology. It breaks down even the most intricate topics into easily digestible insights.",
    },
    {
      imageUrl: "/_images/user2.png",
      opinion:
        "I can’t imagine my life without this blog. It provides me with fresh ideas and perspectives on everything from work to personal growth. It’s a true source of inspiration and knowledge.",
    },
  ];

  return (
    <div className="flex lg:flex-row flex-col justify-center gap-5 py-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-[300px] appear mx-auto lg:w-1/3 lg:m-3 h-fit bg-white border rounded-lg shadow-lg p-4"
        >
          <img
            src={item.imageUrl}
            alt="user"
            className="lg:w-60 lg:h-56 w-48 h-44 m-auto rounded-t-lg"
          />
          <div className="p-4 bg-purple-500 mt-10 rounded-b-lg w-50 h-48">
            <p className="text-white font-semibold">{item.opinion}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
