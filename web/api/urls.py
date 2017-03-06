from django.conf.urls import url
from web.api.views import PostsApiView
from rest_framework import routers



router = routers.DefaultRouter()

urlpatterns =[
url(r'^$',PostsApiView.as_view(),name='home page api'),

]
