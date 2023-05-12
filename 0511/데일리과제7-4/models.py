from django.db import models
from rest_framework import serializers
from .models import Todo


class Todo(models.Model):
    title = models.CharField(max_length=50)
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'
         