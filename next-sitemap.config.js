module.exports = {
    siteUrl: 'https://axezisoftware.com',
    exclude: ["/404"],
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: ["/404"],
            },
            { userAgent: "*", allow: "/" },
        ],
        additionalSitemaps: [
            `https://axezisoftware.com/blogs-sitemap.xml`,
            `https://axezisoftware.com/projects-sitemap.xml`,
        ],
    }
}