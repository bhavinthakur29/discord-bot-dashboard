import axios from 'axios';

let cache = {
    avatarUrl: null,
    lastFetched: 0,
    ttl: 1000 * 60 * 10, 
};

export async function getBotAvatarUrl(clientId) {
    const now = Date.now();

    if (cache.avatarUrl && now - cache.lastFetched < cache.ttl) {
        return cache.avatarUrl;
    }

    try {
        const res = await axios.get(`https://discord.com/api/v10/users/${clientId}`, {
            headers: {
                "User-Agent": "BotDashboard/1.0"
            }
        });

        const { avatar, id } = res.data;

        if (!avatar) {
            return `https://cdn.discordapp.com/embed/avatars/0.png`;
        }

        const isAnimated = avatar.startsWith('a_');
        const format = isAnimated ? 'gif' : 'png';

        const avatarUrl = `https://cdn.discordapp.com/avatars/${id}/${avatar}.${format}?size=1024`;

        cache.avatarUrl = avatarUrl;
        cache.lastFetched = now;

        return avatarUrl;
    } catch (err) {
        return `https://cdn-icons-png.flaticon.com/512/4712/4712027.png`;
    }
}
