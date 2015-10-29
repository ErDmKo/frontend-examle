from django.contrib import admin
from . import models

class EventAdmin(admin.ModelAdmin):
    filter_horizontal = 'related_events',
    
admin.site.register(models.Event, EventAdmin)

