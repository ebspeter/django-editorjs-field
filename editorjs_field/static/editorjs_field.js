document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.codex-editor').forEach(editor_holder => {
        const jsonOutputElement = document.getElementById(editor_holder.getAttribute('output-id'));
        
        let initialContent = undefined;
        try {
            initialContent = JSON.parse(decodeURIComponent(jsonOutputElement.value));
        } catch(e) {}

        const editor = new EditorJS({
            holder : editor_holder.id,
            onChange: () => {
                editor.save().then( result => {
                    jsonOutputElement.value = encodeURI(JSON.stringify(result, null, 0));
                });
            },
            tools: { 
                header: Header,
                checklist: Checklist
            },
            data: initialContent || {}
        });
    })
}, false);