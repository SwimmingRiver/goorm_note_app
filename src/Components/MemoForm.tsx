import React, { useState, useEffect } from 'react';
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'draft-js/dist/Draft.css'; // Draft.js 스타일 추가

function MemoForm() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(ContentState.createFromText(''))
  );


  const onChange = (newEditorState:EditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div className='EditorWrapper'>
      <Editor
        editorState={editorState}
        onEditorStateChange={onChange}
        localization={{locale:'ko'}}
        editorStyle={{
            border: '1px solid #ccc',
            padding: '10px',}}
      />
    </div>
  );
}

export default MemoForm;
