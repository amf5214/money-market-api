#!/bin/bash

yarn install

npx prisma generate

yarn start:debug