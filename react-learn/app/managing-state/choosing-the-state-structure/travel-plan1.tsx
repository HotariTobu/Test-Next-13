import { useState } from 'react';
import { initialTravelPlan } from './flatten-places';

interface Place {
  id: number
  title: string
  childIds: number[]
}

interface TravelPlan {
  [id: string]: Place
}

interface PlaceTreeProps {
  id: number
  placesById: TravelPlan
}

function PlaceTree({ id, placesById }: PlaceTreeProps) {
  const place = placesById[id]
  const childIds = place.childIds

  return (
    <li>
      {place.title}
      {childIds.length > 0 && (
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              placesById={placesById}
            />
          ))}
        </ol>
      )}
    </li>
  );
}

export default function TravelPlan1() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0]
  const planetIds = root.childIds

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(planetId => (
          <PlaceTree
            key={planetId}
            id={planetId}
            placesById={plan}
          />
        ))}
      </ol>
    </>
  );
}
