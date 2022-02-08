export const requestCollectibles = async (call: string, query?: {}) => {
    try {
        const collectibles = await fetch(
            `https://collectibles-mainnet.liskscan.com/${call}?${
                query ? new URLSearchParams(query).toString() : ""
            }`,
        )

        return await collectibles.json()
    } catch (e) {
        return []
    }
}