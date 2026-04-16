from django.urls import path
from blog import views

urlpatterns = [
    path('blogs/', views.BlogList.as_view(), name="blog-list" ),
    path('blogs/<int:id>/', views.BlogDetail.as_view(), name="blog-detail" ),
    path('register/', views.RegisterView.as_view(), name="register" ),
    path('login/', views.LoginView.as_view(), name="login" ),
]
