FRONT END APP

TODOS

1. Modify InitialData.js so that it is compatible with the mongoDb dataset

2. Send intial Data to DndEditor as a context

3. UPdate the funcitons so that the new fields can also be updated in the app (updating the new context)

4. Bring in DndEditor files to infoshot

5. Update Infoshot card context to match new Dnd Context

6. Consolidate infoshot data context to three contexts. 
    1. Alerts     {as is}
    2. Auth & Users {as is}
    3. Documents    {Contains user, card, document} {everything to dispay an infoshot}

7. Create a new route with an automated routing assignment to generate URLs for embed

DRAG N DROP COMPONENT

  <DndEditor.js  {initialData.js}>
    <DndContext>
      <Column>
       <Droppable droppableId={this.props.column.id}>
        <TaskList
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}>
          {this.props.tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
      <Droppable/>
      <Column>
    <DndContext/>
  <DndEditor.js>

INFOSHOT APP


