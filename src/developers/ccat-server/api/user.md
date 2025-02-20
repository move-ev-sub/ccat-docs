---
outline: deep
---

# User API

Api endpoints for user management.

## `/users/{id}` <Badge type="tip" text="GET" />

Returns a single user by their ID from the database.

### Parameters

#### Path Parameters

| Name | Type   | Description                                                            | Optional |
| ---- | ------ | ---------------------------------------------------------------------- | -------- |
| `id` | String | The ID of the user to retrieve. This is a long fiedl to test something | No       |

#### Query Parameters

| Name      | Type   | Description            | Optional |
| --------- | ------ | ---------------------- | -------- |
| `select`  | String | The fields to select.  | Yes      |
| `include` | String | The fields to include. | Yes      |

### HTTP Response Codes

### Request

::: code-group

```bash [cURL]
curl -X GET "https://api.8base.com/ck0j7z5zq000001l6z1z7z5zq" \
     -H "Content-Type: application/json" \
     -H "Authorization
```

```javascript [axios]
const axios = require('axios');

axios
  .get('https://api.8base.com/ck0j7z5zq000001l6z1z7z5zq', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer YOUR_API_TOKEN',
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

:::

### Response

::: code-group

```json [Example]
{
  "data": {
    "user": {
      "id": "ck0j7z5zq000001l6z1z7z5zq",
      "email": "user@gmail.com",
      "firstName": "John",
      "lastName": "Doe",
      "createdAt": "2021-08-01T00:00:00.000Z",
      "updatedAt": "2021-08-01T00:00:00.000Z"
    }
  }
}
```

```json [Schema]
{
  "data": {
    "user": {
      "id": "String",
      "email": "String",
      "firstName": "String",
      "lastName": "String",
      "createdAt": "String",
      "updatedAt": "String"
    }
  }
}
```

:::
