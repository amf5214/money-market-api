all: debug

debug: dependencies
	yarn start:debug

dependencies: .env yarn.lock package.json 
	yarn install
