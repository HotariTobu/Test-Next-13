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
  parentId: number
  placesById: TravelPlan
  onComplete: (parentId: number, childId: number) => void
}

function PlaceTree({ id, parentId, placesById, onComplete }: PlaceTreeProps) {
  const place = placesById[id]
  const childIds = place.childIds

  return (
    <li>
      {place.title}
      <button onClick={() => onComplete(parentId, id)}>
        Complete
      </button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}

export default function TravelPlan2() {
  const [plan, setPlan] = useState<TravelPlan>(initialTravelPlan);
  const root = plan[0]
  const planetIds = root.childIds

  function handleComplete(parentId: number, childId: number) {
    const parent = plan[parentId]
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter(
        id => id !== childId
      ),
    }

    setPlan({
      ...plan,
      [parentId]: nextParent,
    })
  }

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(planetId => (
          <PlaceTree
            key={planetId}
            id={planetId}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}
