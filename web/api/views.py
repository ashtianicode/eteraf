from rest_framework.generics import ListAPIView
from web.api.serializers import postserializer
from web.models import Post


class PostsApiView(ListAPIView):
    queryset = Post.objects.all().order_by('-publishdate')
    serializer_class = postserializer
