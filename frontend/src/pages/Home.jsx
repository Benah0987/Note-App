import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

function Home({ logout }) {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchingNotes, setFetchingNotes] = useState(true);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    setFetchingNotes(true);
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
      })
      .catch((err) => alert(err))
      .finally(() => setFetchingNotes(false));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/${id}/delete/`)
      .then((res) => {
        if (res.status === 204) {
          alert("Note deleted!");
          getNotes();
        } else {
          alert("Failed to delete note.");
        }
      })
      .catch((error) => alert(error));
  };

  const createNote = (e) => {
    e.preventDefault();
    setLoading(true);
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) {
          alert("Note created!");
          setContent("");
          setTitle("");
          getNotes();
        } else {
          alert("Failed to create note.");
        }
      })
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>My Notes</h1>
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      </header>

      <div className="home-content">
        <div className="create-note-section">
          <h2>Create a Note</h2>
          <form onSubmit={createNote} className="note-form">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note title"
              required
              className="note-input"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Note content"
              required
              rows="5"
              className="note-textarea"
            />
            <button type="submit" disabled={loading} className="create-button">
              {loading ? (
                <>
                  <span className="spinner-small"></span>
                  Creating...
                </>
              ) : (
                "Create Note"
              )}
            </button>
          </form>
        </div>

        <div className="notes-section">
          <h2>Your Notes</h2>
          {fetchingNotes ? (
            <div className="loading-container">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="notes-grid">
              {notes.length === 0 ? (
                <p className="no-notes">No notes yet. Create your first note!</p>
              ) : (
                notes.map((note) => (
                  <Note key={note.id} note={note} onDelete={deleteNote} />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;