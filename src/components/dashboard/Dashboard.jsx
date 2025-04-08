import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = (props) => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('Info');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [prefix, setPrefix] = useState('!');
    const [status, setStatus] = useState('Online');
    const [dotColor, setDotColor] = useState('#43b581');

    const handleLogout = () => {
        navigate('/');
    };

    const sections = [
        { label: 'Info', icon: 'fa-circle-info' },
        { label: 'Miscellaneous', icon: 'fa-gears' },
        { label: 'Moderation', icon: 'fa-shield-halved' },
        { label: 'Welcome', icon: 'fa-door-open' },
        { label: 'Utility', icon: 'fa-wrench' },
        { label: 'Extra', icon: 'fa-puzzle-piece' },
    ];

    return (
        <div className="dashboard">
            <span className="menu-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                ☰
            </span>

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="logo-area">
                    <div className="logo-img">
                        <img
                            src={props.src || "https://placehold.co/150x150"}
                            alt="Server PFP"
                            className="server-pfp"
                        />
                    </div>
                    <span className="status-dot" style={{ backgroundColor: dotColor }}></span>

                    <p className="server-name">{props.server_name || "{Server Name}"}</p>
                </div>


                <div className="menu-items">
                    {sections.map((section) => (
                        <button
                            key={section.label}
                            className={activeSection === section.label ? 'active' : ''}
                            onClick={() => {
                                setActiveSection(section.label);
                                setIsSidebarOpen(false); // close menu on mobile
                            }}
                        >
                            <i className={`fa-solid ${section.icon}`}></i>
                            {section.label}
                        </button>
                    ))}
                </div>

                <div className="logout-btn">
                    <button onClick={handleLogout}>
                        <i className="fa-solid fa-right-from-bracket"></i> Logout
                    </button>
                </div>
            </div>

            {/* ============================================== */}
            {/* ============================================== */}
            <div className="main-content">
                <h1>{activeSection}</h1>
                <p>This is the content area for <strong>{activeSection}</strong> settings and configurations.</p>
                {activeSection === 'Info' && (
                    <div className="tab-content">
                        {/* <h2>Basic Info</h2> */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();

                                const statusColors = {
                                    'Online': '#43b581',
                                    'Idle': '#faa61a',
                                    'Do Not Disturb': '#f04747',
                                    'Invisible': '#747f8d'
                                };

                                setDotColor(statusColors[status] || '#43b581');
                                alert(`PREFIX: ${prefix}\nSTATUS: ${status}`);
                            }}
                        >

                            <label>
                                Prefix:
                                <input
                                    type="text"
                                    placeholder="!"
                                    value={prefix}
                                    onChange={(e) => setPrefix(e.target.value)}
                                />
                            </label>
                            <label>
                                Bot Status:
                                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option>Online</option>
                                    <option>Idle</option>
                                    <option>Do Not Disturb</option>
                                    <option>Invisible</option>
                                </select>
                            </label>
                            <button type="submit">Update</button>
                        </form>
                    </div>
                )}


                {/* ============================================== */}
                {/* ============================================== */}

                {activeSection === 'Miscellaneous' && (
                    <div className="tab-content">
                        {/* <h2>Basic Info</h2> */}

                    </div>
                )}


                {/* ============================================== */}
                {/* ============================================== */}

                {activeSection === 'Moderation' && (
                    <div className="tab-content">
                        <h2>Moderation Tools</h2>
                        <button>Enable Auto-Moderation</button>
                        <label>
                            Max Warnings:
                            <input type="number" min="1" max="10" />
                        </label>
                    </div>
                )}


                {/* ============================================== */}
                {/* ============================================== */}

                {activeSection === 'Welcome' && (
                    <div className="tab-content">
                        <h2>Welcome Settings</h2>
                        <label>
                            Welcome Channel:
                            <input type="text" placeholder="#general" />
                        </label>
                        <label>
                            Welcome Message:
                            <textarea placeholder="Welcome to the server, {user}!" />
                        </label>
                    </div>
                )}


                {/* ============================================== */}
                {/* ============================================== */}

                {activeSection === 'Utility' && (
                    <div className="tab-content">
                        <h2>Utility Features</h2>
                        <label>
                            Enable Reminders:
                            <input type="checkbox" />
                        </label>
                        <label>
                            Daily Stats Report:
                            <input type="checkbox" />
                        </label>
                    </div>
                )}


                {/* ============================================== */}
                {/* ============================================== */}

                {activeSection === 'Extra' && (
                    <div className="tab-content">
                        <h2>Extra Features</h2>
                        <p>More features coming soon...</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Dashboard;
