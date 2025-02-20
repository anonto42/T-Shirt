import React from 'react';
import { FaChevronRight } from "react-icons/fa6";

const PaginationBar = ({array,page,setPage}) => {
  return (
    <div
        className='w-full h-[80px] bg-slate-300 bottom-0 absolute flex justify-center items-center'
    >
        <div
            className='max-w-[450px] h-[50px] border-2 border-textDarkColor rounded-md relative flex overflow-hidden'
        >
            {
                array.map((item,index)=>(
                    <h2
                        onClick={()=>setPage(item)}
                        key={index}
                        className={page== item ?'w-[35px] h-full flex justify-center items-center bg-slate-400 active:bg-slate-300 border-r' :'w-[35px] h-full flex justify-center items-center active:bg-slate-300 border-x'}
                    >{item}</h2>
                ))
            }
            <div
                onClick={()=>{
                    if(page == array.length) setPage(1)
                        else setPage(page+=1)
                }}
                className='w-[40px] h-full bg-slate-400 flex justify-center items-center cursor-pointer'
            >
                <FaChevronRight />
            </div>
        </div>
    </div>
  )
}

export default PaginationBar