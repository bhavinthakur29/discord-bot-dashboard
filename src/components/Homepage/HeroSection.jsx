import React from 'react';
import { FaDiscord } from 'react-icons/fa';

const HeroSection = ({ id, botName }) => {
    const inviteUrl = `https://discord.com/oauth2/authorize?client_id=${id}&permissions=8&integration_type=0&scope=bot`;

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
            <p className="mx-auto -mt-4 max-w-2xl text-xl sm:text-2xl tracking-tight text-slate-700 sm:mt-6">
                Welcome to <span className="border-b border-dotted border-indigo-500 font-semibold text-indigo-600">{botName}</span>
            </p>

            <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl sm:text-7xl font-bold tracking-tight text-slate-900">
                Your <span className="text-indigo-600">Discord</span> Bot, <br />
                <span className="inline-block">Smarter & Simpler</span>
            </h1>

            <p className="mx-auto mt-9 max-w-2xl text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-slate-700">
                Supercharge your <span className="text-indigo-600 font-semibold">Discord</span> experience with
                <span className="text-indigo-600 font-semibold"> {botName}</span> — the ultimate dashboard to manage, customize, and engage your community effortlessly.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
                {/* Invite Button */}
                <a
                    href={inviteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-base font-semibold bg-indigo-600 text-white hover:bg-indigo-500 hover:text-white active:bg-indigo-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
                >
                    <FaDiscord className="h-5 w-5 mr-2" />
                    Invite {botName}
                </a>

                {/* Login Button */}
                <a
                    href="https://discord.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex ring-1 items-center justify-center rounded-full py-3 px-6 text-base font-semibold ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus:outline-none focus-visible:outline-blue-600 focus-visible:ring-slate-300 transition"
                >
                    <FaDiscord className="h-5 w-5 mr-2 text-blue-600" />
                    Login with Discord
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
