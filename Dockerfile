# Base image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json yarn.lock .dockerignore ./

# Install app dependencies
RUN yarn install

# Bundle app source
COPY . .

# Copy the .env and .env.development files
COPY .env ./

# Creates a "dist" folder with the production build
RUN yarn build

# Expose the port on which the app will run
EXPOSE 3176

# Start the server using the production build
CMD ["yarn", "start:prod"]