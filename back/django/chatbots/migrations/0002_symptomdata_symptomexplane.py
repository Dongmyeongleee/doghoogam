# Generated by Django 3.2.7 on 2022-10-31 01:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chatbots', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='symptomdata',
            name='symptomexplane',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
    ]