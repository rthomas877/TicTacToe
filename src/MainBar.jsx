import { useState, useRef, useEffect } from "react"
import Dropdown from 'react-bootstrap/Dropdown';


function MainBar({difficulty, setDifficulty, color1, setColor1, color2, setColor2, numPlayers, setNumPlayers}) {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const dropdownRef = useRef(null);
    const dropdownRef1 = useRef(null);



    function getDifficultyString(difficulty) {
        if (difficulty === 1) {
            setNumPlayers(1);
            return "Play against a friend"
        } else if (difficulty === 2) {
            setNumPlayers(2);
            return "Easy"
        } else if (difficulty === 3) {
            setNumPlayers(2);
            return "Medium"
        } else {
            setNumPlayers(2);
            return "Impossible"
        }
    }

    function changeColor(value) {
        if (value === 1) {
            setColor1("#f9ac03ff");
            setColor2("#036cf2ff");
        } else if (value === 2) {
            setColor1("#B3000C");
            setColor2("#006338");
        } else if (value === 3) {
            setColor1("#EE7624");
            setColor2("#0C2340");
        } else if (value === 4) {
            setColor1("#006338");
            setColor2("#EE7624");
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            // Only close if clicking outside both dropdowns
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                dropdownRef1.current && !dropdownRef1.current.contains(event.target)
            ) {
                setOpen(false);
                setOpen1(false);
            }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    

    return (
        <nav className="fixed top-0 w-full h-[10vmin] z-50 border-gray-700" style={{ backgroundColor: color2 }}>
            <div className="flex items-center justify-between h-full px-5">
                <h1 className="font-logo text-[6vmin]" style={{ color: color1 }}>Tic-Tac-Toe!</h1>
                <div className="flex gap-[2vmin]">
                    {/* Dropdown wrapper */}
                    <div ref={dropdownRef} className="relative inline-block">
                        {/* Trigger button */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="font-display font-medium rounded-lg text-[2vmin]
                                    px-[2vmin] py-[1vmin] hover:bg-white"
                            style={{ backgroundColor: color1, color: color2 }}
                        >
                            Change Difficulty: {getDifficultyString(difficulty)}
                        </button>

                        {/* Dropdown menu */}
                        {open && (
                            <div
                                className="absolute right-0 mt-[1vmin] z-50
                                        min-w-full rounded-xl shadow-lg"
                                style={{ backgroundColor: color1 }}
                            >
                                <div className="flex flex-col p-[1vmin] gap-[0.5vmin]">
                                    <button 
                                        onClick={() => setDifficulty(1)}
                                        className="text-left px-[1.5vmin] py-[1vmin]
                                                rounded-lg hover:bg-white font-medium text-[2vmin]"
                                        style={{ color: color2 }}
                                    >
                                        Play against a friend
                                    </button>

                                    <button 
                                        onClick={() => setDifficulty(2)}
                                        className="text-left px-[1.5vmin] py-[1vmin]
                                                rounded-lg hover:bg-white font-medium text-[2vmin]"
                                        style={{ color: color2 }}
                                    >
                                        Easy
                                    </button>

                                    <button 
                                        onClick={() => setDifficulty(3)}
                                        className="text-left px-[1.5vmin] py-[1vmin]
                                                rounded-lg hover:bg-white font-medium text-[2vmin]"
                                        style={{ color: color2 }}
                                    >
                                        Medium
                                    </button>

                                    <button 
                                        onClick={() => setDifficulty(4)}
                                        className="text-left px-[1.5vmin] py-[1vmin]
                                                rounded-lg hover:bg-white font-medium text-[2vmin]"
                                        style={{ color: color2 }}
                                    >
                                        Impossible
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Dropdown wrapper */}
                    <div ref={dropdownRef1} className="relative inline-block">
                        {/* Trigger button */}
                        <button
                            onClick={() => setOpen1(!open1)}
                            className="font-display font-medium rounded-lg text-[2vmin]
                                    px-[2vmin] py-[1vmin] hover:bg-white"
                            style={{ backgroundColor: color1, color: color2 }}
                        >
                            Change Color Theme
                        </button>

                        {/* Dropdown menu */}
                        {open1 && (
                            <div
                                className="absolute right-0 mt-[1vmin] z-50
                                        min-w-full rounded-xl shadow-lg"
                                style={{ backgroundColor: color1 }}
                            >
                                <div className="flex flex-col p-[1vmin] gap-[0.5vmin]">
                                    <button 
                                        onClick={() => changeColor(1)}
                                        className="text-left px-[1.5vmin] py-[1vmin]
                                                rounded-lg hover:bg-white font-medium text-[2vmin]"
                                        style={{ color: color2 }}
                                    >
                                        Yellow / Blue
                                    </button>

                                    <button 
                                        onClick={() => changeColor(2)}
                                        className="text-left px-[1.5vmin] py-[1vmin]
                                                rounded-lg hover:bg-white font-medium text-[2vmin]"
                                        style={{ color: color2 }}
                                    >
                                        Red / Green
                                    </button>

                                    <button 
                                        onClick={() => changeColor(3)}
                                        className="text-left px-[1.5vmin] py-[1vmin]
                                                rounded-lg hover:bg-white font-medium text-[2vmin]"
                                        style={{ color: color2 }}
                                    >
                                        Orange / Blue
                                    </button>

                                    <button 
                                        onClick={() => changeColor(4)}
                                        className="text-left px-[1.5vmin] py-[1vmin]
                                                rounded-lg hover:bg-white font-medium text-[2vmin]"
                                        style={{ color: color2 }}
                                    >
                                        Orange / Green
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
        
    )
}

export default MainBar