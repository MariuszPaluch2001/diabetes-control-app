# Generated by Django 4.2.5 on 2023-09-25 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('insulineDozes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='doze',
            name='type',
            field=models.CharField(choices=[('1', 'RAPID-ACTING'), ('2', 'LONG-RUNNING')], default='1', max_length=2),
        ),
    ]
