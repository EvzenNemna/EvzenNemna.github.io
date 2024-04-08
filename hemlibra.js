document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expandable-button');
    const expandVideoLinks = document.querySelectorAll('.expandable-link');

    expandButtons.forEach(button => {
        const expandableContent = button.querySelector('.expandable');
        const arrowIcon = button.querySelector('.arrow');

        button.addEventListener('click', function () {
            if (expandableContent.classList.contains('expanded')) {
                expandableContent.classList.remove('expanded');
                expandableContent.style.maxHeight = '0';
                if (arrowIcon) {
                    arrowIcon.style.transform = 'rotate(0)';
                }
            } else {
                expandableContent.classList.add('expanded');
                expandableContent.style.maxHeight = expandableContent.scrollHeight + 'px';
                if (arrowIcon) {
                    arrowIcon.style.transform = 'rotate(180deg)';
                }
            }
        });
    });


    document.querySelectorAll('.expandable-link').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const videoId = button.getAttribute('data-video-id');
            const expandableContent = document.querySelector(`.expandable[data-video-id="${videoId}"]`);

            if (!expandableContent.classList.contains('expanded')) {
                document.querySelectorAll('.expandable.expanded').forEach(openItem => {
                    if (openItem.getAttribute('data-video-id') !== videoId) {
                        openItem.classList.remove('expanded');
                        openItem.style.maxHeight = '0';
                    }
                });

                expandableContent.classList.add('expanded');
                expandableContent.style.maxHeight = expandableContent.scrollHeight + 'px';
            } else {
                expandableContent.classList.remove('expanded');
                expandableContent.style.maxHeight = '0';
            }
        });
    });


});
