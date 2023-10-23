import pytest
from model_bakery import baker

@pytest.fixture
def user(db, django_user_model):

    return django_user_model.objects.create_user(
                username = "test",
                email="test@gmail.com",
                password="TEST")