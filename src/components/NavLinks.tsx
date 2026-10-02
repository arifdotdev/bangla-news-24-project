import Link from 'next/link';

interface NavItem {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

const NavLinks = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories');
    const data = await res.json();
    const navs: NavItem[] = data.data;
    const filteredNavs: NavItem[] = navs.filter((nav) => nav.scrapable);

    return (
        <div className='flex gap-5 justify-center mt-5'>
            <Link href={'/'}>হোম</Link>
            {filteredNavs.map((nav, index) => (
                <Link key={index} href={`/category/${nav.slug}`}>
                    {nav.title}
                </Link>
            ))}
        </div>
    );
};

export default NavLinks;