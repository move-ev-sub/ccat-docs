# Hello World

## Hello World

### Hello World

Hello World

| Name     | Age | City        |
| -------- | --- | ----------- |
| John Doe | 30  | New York    |
| Jane Doe | 25  | Los Angeles |
| Jim Doe  | 40  | Chicago     |

```js [JS Example]
const a = 1;
```

::: code-group

```json [JSON Example]
{
  "jsc": {
    "parser": {
      "syntax": "typescript"
    },
    "target": "es2020"
  }
}
```

```yaml [YAML Example]
jsc:
  parser:
    syntax: typescript
  target: es2020
```

```ts [TS Example]
import lodash from "lodash";

export function hasValue(obj: any, path: string): boolean {
  return lodash.has(obj, path) && lodash.get(obj, path) != null;
}
```

:::
