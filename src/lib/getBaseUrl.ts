export const getBaseUrl = () => {
    if (typeof window !== "undefined") return "";
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    // replace example.com with your actual production url
    if (process.env.NODE_ENV === "production") return "https://example.com";
    return `http://localhost:${process.env.PORT ?? 3000}`;
};