# users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
from courses.models import Course

class Student(AbstractUser):
    courses = models.ManyToManyField(Course)
