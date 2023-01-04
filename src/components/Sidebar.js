import React from 'react';

const Sidebar = (props) => {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? 'bg-orange-400  text-white' : ''
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}>
        <h4
          className={`${
            note.id === props.currentNote.id ? 'fill-white' : 'fill-red-600'
          } group flex justify-between items-center border border-orange-400 my-1 px-3 py-1 cursor-pointer transition-all duration-300`}>
          {note.body?.split('\n')[0]}
          <svg
            onClick={() => {
              props.deleteNote(note.id);
            }}
            className='text-sm w-8 opacity-0 group-hover:opacity-100'
            clipRule='evenodd'
            fillRule='evenodd'
            strokeLinejoin='round'
            strokeMiterlimit='2'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z'
              fillRule='nonzero'
            />
          </svg>
        </h4>
      </div>
    </div>
  ));

  return (
    <section className='container max-w-screen-md px-2 py-3'>
      <div className='flex justify-between items-center mb-5 pb-5 border-b-2 border-orange-200'>
        <h3 className='text-orange-500 text-3xl font-bold'>Notes</h3>
        <button
          className='bg-orange-400 px-4 py-1 text-xl text-white hover:bg-white hover:text-orange-500 border border-orange-400 rounded-md'
          onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
};

export default Sidebar;
