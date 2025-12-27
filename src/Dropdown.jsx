import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Dropdown({difficulty, setDifficulty}) {

    function getDifficultyString(difficulty) {
        if (difficulty === 1) {
            return "Play against a friend"
        } else if (difficulty === 2) {
            return "Easy"
        } else if (difficulty === 3) {
            return "Medium"
        } else {
            return "Impossible"
        }
    }

  return (
    <Menu as="div" className="relative inline-block text-left">
    {/* Trigger button */}
    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-brand_yellow px-[2vmin] py-[1vmin] text-[2vmin] font-display text-brand hover:bg-white shadow-md">
        Change Difficulty: {getDifficultyString(difficulty)}
    </MenuButton>

    {/* Dropdown items */}
    <MenuItems className="absolute right-0 z-50 mt-[1vmin] min-w-[12rem] origin-top-right rounded-lg bg-brand_yellow shadow-lg outline-none">
        <div className="flex flex-col p-[1vmin] gap-[0.5vmin]">
        <MenuItem>
            {({ active }) => (
            <a
                href="#"
                className={`block px-[2vmin] py-[1vmin] rounded-lg font-display text-[2vmin] ${
                active ? "bg-white text-brand" : "text-brand"
                }`}
            >
                Account settings
            </a>
            )}
        </MenuItem>

        <MenuItem>
            {({ active }) => (
            <a
                href="#"
                className={`block px-[2vmin] py-[1vmin] rounded-lg font-display text-[2vmin] ${
                active ? "bg-white text-brand" : "text-brand"
                }`}
            >
                Support
            </a>
            )}
        </MenuItem>

        <MenuItem>
            {({ active }) => (
            <a
                href="#"
                className={`block px-[2vmin] py-[1vmin] rounded-lg font-display text-[2vmin] ${
                active ? "bg-white text-brand" : "text-brand"
                }`}
            >
                License
            </a>
            )}
        </MenuItem>

        <form action="#" method="POST">
            <MenuItem>
            {({ active }) => (
                <button
                type="submit"
                className={`w-full text-left px-[2vmin] py-[1vmin] rounded-lg font-display text-[2vmin] ${
                    active ? "bg-white text-brand" : "text-brand"
                }`}
                >
                Sign out
                </button>
            )}
            </MenuItem>
        </form>
        </div>
    </MenuItems>
    </Menu>

  )
}
