/* hamburger-menu
============================================ */
const hamburger = document.getElementById('hamburger');
const menuScreen = document.getElementById('menu-screen');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const navItems = document.querySelectorAll('#nav li');
console.log(nav);
const menuKeyframe = {
    duration: 500,
    easing: 'ease',
    fill: 'forwards',
};

hamburger.addEventListener('click', () => {
    menuScreen.classList.toggle('hidden');
    bar1.classList.toggle('active');
    bar2.classList.toggle('active');
    navItems.forEach((navItem, index) => {
        if(navItem.classList.contains('active')) {
            navItem.classList.remove('active');
            navItem.animate(
                {
                    translate: ['0 0', '-50vw 0'],
                },
                menuKeyframe
            )
        } else {
            navItem.classList.add('active');
            navItem.animate(
                {
                    translate: ['-50vw 0', '0 0'],
                },
                menuKeyframe
            )
        }
    })
});