# front-end-capstone
Front End Capstone
This is a project I worked on at Hack Reactor with three other people. I was in charge of the Ratings & Reviews section.

We used React.js to develop front end implementation for a minimalistic, single page ecommerce web app.

Our application gives the user the ability to select different styles, view related products, questions and answers, and check reviews & ratings for the selected product.

<h3>Overview</h3>
The overview component enables users to look through different styles, examine images of both the product and its styles, and pick the size and quantity of the product they want to add to their shopping cart.

![image](https://github.com/eatthischair/front-end-capstone/assets/116133810/9f2c23a0-2251-4053-8ed0-81a44d3a398b)

<h3>Related Items & Comparison</h3>
The related products component allows users to explore related items and conpare them to the item currently selected.

![image](https://github.com/eatthischair/front-end-capstone/assets/116133810/e87b16dd-3ef7-4226-b021-8f1aa2261098)

<h3>Questions & Answers</h3>
The questions component allows users to see existing questions and answers about a certain product (giving them an option to mark it as helpful). It also allows users to view photos associated with answers and search of questions using the search bar.

![image](https://github.com/eatthischair/front-end-capstone/assets/116133810/8fe922ac-7443-4677-b0ee-7f143d9ae6cf)

<h3>Ratings & Reviews</h3>
The ratings component allows users to see a specific product's rating, sort reviews based on various metrics, filter them based on their rating value, and write their own review. ratings

![image](https://github.com/eatthischair/front-end-capstone/assets/116133810/d26c1280-3d55-4183-980b-9855d9e4e9cc)



<h2>Installation instructions</h2>

Clone the repository.

git clone https://github.com/eatthischair/front-end-capstone.git

To access data from the API, you must create a GitHub API Token (https://github.com/settings/tokens), create a .env file, and insert that token into the .env file along with a port number (port number can be of your choosing).

PORT=1100

AUTHTOKEN=AUTH_TOKEN_GOES_HERE
Install NPM packages that require to run the application.

npm install

Compile the webpack.

npm run build

Start the server.

npm server

Open the web browser and enter localhost:1100
