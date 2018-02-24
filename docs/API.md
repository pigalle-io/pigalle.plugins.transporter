# API reference of :

A base plugin necessarily used by Pigalle transporters.

---
&#x1F34E; **__Warning !__ Work in progress...**
---
## API

<a name="module_transporter-plugin-base"></a>

### transporter-plugin-base
A base to create Pigalle plugins dedicated to transport.

**Example**  
```js
const {TransporterPluginBase} = require('@pigalle/entities.transporter')

// My TCP transporter.
class MyTcpTransporter extends TransporterEntity {

  // Implements boot()
  boot() {
    // Start a TCP server...
  }
}
```
<a name="module_transporter-plugin-base..TransporterPluginBase"></a>

#### transporter-plugin-base~TransporterPluginBase
A bootable entity to take care of transport.

**Kind**: inner class of [<code>transporter-plugin-base</code>](#module_transporter-plugin-base)  
**Access**: public  
## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

***

_Documentation generated on Sat, 24 Feb 2018 09:36:49 GMT_

**Copyright &copy; 2018 [SAS 9 Février](https://9fevrier.com/)**
