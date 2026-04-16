from django.shortcuts import render
from rest_framework.views import APIView
from blog.models import Blog
from blog.serializers import BlogSerializer
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.


class BlogList(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request):
        query_set = Blog.objects.all()
        # serializer = BlogSerializer(query_set, many=True)
        serializer = BlogSerializer(query_set, many=True, context={"request": request})
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = BlogSerializer(data=data)
        if serializer.is_valid():
            # serializer.save()
            user = User.objects.first()  # temporary hal for author without JWT
            # serializer.save(author=user)  # temporary hal for author without JWT
            serializer.save(author=request.user)  # temporary hal for author without JWT
            return Response(serializer.data)
        return Response(serializer.errors)


class BlogDetail(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    def get(self, request, id):
        blog = get_object_or_404(Blog, id=id)
        serializer = BlogSerializer(blog, context={"request": request})
        return Response(serializer.data)

    def delete(self, request, id):
        blog = get_object_or_404(Blog, id=id)
        if blog.author != request.user:
            return Response({"error": "Not allowed"}, status=403)
        blog.delete()
        return Response(status=204)

    def put(self, request, id):
        blog = get_object_or_404(Blog, id=id)
        if blog.author != request.user:
            return Response({"error": "Not allowed"}, status=403)
        serializer = BlogSerializer(blog, data=request.data)
        # serializer = BlogSerializer(blog, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def patch(self, request, id):
        blog = get_object_or_404(Blog, id=id)
        if blog.author != request.user:
            return Response({"error": "Not allowed"}, status=403)
        serializer = BlogSerializer(blog, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=400)


class RegisterView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        email = request.data.get("email")
        if User.objects.filter(username=username).exists():
            return Response({"message": "username already exist"}, status=400)
        user = User.objects.create_user(
            username=username, password=password, email=email
        )
        return Response({"message": "user created successfully"}, status=201)


class LoginView(TokenObtainPairView):
    pass
