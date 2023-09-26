# Generated by Django 4.2.5 on 2023-09-26 18:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dish',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, default='', max_length=100)),
                ('glycemic_index', models.IntegerField()),
                ('carbohydrate_exchange', models.IntegerField()),
                ('unit', models.CharField(choices=[('1', 'GRAMS'), ('2', 'UNITS')], default='1', max_length=2)),
                ('description', models.CharField(blank=True, default='', max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='Meal',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('timestamp', models.DateTimeField(unique=True)),
                ('quantity', models.IntegerField()),
                ('description', models.CharField(blank=True, default='', max_length=300)),
                ('dish', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mealApp.dish')),
            ],
        ),
    ]
