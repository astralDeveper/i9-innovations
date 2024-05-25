import { Link } from 'react-router-dom';
import Img1 from '../../assets/home/section5/sec-blog1.jpg';
import Img2 from '../../assets/home/section5/sec-blog2.jpeg';
import Img3 from '../../assets/home/section5/sec-blog3.jpg';
import Img4 from '../../assets/home/section5/sec-blog4.jpg';
import Img8 from '../../assets/home/section5/sec-blog8.png';
import Img9 from '../../assets/home/section5/sec-blog9.png';

export default function Section5() {
  return (
    <section className="mt-16 max-w-screen-xl mx-auto px-4 pb-44">
      <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center">
        Our <span className="text-[#8ABC3E]">Blogs</span>
      </h2>

      <p className="text-2xl max-lg:text-xl max-sm:text-lg font-medium text-center uppercase mt-4 max-sm:mt-2">
        Discover our useful resources and read articles on different
        categories
      </p>

      <div className="grid grid-cols-3 gap-6 mt-12 max-lg:grid-cols-1 max-lg:justify-items-center">
        {blogs.map((item, i) => <BlogsCard key={`${item.title}${i}`} item={item} />)}
      </div>
    </section>
  )
}

function BlogsCard({ item }) {
  return (
    <article className="rounded-2xl p-1 shadow-lg border overflow-hidden max-w-96 relative">
      <img src={item.image} alt="" className="rounded-t-2xl h-52 w-full object-cover"/>

      <div className="p-4 flex flex-col gap-4">
        <p className="bg-orange-600 px-2 py-1 rounded-full font-light text-sm w-max text-white">
          {item.badge}
        </p>

        <h3 className="text-2xl font-medium">
          {item.title}
        </h3>

        <p className="text-zinc-500 line-clamp-2">{item.text}</p>

        <div className="flex justify-between items-center gap-2">
          <Link to={item.link} className="text-[#0065C0] transition-colors hover:text-[#1a74c6]">
            Read more
          </Link>

          <Link to={item.link} aria-hidden className="text-[#0065C0] transition-colors hover:text-[#1a74c6] absolute inset-0 w-full h-full" />

          <time className="text-zinc-500 text-sm">
            {item.date}
          </time>
        </div>
      </div>
    </article>
  )
}

const blogs = [
  {
    image: Img1,
    badge: 'Healthcare',
    title: 'Online Pharmacy App',
    text: "Welcome to the forefront of pharmacy management innovation. At i9 Innovations, we're not just developing Online Pharmacy Apps...",
    date: "13 January 2024",
    link: '/blogs/online-pharmacy'
  },
  {
    image: Img2,
    badge: 'Business',
    title: 'E-commerce',
    text: "Most of the patient nowadays have a cashless card. In an average Mumbai hospital...",
    date: "02 February 2024",
    link: '/blogs/e-commerce-website-design'
  },
  {
    image: Img3,
    badge: 'Education',
    title: 'E-library',
    text: "In the digital age, the traditional concept of libraries is undergoing a significant transformation, giving rise to the e-library or digital library.",
    date: "19 Februrary 2024",
    link: '/blogs/e-library'
  },
  {
    image: Img4,
    badge: 'Analytics',
    title: 'Navigation-NABH',
    text: "Dive into the world of NABH, the cornerstone of healthcare quality and patient safety in...",
    date: "28 Februrary 2024",
    link: '/blogs/navigation-nabh'
  },
  {
    image: Img8,
    badge: 'Healthcare',
    title: '7-Strategies-Improve-Hospital',
    text: "In healthcare management, the significance to improve hospital performance, patient care and efficiency cannot be overstated.",
    date: "28 Februrary 2024",
    link: '/blogs/7-strategies'
  },
  {
    image: Img9,
    badge: 'Healthcare',
    title: 'Comprehensive-Information',
    text: "The integration of a robust Hospital Information System (HIS) has become indispensable.",
    date: "18 March 2024",
    link: '/blogs/comprehensive-information'
  },
]