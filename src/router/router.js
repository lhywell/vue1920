import Main from '@/views/Main.vue';
import Explore from '@/views/Explore.vue';

export const index = {
    path: '/',
    name: 'Main',
    component: Main
};

export const explore = {
    path: '/explore',
    name: 'Explore',
    component: Explore
};

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    index
];