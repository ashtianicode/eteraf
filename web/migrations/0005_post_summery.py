# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-23 16:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0004_auto_20170223_0947'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='summery',
            field=models.CharField(default='', max_length=50),
        ),
    ]
