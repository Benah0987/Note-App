from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer, NoteSerializer
from .models import Note
User = get_user_model()


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class NoteListCreateView(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [isAuthenticated]

    def get_queryset(self):
        user =self.request.user
        return  Note.objects.filter(author=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class NoteDeleteView(generics.DestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """
        Ensure users can only delete their own notes
        """
        user = self.request.user
        return Note.objects.filter(author=user)