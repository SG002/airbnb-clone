import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faIcons, 
  faMountain, 
  faWater, 
  faTractor, 
  faTree, 
  faSnowflake, 
  faUmbrellaBeach, 
  faWaterLadder, 
  faCrown, 
  faHouse, 
  faBed,  
  faHouseChimney
} from '@fortawesome/free-solid-svg-icons'

const categories = [
  { name: 'Icons', icon: faIcons },
  { name: 'Amazing views', icon: faMountain },
  { name: 'Amazing pools', icon: faWater },
  { name: 'Farms', icon: faTractor },
  { name: 'Treehouses', icon: faTree },
  { name: 'Arctic', icon: faSnowflake },
  { name: 'Beachfront', icon: faUmbrellaBeach },
  { name: 'Lakefront', icon: faWaterLadder },
  { name: 'Luxe', icon: faCrown },
  { name: 'Cabins', icon: faHouse },
  { name: 'Rooms', icon: faBed },
  { name: 'Tiny homes', icon: faHouseChimney },
  { name: 'Icons', icon: faIcons },
  { name: 'Amazing views', icon: faMountain },
  { name: 'Amazing pools', icon: faWater },
  { name: 'Farms', icon: faTractor },
  { name: 'Treehouses', icon: faTree },
  { name: 'Arctic', icon: faSnowflake },
]

export default function CategoryBar() {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4 border-b">
      {categories.map((category) => (
        <div key={category.name} className="flex flex-col items-center space-y-1 min-w-[64px]">
          <FontAwesomeIcon icon={category.icon} className="text-gray-500 text-2xl" />
          <span className="text-xs text-gray-600">{category.name}</span>
        </div>
      ))}
    </div>
  )
}