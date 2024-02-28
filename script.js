<script>
    document.addEventListener('DOMContentLoaded', function() {
        var mapButton = document.getElementById('toggleMap');
        var mapContainer = document.querySelector('.map-container');

        mapButton.addEventListener('click', function() {
            if (mapContainer.style.display === 'none') {
                mapContainer.style.display = 'block';
                mapButton.textContent = 'Hide Map';
            } else {
                mapContainer.style.display = 'none';
                mapButton.textContent = 'Show Map';
            }
        });
    });
</script>
