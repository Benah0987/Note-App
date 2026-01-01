from django.contrib import admin
from django.urls import path, include

from api.views import CreateUserView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("admin/", admin.site.urls),

    # User registration
    path("api/user/register/", CreateUserView.as_view(), name="register"),

    # JWT authentication
    path("api/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),

    # App-level API routes (notes, etc.)
    path("api/", include("api.urls")),

    # DRF browsable API login/logout
    path("api-auth/", include("rest_framework.urls")),
]
