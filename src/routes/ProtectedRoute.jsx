import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isBotOnline } from '../utils/isBotOnline';
import { clientId } from '../config';

const ProtectedRoute = ({ children }) => {
    const [isOnline, setIsOnline] = useState(null);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const checkBotStatus = async () => {
            try {
                const online = await isBotOnline(clientId);
                setIsOnline(online);
            } catch (error) {
                console.error('Error checking bot status:', error);
                setIsOnline(false);
            } finally {
                setChecking(false);
            }
        };

        checkBotStatus();
    }, []);

    if (checking) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-700 text-lg font-medium animate-pulse">
                Checking bot status...
            </div>
        );
    }

    if (!isOnline) {
        return (
            <div className="min-h-screen bg-red-50 flex items-center justify-center p-6">
                <div className="bg-white border border-red-300 shadow-lg rounded-xl p-8 text-center max-w-lg w-full animate-fade-in">
                    <h2 className="text-3xl font-bold text-red-600 mb-4">Bot is Offline</h2>
                    <p className="text-gray-700 mb-6">
                        It looks like your bot isn’t running right now. Please make sure the bot is online to continue.
                    </p>
                    <Link
                        to="/"
                        className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
                    >
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return children;
};

export default ProtectedRoute;
