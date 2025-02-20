---
outline: deep
---

# Schemas

This is a list of all the schemas used in the API.

## Pet

Type: **object**

| Name   | Type    | Description                   | Required | Enum                       | Format |
| ------ | ------- | ----------------------------- | -------- | -------------------------- | ------ |
| id     | integer | Unique identifier for the pet | Yes      |                            | int64  |
| name   | string  | Name of the pet               | Yes      |                            |        |
| type   | string  | Type of animal                | No       | [cat, dog, bird]           |        |
| status | string  | Pet status in the store       | No       | [available, pending, sold] |        |

## NewPet

Type: **object**

| Name | Type   | Description     | Required | Enum             | Format |
| ---- | ------ | --------------- | -------- | ---------------- | ------ |
| name | string | Name of the pet | Yes      |                  |        |
| type | string | Type of animal  | No       | [cat, dog, bird] |        |

## Error

Type: **object**

| Name    | Type    | Description | Required | Enum | Format |
| ------- | ------- | ----------- | -------- | ---- | ------ |
| code    | integer |             | Yes      |      | int32  |
| message | string  |             | Yes      |      |        |
