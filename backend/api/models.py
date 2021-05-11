from django.db import models
from rest_framework import serializers


class Category(models.Model):
  name = models.CharField(max_length=250)


class CategorySerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Category
    fields = ('id', 'name')
