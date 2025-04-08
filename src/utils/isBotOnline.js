import axios from 'axios';

let statusCache = {
    isOnline: null,
    lastChecked: 0,
    ttl: 1000 * 60 * 5, // 5 minutes
};

export const isBotOnline = async (clientId) => {
    const now = Date.now();

    if (statusCache.isOnline !== null && now - statusCache.lastChecked < statusCache.ttl) {
        return statusCache.isOnline;
    }

    try {
        const res = await axios.get(`https://discord.com/api/v10/users/${clientId}`, {
            headers: {
                "User-Agent": "BotDashboard/1.0"
            }
        });

        const isOnline = !!res.data;
        statusCache.isOnline = isOnline;
        statusCache.lastChecked = now;
        return isOnline;

    } catch (err) {
        statusCache.isOnline = false;
        statusCache.lastChecked = now;
        return false;
    }
};
