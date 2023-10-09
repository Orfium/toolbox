| Name                 | Type                                                 | Default Value                                                                                                      |
| :------------------- | :--------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `baseUrl`            | `string`                                             |                                                                                                                    |
| `baseHeaders?`       | <code>Record<string, string &#124; undefined></code> | <pre>{ <br/> Authorization: tokenFormat(<br/> useRequestToken.getState().token &#124;&#124; ''<br/> ) <br/>}</pre> |
| `hasAutomaticToken?` | `boolean`                                            | `true`                                                                                                             |
