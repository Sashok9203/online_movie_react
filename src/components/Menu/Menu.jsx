import React, { useEffect, useState } from 'react'
import { CommentOutlined,  HomeOutlined,  InfoCircleOutlined,  TableOutlined, UserOutlined } from '@ant-design/icons';
import { Menu as AntMenu,} from 'antd';
import { Link, useLocation } from 'react-router-dom';
import '../Menu/Menu.css'
import { useSelector } from 'react-redux';


const items = [
    {
        key: "/",
        icon:<HomeOutlined />,
        label:<Link className='link' to="/">Домашня сторінка</Link>,
        users: ['Guest','User','Admin']
    },
    
    {
        key: "/movietable",
        icon:<TableOutlined />,
        label:<Link  className='link' to="/movietable"><span>Фільми</span></Link>,
        users: ['Admin']
    },
    {
        key: "/staftable",
        icon:<UserOutlined /> ,
        label:<Link  className='link' to="/staftable"><span>Актори</span></Link>,
        users: ['Admin']
    },
    {
        key: "/about",
        icon:<InfoCircleOutlined/>,
        label:<Link className='link' to="/about"><span>Про нас</span></Link>,
        users: ['Guest','User']
    },
    {
        key: "/feedbacks",
        icon:<CommentOutlined/>,
        label:<Link className='link' to="/feedbacks"><span>Відгуки користувачів</span></Link>,
        users: ['Admin']
    }
]

export const Menu = () => {
    const user = useSelector(state=>state.user.data)
    const [menuItems,setMenuItems] = useState(items.filter(x=> x.users.includes('Guest')))
    const location = useLocation();
    const [current, setCurrent] = useState(location.pathname);
    useEffect(() => {
        if (location) {
            if( current !== location.pathname ) {
                setCurrent(location.pathname);
            }
        }
    }, [location, current]);

    useEffect(()=>{
       let itemArray = null; 
       if(!user)
          itemArray = items.filter(x=> x.users.includes('Guest'));
       else if(user.isAdmin)
           itemArray = items.filter(x=>x.users.includes('Admin'))
       else if(user.isUser)
           itemArray = items.filter(x=>x.users.includes('User'))
         setMenuItems(itemArray)
    },[user]);

    function handleClick(e) {
        setCurrent(e.key);
    }
    return (
        <AntMenu
            onClick={handleClick}
            theme="dark"
            mode="horizontal"
            selectedKeys={current}
            className='menu'
            items = { menuItems }
        />)
}
