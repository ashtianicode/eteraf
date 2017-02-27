from django.conf.urls import url
from web import views


urlpatterns =[
url(r'^$',views.home,name='home page'),
url(r'^home/$',views.home,name='home page'),
url(r'^post/(?P<pk>\d+)/$',views.singlepost,name='singlepost'),
url(r'^post/new/$',views.newpost,name='newpost'),
url(r'^post/edit/$',views.editpost,name='editpost'),
url(r'^post/submit/$',views.submitapi,name='submit'),
url(r'^getposts/$',views.getposts,name="getposts"),
]
