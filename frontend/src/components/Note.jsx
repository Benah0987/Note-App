import "../styles/Note.css";

function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <div className="note-card">
      <div className="note-header">
        <h3 className="note-title">{note.title}</h3>
        <button onClick={() => onDelete(note.id)} className="delete-button">
          Delete
        </button>
      </div>
      <p className="note-content">{note.content}</p>
      <p className="note-date">{formattedDate}</p>
    </div>
  );
}

export default Note;