from rest_framework import serializers
from blog.models import Blog

# class BlogSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Blog
#         fields = '__all__'


class BlogSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    author = serializers.ReadOnlyField(source='author.username')  # temporary hal for author without JWT

    class Meta:
        model = Blog
        fields = '__all__'

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None