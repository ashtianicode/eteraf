# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-22 08:06
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0002_remove_post_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='user',
        ),
    ]