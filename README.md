# Money Market API
<p align="center">
 <img src="src/assets/Designer.png" width="300" alt="Money Market Logo" />
</p>

> [!IMPORTANT]
> This api will not run without configuring the environment file


## Running the app

```bash

# Create .env file in the project directory

# Install necessary packages
$ yarn install

# Setup prisma
$ npx prisma generate

# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Creating .env file

```bash
# Create .env file

# Add the following environment variables:

POLYGON_API_TOKEN="token"
POLYGON_API_TOKEN2="token"
MARKETAUX_API_TOKEN="token"
ALPHA_VANTAGE_KEY="token"

MONGODB_CONNECTION="mongodb"
MONGODB_HOST="mongodb uri"
MONGODB_DATABASE="database name"

DATABASE_URL="postgres uri"

JWT_SECRET="secret key"

STRIPE_API_KEY="token"
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Contributors

<table>
    <tr>
        <th>Austin Fraley</th>
        <th>Riley Jenkins</th>
    </tr>
    <tr>
        <td>@amf5214</td>
        <td>@RileyJenkins3621</td>
    </tr>
<tr>
        <td align="center">
            <img src="src/assets/contributor1.jpeg" width="100" alt="Money Market Logo" />
        </td>
        <td align="center">
        </td>
    </tr>
</table>

