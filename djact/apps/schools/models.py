from django.db import models

# Create your models here.

from django.db import models


class Schools(models.Model):
    """学校"""
    ACADEMIC_CALENDAR = (
        ('q', '季度制'),
        ('s', '半年制'),
    )
    TYPE = (
        ('pub', '公立'),
        ('pri', '私立'),
    )
    name = models.CharField('校名', default='', max_length=200)
    intro = models.TextField('简介')
    type = models.CharField('类型', max_length=3, choices=TYPE, default='pub')
    year = models.IntegerField('创立时间', blank=False, null=False, default=0)
    academic_calendar = models.CharField('学期制度', max_length=1, choices=ACADEMIC_CALENDAR, default='s')
    website = models.CharField('学校网站', max_length=200, default='')
    ranking = models.TextField('排名')
    images = models.TextField('图片')

    def __str__(self):
        return self.name

    class Meta:
        app_label = 'schools'
        verbose_name = 'School'
        verbose_name_plural = 'Schools'
