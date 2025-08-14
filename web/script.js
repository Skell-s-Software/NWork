// Obtenemos los elementos del HTML
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Configura Mermaid con opciones explícitas
mermaid.initialize({
    startOnLoad: false,  // Desactiva auto-render (lo controlamos manualmente)
    theme: 'default',
    flowchart: { 
        useMaxWidth: false,
        htmlLabels: true
    }
});

function renderMarkdown() {
    const markdownText = editor.value;
    preview.innerHTML = marked.parse(markdownText);
    
    // Renderiza Mermaid manualmente
    mermaid.run({
        querySelector: '#preview .language-mermaid',
    }).catch(err => {
        console.error("Error en Mermaid:", err);
    });
}

editor.addEventListener('input', renderMarkdown);
// Render inicial
renderMarkdown();