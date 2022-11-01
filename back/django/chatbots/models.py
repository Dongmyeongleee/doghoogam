from django.db import models
from django.contrib.postgres.fields import ArrayField 
# Create your models here.
from django.db import models

# Create your models here.

class SymptomTable(models.Model):
    indata = models.CharField(max_length=100)
    symptom = models.TextField()
    embedding = models.TextField()
      

class DiseaseTable(models.Model):
    ICD = models.CharField(max_length=100)
    diseasename = models.CharField(max_length=20)
    explane = models.TextField()
    symptomdata = models.CharField(max_length=50)
    
class SymptomData(models.Model):
    ICD = models.CharField(max_length=50)
    symptom = models.CharField(max_length=20)
    disease = models.CharField(max_length=20)
    symptomexplane = models.CharField(max_length=200)
