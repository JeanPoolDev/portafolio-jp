import { useState } from "react";

const stacks = [
  {
    id: 'stack1',
    name: 'React',
    img: 'https://sticker-studio.vercel.app/library/react.svg'
  },
  {
    id: 'stack2',
    name: 'Javascript',
    img: 'https://i.pinimg.com/736x/b0/ba/84/b0ba848588f759bd2438c32b558fb86e.jpg'
  },
  {
    id: 'stack3',
    name: 'Tailwind',
    img: 'https://i.pinimg.com/736x/84/3d/42/843d4278908d40c48c4c74076175f7b0.jpg'
  }
];

export function Slider() {
  const [activeStack, setActiveStack] = useState(stacks[0].id);

  return (
    <div className="w-1/2 ">
      <div className="h-2/6">
        <nav className="flex gap-4">
          {stacks.map(stack => (
            <button
              key={stack.id}
              onClick={() => setActiveStack(stack.id)}
              className={`text-[#C8FF00] py-4 px-5 font-semibold ${activeStack === stack.id ? 'border border-b' : 'border border-white'}`}
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
            className={`absolute bottom-0 right-0 w-[350px] h-[350px] 2xl:w-[500px] 2xl:h-[500px] rounded-full transition-opacity duration-300 ${activeStack === stack.id ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              className="object-cover w-full h-full "
              src={stack.img}
              alt={stack.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};