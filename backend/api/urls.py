from django.urls import path
from .views import (
    NoteListCreateView,
    NoteDeleteView,
)

urlpatterns = [
    # List all notes for logged-in user + create a new note
    path("notes/", NoteListCreateView.as_view(), name="note-list"),

    # Delete a note (by id)
    path("notes/<int:pk>/delete/", NoteDeleteView.as_view(), name="note-delete"),
]
