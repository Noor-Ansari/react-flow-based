// settings of the text node this will be shown when text node is selected
function TextNodeSettings({ data }) {
  return (
    <div className="text-node-settings-container">
      <label htmlFor="text-input">Text</label>
      <textarea defaultValue={data.text} id="text-input" rows={4} />
    </div>
  );
}

export default TextNodeSettings;
