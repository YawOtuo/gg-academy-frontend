import { styled } from '@stitches/react'
import {AiOutlineSearch} from 'react-icons/ai'


const Search = () => {
    return(
        <Root className='flex'>
            <input type="text"  />
            <div className='search-b'>
                <AiOutlineSearch/>
            </div>
        </Root>
    )
}

const Root = styled('div', {
    translateX:"-50%"
})

export default Search