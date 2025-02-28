import { useState } from "react";

export const stacks = [
  {
    id: 'stack1',
    name: 'React',
    img: 'https://sticker-studio.vercel.app/library/react--sticker.webp'
  },
  {
    id: 'stack2',
    name: 'Javascript',
    img: 'https://sticker-studio.vercel.app/library/javascript--sticker.webp'
  },
  {
    id: 'stack3',
    name: 'Tailwind',
    img: 'https://sticker-studio.vercel.app/library/tailwindcss--sticker.webp'
  },
  {
    id: 'stack4',
    name: 'Typescript',
    img: 'https://sticker-studio.vercel.app/library/typescript--sticker.webp'
  }, {
    id: 'stack5',
    name: 'Javascript',
    img: 'https://sticker-studio.vercel.app/library/figma--sticker.webp'
  },
];

export function Slider() {
  const [activeStack, setActiveStack] = useState(stacks[0].id);

  return (
    <div className="w-full md:w-1/2 h-[550px] md:h-auto">
      <div className="h-auto md:h-2/6">
        <nav className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-2 md:gap-4">
          {stacks.map(stack => (
            <button
              key={stack.id}
              onClick={() => setActiveStack(stack.id)}
              className={`text-[#C8FF00] py-3 px-4 md:py-4 md:px-5 font-semibold ${activeStack === stack.id ? 'border border-b' : 'border border-white'}`}
            >
              {stack.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="h-4/6 relative">
        {stacks.map(stack => (
          <div
            key={stack.id}
            className={`absolute bottom-0 right-0 w-[300px] h-[250px] md:w-[400px] md:h-[350px] 2xl:w-[500px] 2xl:h-[500px] transition-opacity duration-300 px-4 ${activeStack === stack.id ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              className="w-full h-full"
              src={stack.img}
              alt={stack.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};