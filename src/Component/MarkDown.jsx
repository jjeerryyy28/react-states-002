import React, { useState } from 'react';
import {marked} from 'marked';

const MarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useState('');

  const handleInputChange = (event) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div>
      <h2>Markdown Editor</h2>
      <div>
        <textarea
          rows="10"
          cols="50"
          value={markdownText}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <h3>Preview</h3>
        <div dangerouslySetInnerHTML={{ __html: marked(markdownText) }} />
      </div>
    </div>
  );
};

export default MarkdownEditor;
