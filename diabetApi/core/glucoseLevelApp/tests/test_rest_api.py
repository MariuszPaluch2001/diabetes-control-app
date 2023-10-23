
def test_retrive_glucoseLevel_sample(glucose_level, api_client, user, glucose_level_api_response):
    api_client.force_authenticate(user=user)
    response = api_client.get(f'/glucoseLevels/{glucose_level.Id}', )
    
    assert response.status_code == 200
    assert response.json() == glucose_level_api_response

def test_retrive_glucoseLevel_list(glucose_levels, api_client, user, glucose_levels_api_response):
    api_client.force_authenticate(user=user)
    response = api_client.get('/glucoseLevels/')
    
    assert response.status_code == 200
    assert response.json() == glucose_levels_api_response

def test_post_glucoseLevel_sample(api_client, user, glucose_level_api_post):
    token = "test"
    api_client.force_authenticate(user=user, token=token)
    headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }
    response = api_client.post('/glucoseLevels/', glucose_level_api_post, format='json', **headers)
    
    assert response.status_code == 200
    assert response.json() == "Save Successfully."