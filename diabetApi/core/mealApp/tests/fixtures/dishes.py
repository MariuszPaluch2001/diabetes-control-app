import pytest
from model_bakery import baker


@pytest.fixture
def dish(user):
    return baker.make(
        'mealApp.Dish',
        Id=1,
        name='Danie 1',
        glycemic_index=70,
        description='Opis 1',
        carbohydrate_exchange=20,
        user=user,
        unit='1',
    )


@pytest.fixture
def dishes(user):
    return [
        baker.make(
            'mealApp.Dish',
            Id=1,
            name='Danie 1',
            glycemic_index=70,
            description='Opis 1',
            carbohydrate_exchange=20,
            user=user,
            unit='1',
        ),
        baker.make(
            'mealApp.Dish',
            Id=2,
            name='Danie 2',
            glycemic_index=60,
            description='Opis 2',
            carbohydrate_exchange=20,
            user=user,
            unit='1',
        ),
        baker.make(
            'mealApp.Dish',
            Id=3,
            name='Danie 3',
            glycemic_index=50,
            description='Opis 3',
            carbohydrate_exchange=20,
            user=user,
            unit='1',
        )
    ]


@pytest.fixture
def dish_api_response():
    return {
        'Id': 1,
        'name': 'Danie 1',
        'glycemic_index': 70,
        'description': 'Opis 1',
        'carbohydrate_exchange': 20,
        'unit': '1',
        'unitName': 'GRAMS'
    }


@pytest.fixture
def dish_api_post():
    return {'name': 'Danie 1', 'glycemic_index': 70, 'description': 'Opis 1', 'carbohydrate_exchange': 20, 'unit': '1'}


@pytest.fixture
def dishs_api_response():
    return [{
        'Id': 1,
        'name': 'Danie 1',
        'glycemic_index': 70,
        'description': 'Opis 1',
        'carbohydrate_exchange': 20,
        'unit': '1',
        'unitName': 'GRAMS'
    }, {
        'Id': 2,
        'name': 'Danie 2',
        'glycemic_index': 60,
        'description': 'Opis 2',
        'carbohydrate_exchange': 20,
        'unit': '1',
        'unitName': 'GRAMS'
    }, {
        'Id': 3,
        'name': 'Danie 3',
        'glycemic_index': 50,
        'description': 'Opis 3',
        'carbohydrate_exchange': 20,
        'unit': '1',
        'unitName': 'GRAMS'
    }]
