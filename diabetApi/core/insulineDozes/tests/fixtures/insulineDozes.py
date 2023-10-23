import pytest
from model_bakery import baker


@pytest.fixture
def insuline_doze(user):
    return baker.make(
        'insulineDozes.Doze',
        Id=1,
        units=10,
        timestamp='2012-05-20T00:17:43.939000Z',
        description='sample description',
        user=user,
        type='1',
    )


@pytest.fixture
def insuline_dozes(user):
    return [
        baker.make(
            'insulineDozes.Doze',
            Id=1,
            units=10,
            timestamp='2012-05-20T00:17:43.939000Z',
            description='sample description',
            user=user,
            type='1',
        ),
        baker.make(
            'insulineDozes.Doze',
            Id=2,
            units=8,
            timestamp='2012-05-20T01:17:43.939000Z',
            description='sample description',
            user=user,
            type='1',
        ),
        baker.make(
            'insulineDozes.Doze',
            Id=3,
            units=6,
            timestamp='2012-05-20T03:17:43.939000Z',
            description='sample description',
            user=user,
            type='1',
        )
    ]


@pytest.fixture
def insuline_doze_api_response():
    return {
        'Id': 1,
        'units': 10,
        'timestamp': '2012-05-20T00:17:43.939000Z',
        'description': 'sample description',
        'type': '1',
        'typeName': 'RAPID-ACTING'
    }


@pytest.fixture
def insuline_doze_api_post():
    return {'units': 10, 'timestamp': '2012-05-20T00:17:43.939000Z', 'description': 'sample description', 'type': '1'}


@pytest.fixture
def insuline_dozes_api_response():
    return [{
        'Id': 1,
        'units': 10,
        'timestamp': '2012-05-20T00:17:43.939000Z',
        'description': 'sample description',
        'type': '1',
        'typeName': 'RAPID-ACTING'
    }, {
        'Id': 2,
        'units': 8,
        'timestamp': '2012-05-20T01:17:43.939000Z',
        'description': 'sample description',
        'type': '1',
        'typeName': 'RAPID-ACTING'
    }, {
        'Id': 3,
        'units': 6,
        'timestamp': '2012-05-20T03:17:43.939000Z',
        'description': 'sample description',
        'type': '1',
        'typeName': 'RAPID-ACTING'
    }]
