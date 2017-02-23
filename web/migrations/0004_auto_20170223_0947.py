# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-23 09:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0003_remove_post_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='confessmode',
            field=models.CharField(choices=[('d', 'dream'), ('f', 'fantasy'), ('fi', 'first experience'), ('g', 'guilt'), ('l', 'lie'), ('p', 'pain'), ('q', 'question'), ('r', 'random feeling'), ('t', 'truth'), ('w', 'wild experience'), ('o', 'others')], max_length=2),
        ),
    ]