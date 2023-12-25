import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="h-16 flex items-center shadow-sm">
            <nav className="flex justify-between items-center w-9/12 mx-auto">
                <Link to="/">
                    <div className="text-zinc-800 font-bold uppercase">
                        <h1 className="text-lg">Diabetic <span className="text-green-700">Wellness</span></h1>
                        <p className="text-[10px] font-normal capitalize -mt-1">
                            {/* Get ready to Quiz and be amazed! */}
                            Empower Life, Embrace Health
                        </p>
                    </div>
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;