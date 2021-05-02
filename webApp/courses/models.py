from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Course(models.Model):
    name = models.TextField()
    code = models.TextField()
    description = models.TextField()
