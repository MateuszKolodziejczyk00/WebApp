# Generated by Django 4.0.4 on 2022-04-30 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0002_rename_dishtoattributemappinga_dishtoattributemapping'),
    ]

    operations = [
        migrations.AddField(
            model_name='dish',
            name='attributes',
            field=models.ManyToManyField(to='menu.dishattribute'),
        ),
        migrations.DeleteModel(
            name='DishToAttributeMapping',
        ),
    ]
