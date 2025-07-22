# appsync-events-realtime-chatting
# Real-Time Chat Application

A demonstration of real-time chat functionality using AWS AppSync Events subscription system.

## Overview

This application showcases real-time message delivery capabilities using AWS AppSync's subscription feature. Users can send and receive messages instantly in a chat interface.

## Prerequisites

- Node.js installed on your machine
- AWS Account
- AWS AppSync API set up with appropriate schema and resolvers
- Basic understanding of GraphQL subscriptions

## Configuration

Before running the application, you need to update the AppSync configuration in 'main.js':

1. Open 'main.js'
2. Locate the AppSync configuration section
3. Replace the existing endpoint with your AWS AppSync API endpoint

Local Setup

To run the application locally:
Install dependencies:
npm install

Build the project:
npm run build

Start the development server:
npm run dev

    
Deployment
Amplify Deployment
To deploy the application to AWS Amplify:

Install dependencies and build:
npm install

npm run build

Navigate to the distribution directory:
cd dist

Create a deployment package:
zip -r dist.zip *

Use the generated dist.zip file to deploy through the AWS Amplify Console.


Features
Real-time message updates
WebSocket-based communication
AWS AppSync Events subscription integration

Contributing
Feel free to submit issues and enhancement requests!
