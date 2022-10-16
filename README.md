<div align="right">
  <img src="https://img.shields.io/badge/Completion-100%25-blue.svg" />
  <a href="https://github.com/syfulislambappi/multiple-choice-question-api/blob/main/LICENSE" alt="License">
    <img src="https://img.shields.io/github/license/Hsins/udemy_MERN-Todo-List.svg" />
  </a>
</div>

# Multiple Choice Question API

# Client Requirements of Applicaiton

User can create question with the answer of question. They can see all the question with answer. If they want to update the question's option and answer they can change it. They also can delete any question.

# Functional Requirements of Applicaiton

- User can create question
  - question title must be validated
  - question option must be validate
  - question must have four option
  - question answer must be validated
- User can see all questions.
- User can see questions by username
  - username must be validated
- User can see questions by questionId
  - questionId must be validated
- User can change question by providing questionId
  - questionId must be validated
  - question's title can be changed
  - question's option can be changed
  - question's answer can be changed
- User can delete question by providing questionId
  - questionId must be validated
- User can delete question by providing username
  - username must be validated

# Necessary Database Model for Application

```
Model Name: Question

  Properties:
    1. username: string (client)
    2. questionId: string (server)
    3. title: string (client)
    4. options: [op1, op2, op3, op4] (client)
    5. answer: string (client)
    6. createdAt: date (server)
    7. updatedAt: date (server)
```

# Features

- Anyone can create multiple choice question.
- Anyone can see all the quesiton.
- Anyone can see question by their username.
- Anyone can see question by questionId.
- Anyone can change quesiton's title, option, and answer.
- Anyone can delete question by questionId and username.

```
-------------------------------------------------------------------------
Application Route
-------------------------------------------------------------------------
[Method]  [Route]                          [Description]
GET       /api/v1/questions                Fetch all questions
POST      /api/v1/questions/create         Create a new questions
GET       /api/v1/questions/q/:questionId  Fetch question by questionId
PATCH     /api/v1/quesitons/q/:questionId  Update question by questionId
DELETE    /api/v1/questions/q/:questionId  Delete question by questionId
GET       /api/v1/questions/u/:username    Fetch question by username
DELETE    /api/v1/quesitons/u/:username    Delete question by username
```

# Technologies

- [`NodeJS`](https://nodejs.org/en/)
- [`Express`](https://expressjs.com/)
- [`Morgan`](https://www.npmjs.com/package/morgan)
- [`Cors`](https://www.npmjs.com/package/cors)
- [`EJS`](https://ejs.co/)

Check [`package.json`](https://github.com/syfulislambappi/multiple-choice-question-api/blob/main/package.json) file for more information.

# Getting Started

Follow the instructions below to set up the environment and run this project on your local machine.

1. Clone this repository.

```bash
# Clone repository
$ git clone git@github.com:syfulislambappi/multiple-choice-question-api.git
```

2. Install dependencies via NPM or Yarn

```bash
# Install dependencies via npm
$ npm install
$ cd application
$ npm install
$ cd ..

# Install dependencies via yarn
$ yarn install
$ cd application
$ yarn install
$ cd ..
```

3. Run the server.

```bash
# Run server
$ yarn dev
```

# License

Licensed under the MIT License, Copyright © 2022 multiple choice quesiton api
