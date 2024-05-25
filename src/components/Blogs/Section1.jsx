import { Link } from 'react-router-dom';
import Img1 from '../../assets/home/section5/sec-blog1.jpg';
import Img2 from '../../assets/home/section5/sec-blog2.jpeg';
import Img3 from '../../assets/home/section5/sec-blog3.jpg';
import Img4 from '../../assets/home/section5/sec-blog4.jpg';
import Img6 from '../../assets/home/section5/sec-blog6.jpeg';
import Img7 from '../../assets/home/section5/sec-blog7.jpeg';
import Img8 from '../../assets/home/section5/sec-blog8.png';
import Img9 from '../../assets/home/section5/sec-blog9.png';

export default function Section1() {
  return (
    <section className="max-w-screen-xl mx-auto mt-36 py-36 px-4">
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1 max-lg:justify-items-center">
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
  {
    image: Img7,
    badge: 'Analytics',
    title: 'Diagnostic-Imaging-Ris-Pacs',
    text: "In the intricate world of medical imaging, from the high-stakes performances of CT and MRI scans to the precise choreography of PET",
    date: "20 March 2024",
    link: '/blogs/diagnostic-imaging'
  },
  {
    image: Img6,
    badge: 'Healthcare',
    title: 'Future-Pathology',
    text: "The genesis of lab equipment interfacing, also widely known as Laboratory Information Management Systems (LIMS).",
    date: "23 March 2024",
    link: '/blogs/future-pathology'
  }
]