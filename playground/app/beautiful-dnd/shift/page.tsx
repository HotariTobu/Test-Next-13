'use client'

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface Shift {
  id: string
  date: string
  startTime: string
  endTime: string
}

function Shift(props: Shift) {
  return (
    <div>
      <p>{props.date}</p>
      <p>{props.startTime} - {props.endTime}</p>
    </div>
  );
}

function ShiftList(props: {
  shifts: Shift[]
}) {
  const shifts = props.shifts;
  return (
    <Droppable droppableId="shifts">
      {(provided) => (
        <ul {...provided.droppableProps} ref={provided.innerRef}>
          {shifts.map((shift, index) => (
            <Draggable key={shift.id} draggableId={shift.id} index={index}>
              {(provided) => (
                <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                  <Shift {...shift} />
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}

const shifts = [
  { id: '1', date: '2023-11-01', startTime: '10:00', endTime: '18:00' },
  { id: '2', date: '2023-11-02', startTime: '12:00', endTime: '20:00' },
  { id: '3', date: '2023-11-03', startTime: '09:00', endTime: '17:00' }
];

function App() {
  const [stateShifts, setStateShifts] = useState(shifts);

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;
    const items = Array.from(stateShifts);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setStateShifts(items);
  }

  return (
    <div>
      <h1>Shifts</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <ShiftList shifts={stateShifts} />
      </DragDropContext>
    </div>
  );
}

export default App;
