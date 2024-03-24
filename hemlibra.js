document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expandable-button');

    expandButtons.forEach(button => {
        const expandableContent = button.querySelector('.expandable');
        const arrowIcon = button.querySelector('.arrow');

        button.addEventListener('click', function () {
            if (expandableContent.classList.contains('expanded')) {
                expandableContent.classList.remove('expanded');
                expandableContent.style.maxHeight = '0';
                arrowIcon.style.transform = 'rotate(0)';
            } else {
                expandableContent.classList.add('expanded');
                expandableContent.style.maxHeight = expandableContent.scrollHeight + 'px';
                arrowIcon.style.transform = 'rotate(180deg)';
            }
        });
    });
});
