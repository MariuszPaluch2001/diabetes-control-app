import pytest
from model_bakery import baker


@pytest.fixture
def meal(dish):
    return baker.make(
        'mealApp.Meal',
        Id=1,
        timestamp='2012-05-20T01:17:43.939000Z',
        dish=dish,
        quantity=10,
        description='Opis 1',
    )


@pytest.fixture
def meals(dish):
    return [
        baker.make(
            'mealApp.Meal',
            Id=1,
            timestamp='2012-05-20T01:17:43.939000Z',
            dish=dish,
            quantity=10,
            description='Opis 1',
        ),
        baker.make(
            'mealApp.Meal',
            Id=2,
            timestamp='2012-05-20T02:17:43.939000Z',
            dish=dish,
            quantity=8,
            description='Opis 2',
        ),
        baker.make(
            'mealApp.Meal',
            Id=3,
            timestamp='2012-05-20T03:17:43.939000Z',
            dish=dish,
            quantity=5,
            description='Opis 3',
        )
    ]


@pytest.fixture
def meal_api_response():
    return {
        'Id': 1,
        'dish': 1,
        'dish_name': 'Danie 1',
        'dish_unit': 'GRAMS',
        'timestamp': '2012-05-20T01:17:43.939000Z',
        'quantity': 10,
        'description': 'Opis 1'
    }


@pytest.fixture
def meal_api_post():
    return {'dish': 1, 'timestamp': '2012-05-20T01:17:43.939000Z', 'quantity': 10, 'description': 'Opis 1'}


@pytest.fixture
def meals_api_response():
    return [{
        'Id': 1,
        'dish': 1,
        'dish_name': 'Danie 1',
        'dish_unit': 'GRAMS',
        'timestamp': '2012-05-20T01:17:43.939000Z',
        'quantity': 10,
        'description': 'Opis 1'
    }, {
        'Id': 2,
        'dish': 1,
        'dish_name': 'Danie 1',
        'dish_unit': 'GRAMS',
        'timestamp': '2012-05-20T02:17:43.939000Z',
        'quantity': 8,
        'description': 'Opis 2'
    }, {
        'Id': 3,
        'dish': 1,
        'dish_name': 'Danie 1',
        'dish_unit': 'GRAMS',
        'timestamp': '2012-05-20T03:17:43.939000Z',
        'quantity': 5,
        'description': 'Opis 3'
    }]
