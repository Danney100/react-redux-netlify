import React from 'react'
import {DemoData} from 'routes/constants/DemoData'
import CommonDemo from 'routes/components/CommonDemo'
import Note from './Note'
const {NotesDemoOne, NotesDemoTwo, NotesDemoThree, NotesDemoFour, LinkDemo} = DemoData

const NotesContent = () => {
  return (
    <div>
      <CommonDemo
        content={NotesDemoOne}
        contentThree={NotesDemoTwo}
        contentFour={NotesDemoThree}
        contentFive={NotesDemoFour}
        contentOne={LinkDemo}
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <div>
        <Note />
      </div>
    </div>
  )
}

export default NotesContent
