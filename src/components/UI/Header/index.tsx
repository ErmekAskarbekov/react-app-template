import React, {FC} from 'react';
import Container from "components/UI/Container";
import {ILink} from 'utils/types/index';

interface Props {
    links: ILink[];
}

const Header: FC<Props> = ({links}) => {
    return (
        <header
            className='flex justify-between items-center h-[60px] bg-white sticky top-0 shadow-2xl'>
            <Container>
                <ul className="flex">
                    {links.map((link) => (
                        <li className='list-none mr-10 text-black hover:text-gray-600 transition-all font-s text-s'
                            key={`link/${link.url}`}>
                            <a href={link.url}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </Container>
        </header>
    );
};

export default Header;