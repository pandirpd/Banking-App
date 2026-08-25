const{test,expect}=require('../fixtures/baseTest');

test('get customer details using fixture',{tag:"@api"},async({apiRequest})=>{
    const response=await apiRequest.get('services/bank/customers/12212',{
          headers: {
          Accept: 'application/json',
        },
    });
       expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('id', 12212);
    expect(responseBody).toHaveProperty('firstName');
    expect(responseBody).toHaveProperty('lastName');
});