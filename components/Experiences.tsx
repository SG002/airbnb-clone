import Image from 'next/image'

const experiencesData = [
  {
    img: '/experience1.jpg',
    title: 'Online Experiences',
    description: 'Travel the world without leaving home.',
  },
  {
    img: '/experience2.jpg',
    title: 'Unique stays',
    description: 'Spaces that are more than just a place to sleep.',
  },
  {
    img: '/experience3.jpg',
    title: 'Entire homes',
    description: 'Comfortable private places, with room for friends or family.',
  },
  {
    img: '/experience2.jpg',
    title: 'Unique stays',
    description: 'Spaces that are more than just a place to sleep.',
  },
]

export default function Experiences() {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold py-8">Discover Experiences</h2>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        {experiencesData.map(({ img, title, description }) => (
          <div key={img} className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-80 w-80">
              <Image
                src={img}
                layout="fill"
                className="rounded-xl"
                alt={title}
              />
            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}