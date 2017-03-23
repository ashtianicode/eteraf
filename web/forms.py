from django import forms
from web.models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model=Post
        fields= ('text','confessmode')
