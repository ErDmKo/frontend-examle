from django.contrib import admin
from . import models
    
class ScreeningInline(admin.TabularInline):
    model = models.Screening
    fk_name = "show"

class ShowAdmin(admin.ModelAdmin): 
    inlines = ScreeningInline,

admin.site.register(models.Show, ShowAdmin)
