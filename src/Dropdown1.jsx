import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Dropdown1({difficulty, setDifficulty}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
    {/* Trigger button */}
    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-brand_yellow px-[2vmin] py-[1vmin] text-[2vmin] font-display text-brand hover:bg-white shadow-md">
        Change Color Theme
    </MenuButton>

    {/* Dropdown items */}
    <MenuItems className="absolute right-0 z-50 mt-[1vmin] min-w-[12rem] origin-top-right rounded-lg bg-brand_yellow shadow-lg outline-none">
        <div className="flex flex-col p-[1vmin] gap-[0.5vmin]">
            <div className="flex flex-col p-[1vmin] gap-[0.5vmin]">
                <button
                    onClick={() => changeTheme("yellow-blue")}
                    className="block w-full text-left px-[2vmin] py-[1vmin] rounded-lg font-display text-[2vmin] text-brand hover:bg-white"
                >
                    Yellow / Blue
                </button>

                <button
                    onClick={() => changeTheme("orange-green")}
                    className="block w-full text-left px-[2vmin] py-[1vmin] rounded-lg font-display text-[2vmin] text-brand hover:bg-white"
                >
                    Orange / Green
                </button>

                <button
                    onClick={() => changeTheme("orange-purple")}
                    className="block w-full text-left px-[2vmin] py-[1vmin] rounded-lg font-display text-[2vmin] text-brand hover:bg-white"
                >
                    Orange / Purple
                </button>

                <button
                    onClick={() => changeTheme("red-green")}
                    className="block w-full text-left px-[2vmin] py-[1vmin] rounded-lg font-display text-[2vmin] text-brand hover:bg-white"
                >
                    Red / Green
                </button>
            </div>
        </div>
    </MenuItems>
    </Menu>

  )
}
