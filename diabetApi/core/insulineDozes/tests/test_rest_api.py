
def test_retrive_insuline_doze_sample(insuline_doze, api_client, user, insuline_doze_api_response):
    api_client.force_authenticate(user=user)
    response = api_client.get(f'/dozes/{insuline_doze.Id}', )
    
    assert response.status_code == 200
    assert response.json() == insuline_doze_api_response

def test_retrive_insuline_dozes_list(insuline_dozes, api_client, user, insuline_dozes_api_response):
    api_client.force_authenticate(user=user)
    response = api_client.get('/dozes/')
    
    assert response.status_code == 200
    assert response.json() == insuline_dozes_api_response

def test_post_insuline_doze_sample(api_client, user, insuline_doze_api_post):
    token = "test"
    api_client.force_authenticate(user=user, token=token)
    headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }
    response = api_client.post('/dozes/', insuline_doze_api_post, format='json', **headers)
    
    assert response.status_code == 200
    assert response.json() == "Save Successfully."