from django.contrib.auth import get_user_model
from rest_framework import generics, permissions imprt IsAuthenticated, AllowAny
from .serializers import UserSerializer
from django.contrib.auth.models import User
from django.shortcuts import render




class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = User
    permission_classes = [AllowAny]
