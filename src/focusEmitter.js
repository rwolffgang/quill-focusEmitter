const FocusEmitter = function (quill, options) {
    this.focused = false;
    this.quill = quill;
    this.options = options;

    const _this = this

    quill.on('selection-change', function () {
        if (quill.hasFocus()) {
            // trigger event only once
            if (!_this.focused)
            {
                _this.focused = true;
                quill.emitter.emit("focus");
                quill.emitter.emit("focusin");
            }
        }
        else {
            _this.focused = false;
            quill.emitter.emit("focusout");
        }
    });
}
