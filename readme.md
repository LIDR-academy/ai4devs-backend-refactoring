# AI4Devs - Backend Demo

![OpenAI](https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?logo=flask&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-000?logo=dotenv&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white)

This project showcases the process of translating a Python-based backend application into Node.js and enhancing it with Redis for improved performance. It serves as a comprehensive demonstration for the backend session of the AI4Devs Master program.

## Table of Contents

- [AI4Devs - Backend Demo](#ai4devs---backend-demo)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
    - [Objectives](#objectives)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
    - [1. /starter](#1-starter)
    - [2. checkpoints/starter-to-node-working](#2-checkpointsstarter-to-node-working)
    - [3. checkpoints/starter-to-node-redis](#3-checkpointsstarter-to-node-redis)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)

## Project Overview

This repository demonstrates the step-by-step translation of a Python Flask backend application into a Node.js application using TypeScript and Sequelize. Additionally, it integrates Redis to implement a distributed caching system, enhancing the application's performance and scalability.

### Objectives

1. **Language Translation**: Convert the backend from Python to Node.js while maintaining functionality and structure.
2. **Performance Enhancement**: Integrate Redis to implement caching mechanisms, reducing database load and improving response times.
3. **Best Practices**: Apply software development best practices throughout the migration and enhancement process.

## Technologies Used

- **Backend Frameworks**:
  - *Python*: Flask
  - *Node.js*: Express.js with TypeScript
- **Database**:
  - PostgreSQL
  - ORM: Sequelize (for Node.js), SQLAlchemy (for Python)
- **Caching**:
  - Redis
- **Containerization**:
  - Docker & Docker Compose
- **Others**:
  - TypeScript, Sequelize-Typescript, dotenv

## Project Structure

### 1. /starter

The initial Python-based backend application using Flask. It includes:

- **Flask Application**: Handles HTTP requests and interacts with the PostgreSQL database.
- **SQLAlchemy ORM**: Manages database models and migrations.
- **Docker Setup**: Contains `Dockerfile` and `docker-compose.yml` for containerization.

### 2. checkpoints/starter-to-node-working

This branch/project focuses on translating the Python Flask application to a Node.js application. Key features include:

- **TypeScript Integration**: Ensures strong typing and better code maintainability.
- **Sequelize ORM**: Manages database interactions with PostgreSQL.
- **Express.js**: Serves as the web framework for handling routes and middleware.
- **Docker Configuration**: Updated to accommodate Node.js environment.

A fully functional version of this translation is available in the [starter-to-node-working](./checkpoints/starter-to-node-working) directory.

### 3. checkpoints/starter-to-node-redis

Building upon the Node.js translation, this phase integrates Redis to implement a distributed caching system. Enhancements include:

- **Redis Integration**: Implements caching for product data to enhance performance.
- **Cache Management**: Ensures cache invalidation upon creating, updating, or deleting products.
- **Docker Update**: Adds Redis service to the `docker-compose.yml` for seamless integration.

The enhanced version with Redis is available in the [starter-to-node-redis](./checkpoints/starter-to-node-redis) directory.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- **Docker** & **Docker Compose**

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/ai4devs-backend-demo.git
   cd ai4devs-backend-demo
   ```

2. **Navigate to the First Project Phase**

   - **Python Starter**: `starter/`

3. **Set Up the Starter Project**

   You have the [readme.md](/starter/readme.md) of this project with the instructions to run it.

4. **Testing prompts: Python to Node.js**

    To accompplish the first goal you have all the prompts used to guide the AI along the way. Also, all the most frequet errors faced during the process.

   - [Python to Node.js](/prompts/1.prompts.starter-to-node.md)

    If you're facing any issue with the starter-to-node-working project, you can find the solution [here](./checkpoints/starter-to-node-working/).

5. **Testing prompts: Adding Redis**

   To accompplish the second goal you have all the prompts used to guide the AI along the way. Also, all the most frequet errors faced during the process.

   - [Adding Redis](/prompts/2.prompts.adding-redis.md)

    If you're facing any issue with the starter-to-node-redis project, you can find the solution [here](./checkpoints/starter-to-node-redis/).


