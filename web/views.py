from django.shortcuts import render,get_object_or_404
from django.contrib.auth.models import User, Group
from web.serializers import UserSerializer, GroupSerializer
from rest_framework import viewsets
from django.http import HttpResponse,JsonResponse
import json
from web.models import Post
from web.forms import PostForm
import datetime
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
from django.utils.encoding import smart_str
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

# Create your views here.
@csrf_exempt




def home(request):
    posts = Post.objects.all()
    timenow =datetime.datetime.now()
    return render(request,'posts.html',{'time':timenow,'posts':posts})


def singlepost(request,pk):
    posts = get_object_or_404(Post,pk=pk)
    return render(request,'singlepost.html',{'singlepost':posts})

def newpost(request):
    if (request.method=="POST"):
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.publish()
        return redirect('singlepost',pk=post.pk)

    else :
        form = PostForm()
        return render(request,'newpost.html',{'form':form})


@csrf_exempt


def submitapi(request):
    posteddata= request.POST
    text= smart_str(posteddata['text'])
    summery = text[0:50]+" ..."
    mode= posteddata['mode']
    if(len(text)<400):
            newsubmit= Post(text=text,confessmode=mode,summery=summery)
            newsubmit.publish()
            return HttpResponse("ok!")
    else:
        return HttpResponse("nope!")






def editpost(request):
    form = PostForm()
    return render('newpost.html',{'form':form})
