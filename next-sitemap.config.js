module.exports = {
    siteUrl: 'https://axezisoftware.com',
    exclude: ["/404", '/policy'],
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: ["/404", "/policies"],
            },
            { userAgent: "*", allow: "/" },
        ],
        additionalSitemaps: [
            `https://axezisoftware.com/blogs-sitemap.xml`,
            `https://axezisoftware.com/projects-sitemap.xml`,
        ],
    }
}