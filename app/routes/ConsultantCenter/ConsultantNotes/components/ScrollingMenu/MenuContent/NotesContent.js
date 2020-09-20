import React from 'react'
import {DemoData} from 'routes/constants/DemoData'
import CommonDemo from 'routes/components/CommonDemo'
import NoteTable from '../../NoteTable'

const {NotesDemoOne, NotesDemoTwo, NotesDemoThree, NotesDemoFour, LinkDemo} = DemoData

const NotesContent = () => {
  return (
    <div>
      <CommonDemo
        content={NotesDemoOne}
        contentThree={NotesDemoTwo}
        contentFour={NotesDemoThree}
        contentFive={NotesDemoFour}
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <div className="mx-3">
        <NoteTable />
      </div>
    </div>
  )
}

export default NotesContent
