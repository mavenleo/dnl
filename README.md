# Hey 👋 

Thanks for taking the time to do our coding challenge! 🙂

💻 Start with cloning the project and setting it up. 

The companies screen you see on `/companies` when you run the project is part of our product.
In this step, the user can add companies for whom she wants to upload balance sheets at a later point in the app.
The user should be able to perform all CRUD actions on this screen.

🎉 To make things easier for the challenge, you don't need to code the API connection and will only work with the Vuex store to achieve that. 
But we are nevertheless interested in what the implementation would look like.

Since we have different customer requirements, the data a company consists of requires a dynamic form. This structure comes from the backend, and its elements are rendered dynamically. Have a look inside the store to see the type definitions. You can also find the companies store module there. It holds all the related companies' data inside the state that the backend created for you.

✅ A coworker already started with the challenge but didn't finish it; please complete it for him and create a Pull Request.

ℹ️ While you work on the implementation, the backend team would need to implement the real API endpoints based on what you suggest to them.

## Tasks 

1. Get the DynamicForm working with the provided data structure in the store
2. Update the store according to the changes in the form, so the data is consistent
3. Write the API documentation for the endpoints that you would need to connect the app to the backend




## API documentation for endpoints needed:

1.`/companies/create`

=> An endpoint to create a new company

=> payload: `{
    companyName: string,
    language: string,
    key(could be anything, depending on the company): string
}`

Creates a company and return an error message on failure or success message on success.


.

2.`/companies/{companyId}/update`

=> An endpoint to update an existing company
=> payload: `{
    companyName: string,
    language: string,
    key(could be anything, depending on the company): string
}`
Updates an existing company and return an error message on failure or success message on success.


.

3`/companies`

=> An endpoint to list all existing companies

Returns list of all existing companies



.

4.`/companies/{companyId}/delete`

=> An endpoint to delete an existing company

Deletes an existing company and return an error message on failure or success message on success.




.

4.`/companies/{companyId}/form-structure`

=> An endpoint to get the form structure for a particular company

Returns a form structure to be used in creating a new company.

