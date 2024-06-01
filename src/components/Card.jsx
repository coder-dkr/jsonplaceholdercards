import React from 'react'

const card = (props) => {
  return (
    <>
      <div className="card w-[400px] my-4 border-[1px] border-solid border-slate-500 rounded-lg px-6 pl-3 py-3 hover:bg-[rgba(255,255,255,0.15)] duration-200 cursor-pointer"
        onMouseOver={(e) => {
          e.currentTarget.firstElementChild.classList.add("bg-black")
        }}
        onMouseOut={(e) => {
          e.currentTarget.firstElementChild.classList.remove("bg-black")
        }}>
        <div className="title text-xl bg-slate-800 p-1 rounded-md ">{props.title}</div>
        <div className="desc p-1">{props.desc}</div>
      </div>

    </>
  )
}

export default card

