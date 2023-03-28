// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: '管理',
    type: 'group',
    children: [
        {
            id: 'util-doc',
            title: '文章管理',
            type: 'collapse',
            icon: icons.IconTypography,
            children: [
                {
                    id: 'util-docs',
                    title: '文章列表',
                    type: 'item',
                    icon: icons.IconTypography,
                    url: '/utils/util-doc'
                },
                {
                    id: 'util-details',
                    title: '文章上传',
                    type: 'item',
                    icon: icons.IconTypography,
                    url: '/utils/util-docpush'
                }
            ]
        },
        {
            id: 'util-project',
            title: '项目管理',
            type: 'item',
            url: '/utils/util-project',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'util-picture',
            title: '图片管理',
            type: 'item',
            url: '/utils/util-picture',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'util-message',
            title: '留言管理',
            type: 'item',
            url: '/utils/util-message',
            icon: icons.IconShadow,
            breadcrumbs: false
        }
    ]
};

export default utilities;
