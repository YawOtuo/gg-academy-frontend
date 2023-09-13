"use client"

import { byellow } from '@/assets/colors'
import { styled } from '@stitches/react'
import {AiOutlineSearch} from 'react-icons/ai'


const Search = () => {
    return(
        <Root className='flex items-center w-full justify-center'>
            <SearchInput type="text" className='w-full'  />
            <div className='search-b flex items-center'>
                <AiOutlineSearch color={byellow}/>
            </div>
        </Root>
    )
}

const Root = styled('div', {

    maxWidth:"800px",
    "& .search-b":{
        transform : "translateX(-130%)",
    }
})

const SearchInput = styled('input', {
    border:"1px solid $yellow900",
    minHeight:"40px",


})

export default Search