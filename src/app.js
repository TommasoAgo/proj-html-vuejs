var app = new Vue(
    {
        el: '#root',
        data: {
            // HEADER

            // Header content Strings Array
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

            // New Header Menu Element

            // I save it in a variable, just to make it better maintainable
            newMenuElement: 'Store',

            // FOOTER

            // Recent Posts Strings Array
            recentPosts: [
                'The best protein shake',
                'Ultimate cardio workout',
                'New juices available now',
                'Tips to find training partners',
                '20 best healthy recipes'
            ],

            // Contact Infos
            contactInfos: {
                address: '4746 Tipple Road Michigan 48449',
                mobileNumber: '1.800.000.0000',
                email: 'info@your-company.com'
            }
        }
    }
)