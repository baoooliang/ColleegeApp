from django.urls import re_path
from django.views.generic import TemplateView
from django.conf.urls import url
from django.urls import path
from django.contrib import admin
from . import views

urlpatterns = [
    path('$/', views.schools, name='schools')
]
