from __future__ import unicode_literals
import datetime
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Post(models.Model):

    confessionmodes=(
    ('l','lie'),('s','sin'),('m','memory')
    )
    text = models.CharField(max_length=300)
    confessmode= models.CharField(max_length=2,choices=confessionmodes)
    publishdate=models.DateTimeField(blank=True)

    def publish(self):
        self.publishdate=datetime.datetime.now()
        self.save()
    def __str__(self):
        return "{}".format(self.text)
