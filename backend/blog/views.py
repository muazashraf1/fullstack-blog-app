from django.shortcuts import render
from rest_framework.views import APIView
from blog.models import Blog
from blog.serializers import BlogSerializer
from rest_framework.response import Response

# Create your views here.

class BlogList(APIView):
    def get(self, request):
        query_set = Blog.objects.all()
        # serializer = BlogSerializer(query_set, many=True)
        serializer = BlogSerializer(query_set, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = BlogSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


