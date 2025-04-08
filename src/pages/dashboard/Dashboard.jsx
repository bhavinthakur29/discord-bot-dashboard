import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBotAvatarUrl } from '../../utils/getBotAvatarUrl';
import { clientId } from '../../config';

const sections = [
    { label: 'Info', icon: 'fa-circle-info' },
    { label: 'Miscellaneous', icon: 'fa-gears' },
    { label: 'Moderation', icon: 'fa-shield-halved' },
    { label: 'Welcome', icon: 'fa-door-open' },
    { label: 'Utility', icon: 'fa-wrench' },
    { label: 'Extra', icon: 'fa-puzzle-piece' },
];

export default function Dashboard(props) {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('Info');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [prefix, setPrefix] = useState('!');
    const [status, setStatus] = useState('Online');
    const [dotColor, setDotColor] = useState('#43b581');
    const [botOnline, setBotOnline] = useState(true);
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        const checkBot = async () => {
            const avatarUrl = await getBotAvatarUrl(clientId);
            setAvatar(avatarUrl);
        };
        checkBot();
    }, []);

    const handleLogout = () => {
        navigate('/');
    };

    useEffect(() => {
        if (!botOnline) {
            setTimeout(() => navigate('/'), 4000);
        }
    }, [botOnline, navigate]);

    if (!botOnline) {
        return (
            <div className="flex items-center justify-center h-screen bg-[#1e1e2f] text-white text-lg text-center p-5">
                <div className="bg-red-500 text-white p-5 rounded-lg flex justify-between items-center w-full max-w-xl shadow-lg">
                    <span>🤖 Bot is offline. Redirecting you to home...</span>
                </div>
            </div>
        );
    }

    const statusColors = {
        Online: '#43b581',
        Idle: '#faa61a',
        'Do Not Disturb': '#f04747',
        Invisible: '#747f8d',
    };

    return (
        <div className="flex h-screen font-sans bg-[#1e1e2f] text-white relative">
            <span
                className="md:hidden absolute top-4 right-4 bg-[#1e1e2f] text-white text-2xl p-2 z-50 cursor-pointer"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                ☰
            </span>

            <div
                className={`w-[250px] flex flex-col justify-between bg-[#1e1e2f] transition-transform duration-300 ease-in-out z-40 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 fixed md:relative h-full`}
            >
                <div className="text-center text-lg font-bold py-5 border-b border-[#2f2f42] relative">
                    <div className="w-20 h-20 rounded-full mx-auto overflow-hidden border-2 border-white">
                        <img
                            src={avatar || 'https://placehold.co/150x150'}
                            alt="Bot Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span
                        className="w-[15px] h-[15px] rounded-full border-2 border-white absolute -bottom-2 left-[55%]"
                        style={{ backgroundColor: dotColor }}
                    ></span>
                    <p className="mt-3">{props.server_name || '{Server Name}'}</p>
                </div>

                <div className="flex flex-col py-4 h-full">
                    {sections.map((section) => (
                        <button
                            key={section.label}
                            className={`flex items-center gap-3 px-5 py-3 text-left text-base hover:bg-[#2f2f42] transition-colors duration-300 ${activeSection === section.label ? 'bg-[#2f2f42]' : ''
                                }`}
                            onClick={() => {
                                setActiveSection(section.label);
                                setIsSidebarOpen(false);
                            }}
                        >
                            <i className={`fa-solid ${section.icon}`}></i>
                            {section.label}
                        </button>
                    ))}
                </div>

                <div className="px-5 mb-6">
                    <button
                        onClick={handleLogout}
                        className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-md transition-colors duration-300"
                    >
                        <i className="fa-solid fa-right-from-bracket"></i> Logout
                    </button>
                </div>
            </div>

            <div className="flex-1 p-6 md:p-10 bg-white text-black shadow-inner overflow-y-auto">
                <h1 className="text-3xl mb-2">{activeSection}</h1>
                <p className="text-gray-600 text-lg">
                    This is the content area for <strong>{activeSection}</strong> settings and configurations.
                </p>

                {activeSection === 'Info' && (
                    <div className="flex flex-col gap-4 mt-6">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setDotColor(statusColors[status] || '#43b581');
                            }}
                        >
                            <label className="flex flex-col text-base text-gray-700">
                                Prefix:
                                <input
                                    type="text"
                                    value={prefix}
                                    onChange={(e) => setPrefix(e.target.value)}
                                    className="mt-1 px-3 py-2 text-base border border-gray-300 rounded-md"
                                />
                            </label>
                            <label className="flex flex-col text-base text-gray-700">
                                Bot Status:
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="mt-1 px-3 py-2 text-base border border-gray-300 rounded-md"
                                >
                                    <option>Online</option>
                                    <option>Idle</option>
                                    <option>Do Not Disturb</option>
                                    <option>Invisible</option>
                                </select>
                            </label>
                            <button
                                type="submit"
                                className="mt-2 px-4 py-2 text-base bg-[#1e1e2f] text-white rounded-md hover:bg-[#333] transition-colors duration-200 w-fit"
                            >
                                Update
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};
