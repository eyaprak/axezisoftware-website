import data from '../../utils/projects.json';
import { getServerSideSitemap } from "next-sitemap";
import slugify from 'slugify';
export const getServerSideProps = async (ctx) => {

    const newArray = data.projelerData.map((item) => {
        item.slug = slugify(item.title).toLowerCase()
        return item;
    })

    const newsSitemaps = newArray.map((item) => ({
        loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}${item.slug.toString()}`,

        lastmod: new Date().toISOString(),
    }));

    const fields = [...newsSitemaps];

    return getServerSideSitemap(ctx, fields);
};

export default function Site() { }