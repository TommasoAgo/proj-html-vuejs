var app = new Vue(
    {
        el: '#root',
        data: {

            // Header content strings Array
            header_menu: [
                'Home',
                'Services',
                'About',
                'Videos',
                'Blog',
                'Store'
            ],

            // Header Icons strings Array
            header_icons: [
                'shopping-cart',
                'search'
            ],

            // New Menu Element

            // I save it in a variable, just to make it better maintainable
            newMenuElement: 'Store'
        }
    }
)