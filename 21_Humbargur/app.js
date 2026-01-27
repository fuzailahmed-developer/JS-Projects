const mobileMenu = document.querySelector('.mobile_menu_list')
const mobileMenuIcon = document.querySelector('.mobile_menu')

function menuState(state){
    if (state) {
        mobileMenu.style.right = '20px'
        mobileMenuIcon.style.visibility = 'hidden';
    } else{
        mobileMenu.style.right = '-240px'
        mobileMenuIcon.style.visibility = 'unset';
    }
}