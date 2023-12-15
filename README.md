# Social Network API

## Description

The Social Network API is a backend application designed to provide essential functionalities for a social networking platform. This project was motivated by the need to understand and implement NoSQL databases, specifically MongoDB, in a real-world application scenario.

- **Motivation**: To explore the capabilities of NoSQL databases in handling flexible, schema-less data structures, which are common in social networking applications.
- **Purpose**: This project serves as a backend foundation for a social network where users can share thoughts, react to others' thoughts, and manage a friend list.
- **Problem Solving**: It addresses the challenge of efficiently managing and querying large amounts of unstructured data in a social network context.
- **Learning Outcome**: Gained insights into MongoDB, Mongoose ODM, and the intricacies of building scalable APIs for social media platforms.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To set up the Social Network API locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the cloned directory.
3. Run `npm install` to install all dependencies.
4. Ensure MongoDB is installed and running on your machine.
5. Create a `.env` file in the root directory and set your MongoDB URI (if not using the default local MongoDB setup).
6. Start the server using `npm start`.

## Usage

Once the server is running, you can use API testing tools like Insomnia or Postman to interact with the API. The API supports various endpoints for managing users, thoughts, reactions, and friends.

- To fetch all users: `GET /api/users`
- To add a new thought: `POST /api/thoughts` with necessary data in the request body.
- To add a friend: `POST /api/users/:userId/friends/:friendId`

Demo video: [VIDEO_DEMO](https://youtu.be/sE1wiFjYAfM) 

## Credits

This project was developed by [Charles Huurman](https://github.com/charleshuurman). Special thanks to the contributors of the MongoDB and Mongoose documentation for their invaluable resources.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Features

- User management: Create, update, delete users.
- Thought sharing: Users can post and delete thoughts.
- Reactions: Users can react to thoughts.
- Friend List: Users can add and remove friends.

## How to Contribute

Contributions to the project are welcome! Please adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) guidelines.

## Tests

Demo testing can be seen in [VIDEO_DEMO](https://youtu.be/sE1wiFjYAfM) 
