import React, { useEffect, useState } from 'react';
import Split from 'react-split';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || [],
  );
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || '',
  );

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((oldNotes) => {
      const newArray = [];
      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i];
        if (oldNote.id === currentNoteId) {
          newArray.unshift({ ...oldNote, body: text });
        } else {
          newArray.push(oldNote);
        }
      }
      return newArray;
    });
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  function deleteNote(noteId) {
    console.log('noteId: ', noteId);
    setNotes((oldNotes) => {
      return oldNotes.filter((oldNote) => {
        return oldNote.id !== noteId;
      });
    });
  }

  return (
    <div className='p-1'>
      {notes.length > 0 ? (
        <Split
          className='split text-lg'
          sizes={[40, 60]}
          direction='horizontal'
          gutterSize={20}>
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
        </Split>
      ) : (
        <div className='w-screen h-screen flex justify-center items-center flex-col gap-5'>
          <h1 className='font-bold text-3xl text-orange-600 capitalize'>
            You have no notes
          </h1>
          <button
            className='border border-orange-500 bg-orange-500 px-4 py-1 text-white text-xl rounded-md capitalize hover:bg-white hover:text-orange-500'
            onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
