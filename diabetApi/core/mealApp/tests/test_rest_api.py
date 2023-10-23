def test_retrive_dish_sample(dish, api_client, user, dish_api_response):
    api_client.force_authenticate(user=user)
    response = api_client.get(f'/mealApp/dishes/{dish.Id}',)

    assert response.status_code == 200
    assert response.json() == dish_api_response


def test_retrive_dishes_list(dishes, api_client, user, dishs_api_response):
    api_client.force_authenticate(user=user)
    response = api_client.get('/mealApp/dishes/')

    assert response.status_code == 200
    assert response.json() == dishs_api_response


def test_post_dish_sample(api_client, user, dish_api_post):
    token = 'test'
    api_client.force_authenticate(user=user, token=token)
    headers = {'Content-Type': 'application/json', 'Authorization': token}
    response = api_client.post('/mealApp/dishes/', dish_api_post, format='json', **headers)

    assert response.status_code == 200
    assert response.json() == 'Save Successfully.'


def test_retrive_meal_sample(meal, api_client, user, meal_api_response):
    api_client.force_authenticate(user=user)
    response = api_client.get(f'/mealApp/meal/{meal.Id}',)

    assert response.status_code == 200
    assert response.json() == meal_api_response


def test_retrive_meals_list(meals, api_client, user, meals_api_response):
    api_client.force_authenticate(user=user)
    response = api_client.get('/mealApp/meal/')

    assert response.status_code == 200
    assert response.json() == meals_api_response


def test_post_meal_sample(dish, api_client, user, meal_api_post):
    token = 'test'
    api_client.force_authenticate(user=user, token=token)
    headers = {'Content-Type': 'application/json', 'Authorization': token}
    response = api_client.post('/mealApp/meal/', meal_api_post, format='json', **headers)

    assert response.status_code == 200
    assert response.json() == 'Save Successfully.'
