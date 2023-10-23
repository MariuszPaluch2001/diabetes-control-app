import pytest
from model_bakery import baker


@pytest.fixture
def glucose_level(user):
    return baker.make(
        'glucoseLevelApp.GlucoseLevel',
        Id=1,
        value=220,
        timestamp='2012-05-20T00:17:43.939000Z',
        user=user,
        unit='1',
    )


@pytest.fixture
def glucose_levels(user):
    return [
        baker.make(
            'glucoseLevelApp.GlucoseLevel',
            Id=1,
            value=220,
            timestamp='2012-05-20T00:17:43.939000Z',
            user=user,
            unit='1',
        ),
        baker.make(
            'glucoseLevelApp.GlucoseLevel',
            Id=2,
            value=180,
            timestamp='2012-05-20T01:17:43.939000Z',
            user=user,
            unit='1',
        ),
        baker.make(
            'glucoseLevelApp.GlucoseLevel',
            Id=3,
            value=150,
            timestamp='2012-05-20T02:17:43.939000Z',
            user=user,
            unit='1',
        )
    ]


@pytest.fixture
def glucose_level_api_response():
    return {'Id': 1, 'value': 220, 'timestamp': '2012-05-20T00:17:43.939000Z', 'unit': '1', 'unitName': 'mg/dL'}


@pytest.fixture
def glucose_level_api_post():
    return {'value': 220, 'timestamp': '2012-05-20T00:17:43.939000Z', 'unit': '1'}


@pytest.fixture
def glucose_levels_api_response():
    return [{
        'Id': 1,
        'value': 220,
        'timestamp': '2012-05-20T00:17:43.939000Z',
        'unit': '1',
        'unitName': 'mg/dL'
    }, {
        'Id': 2,
        'value': 180,
        'timestamp': '2012-05-20T01:17:43.939000Z',
        'unit': '1',
        'unitName': 'mg/dL'
    }, {
        'Id': 3,
        'value': 150,
        'timestamp': '2012-05-20T02:17:43.939000Z',
        'unit': '1',
        'unitName': 'mg/dL'
    }]
