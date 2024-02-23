import React from 'react'

const Contacts = () => {
    const contactList = [

    {
        id : 1,
        Name : "Hrishi",
        text : "What are you doing today?"
    },
    {
        id : 1,
        Name : "Akhi",
        text : "Can we schedule a meeting at 4?"
    },
    {
        id : 1,
        Name : "Nandi",
        text : "Please check your email once in a day!"
    },
    {
        id : 1,
        Name : "Seema",
        text : "Hi"
    }
    ]

    const filterContacts = ()=> {
        localStorage.setItem('contacts', JSON.stringify(contactList))
       return contactList.map((num)=> {
            return <button className='flex flex-col justify-center w-full h-[60px] bg-gray-800 rounded-xl px-3 m-1 border-solid border-2 border-amber-100'>
                <p className='font-semibold text-white'>{num.Name}</p>
                <span className='text-sm text-gray-50'>{num.text}</span>
            </button>
        })

    }
  return (
    <>
    <div  className='w-2/5 border-solid border-2 hidden lg:block border-amber-100 whitespace-nowrap overflow-hidden text-ellipsis'>{filterContacts()}</div>
    </>
  )
}

export default Contacts