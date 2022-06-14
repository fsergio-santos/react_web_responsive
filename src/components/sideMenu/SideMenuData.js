
import * as FaIcons from 'react-icons/fa';

export const SideMenuData = [
    {
        icon:<FaIcons.FaTachometerAlt/>,
        path:'/dashboard',
        pagina:'Menu Principal',
        subMenu:false,
    },
    {
        icon:<FaIcons.FaRegListAlt/>,
        path:'#',
        pagina:'Cadastro',
        subMenu:true,
        submenu:[
            {
                icon:<FaIcons.FaUserEdit/>,
                path:'/autor/lista',
                pagina:'Autores',
            },
            {
                icon:<FaIcons.FaBuilding/>,
                path:'/editora/lista',
                pagina:'Editora',
            },
            {
                icon:<FaIcons.FaBook/>,
                path:'/livro/lista',
                pagina:'Livro',
            }
        ]
     }

]