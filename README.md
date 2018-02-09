# Quill FocusEmitter

This package is a [Quill.js](https://quillljs.com/) module that adds focus, focusin and focusout events.

## Quickstart

To install the module, set up an instance of Quill, add a script tag to the focusEmitter.js file and register it as a Quill module.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Quill-FocusEmitter Example</title>

    <link href="https://unpkg.com/quill@latest/dist/quill.snow.css" rel="stylesheet">
</head>

<body>
    <div class="container">
        <div id="editor"></div>

        <script src="https://unpkg.com/quill@latest/dist/quill.js"></script>

        <!-- Link Focus module -->
        <script src="https://rawgit.com/rwolffgang/quill-focusEmitter/master/src/focusEmitter.js"></script>
        <script>
            // Don't forget to register module
            Quill.register('modules/focusEmitter', FocusEmitter)

            var quill = new Quill('#editor', {
                theme: 'snow',
                modules: {
                    // Activate Focus Emitter module
                    'focusEmitter': true
                }
            });
        </script>
    </div>
</body>

</html>
```

---
Special thanks to [Andrey M](https://github.com/amka)!
