from django.contrib import admin
from . import models
    
class ScreeningInline(admin.TabularInline):
    model = models.Screening
    fk_name = "show"

class ShowAdmin(admin.ModelAdmin): 
    filter_horizontal = 'genre_list',
    inlines = ScreeningInline,

admin.site.register(models.Show, ShowAdmin)
admin.site.register(models.Genre)
