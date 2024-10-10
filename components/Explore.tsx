import Image from 'next/image'

const exploreData = [
  { img: '/explore1.jpg', location: 'Goa', distance: '3-hour drive' },
  { img: '/explore2.jpg', location: 'Mumbai', distance: '4-hour drive' },
  { img: '/explore3.jpg', location: 'Delhi', distance: '5-hour drive' },
  { img: '/explore4.jpg', location: 'Bangalore', distance: '6-hour drive' },
]

export default function Explore() {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData.map(({ img, location, distance }) => (
          <div key={img} className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
            <div className="relative h-16 w-16">
              <Image
                src={img}
                layout="fill"
                className="rounded-lg"
                alt={location}
              />
            </div>
            <div>
              <h2>{location}</h2>
              <h3 className="text-gray-500">{distance}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}