import React, { useState } from 'react';
import * as Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';
import ReactMde from 'react-mde';

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});
const Editor = ({ currentNote, updateNote }) => {
  const [selectedTab, setSelectedTab] = useState('write');
  return (
    <div className='container'>
      <ReactMde
        value={currentNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        heightUnits='vh'
      />
    </div>
  );
};

export default Editor;
