from django.urls import re_path
from django.views.generic import TemplateView
from django.conf.urls import url
from django.urls import path
from django.contrib import admin

app_name = 'core'
urlpatterns = [
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html'), name='index')
]
