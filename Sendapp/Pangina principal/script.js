// Agregar un evento de clic a los elementos "Áreas" para mostrar/ocultar el menú
document.querySelectorAll('li.dropdown').forEach(item => {
    item.addEventListener('click', function() {
        const submenu = this.querySelector('.areas-mas');
        submenu.classList.toggle('show');
    });
    
    // Agregar un evento de clic al elemento "Bienestar al aprendiz" para mostrar/ocultar el menú "Bienestar"
    const bienestarItem = item.querySelector('.areas-mas > li.dropdown');
    bienestarItem.addEventListener('click', function(e) {
        e.stopPropagation(); // Evitar que el clic se propague al menú "Áreas"
        const bienestarSubmenu = this.querySelector('.areas-bienestar');
        bienestarSubmenu.classList.toggle('show');
    });
});

// Cerrar todos los menús desplegables al hacer clic en cualquier parte de la página
window.addEventListener('click', function(e) {
    document.querySelectorAll('.areas-mas, .areas-bienestar').forEach(item => {
        if (!item.contains(e.target)) {
            item.classList.remove('show');
        }
    });
});
