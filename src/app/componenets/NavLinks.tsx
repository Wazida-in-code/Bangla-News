import Link from 'next/link';

interface NavLinksType {
      slug: string,
      title: string,
      topicId: string | null,
      url: string,
      scrapable: boolean
    }

const NavLinks = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data = await res.json();
    const links: NavLinksType[] = data.data
    const filterdLinks = links.filter(n => n.scrapable !== false)
    return (
        <div className='flex gap-4 items-center justify-center text-neutral-700 mt-6 text-sm'>
            <Link href="/">হোম</Link>
            {
                filterdLinks.map((n, i:number) =>
                <Link href={`/category/${n.slug}`} key={i}>{n.title}</Link>)
            }
        </div>
    );
};

export default NavLinks;