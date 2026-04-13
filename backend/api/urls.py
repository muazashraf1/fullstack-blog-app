from django.urls import path
from blog import views

urlpatterns = [
    path('blogs/', views.BlogList.as_view(), name="blog-list" ),
]
