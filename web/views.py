from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse
from web.models import Post
from web.forms import PostForm
import datetime
# Create your views here.

def home(request):
    posts = Post.objects.all()
    timenow =datetime.datetime.now()
    return render(request,'posts.html',{'time':timenow,'posts':posts})


def singlepost(request,pk):
    posts = get_object_or_404(Post,pk=pk)
    return render(request,'singlepost.html',{'singlepost':posts})

def newpost(request):
    if (request.method=="POST"):
        form = PostForm(request.post)
        return HttpResponse("form submitttttted !")

    else :
        form = PostForm()
        return render(request,'newpost.html',{'form':form})
