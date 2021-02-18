from .models import Schools
from django.http import HttpResponse


def home_views(request, *args, **kwargs):
    return HttpResponse("<h1>Hello World</h1>")


def list_schools(request, *args, **kwargs):
    all_school = Schools.object.all()
    res = [school.name for school in all_school]
    data = {
        'response': res
    }
    return HttpResponse(data)




