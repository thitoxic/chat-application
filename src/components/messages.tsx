import moment from 'moment';
import React from 'react'

const Messages = ({ messages }) => {
    console.log('messages', messages)
    const newMessages = messages.sort((a, b) => {
        const timeA = moment(a.time, 'h:mm A');
        const timeB = moment(b.time, 'h:mm A');
        return timeA - timeB;
    })
    const renderMessages = () => {
        return newMessages.map((msg: object) => {
            return <div className='py-1'>
                <>

                    <div className="flex items-end justify-start px-2">
                        <div className="flex flex-col w-full max-w-[220px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-ss-xl dark:bg-amber-50">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-grey-800">Henry</span>
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-800">11:46</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-grey-800">How are you</p>
                        </div>
                    </div>
                    <div className="flex items-end justify-end px-2">
                        <div className="flex flex-col w-full max-w-[220px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-s-xl rounded-ee-xl dark:bg-gray-700">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">You</span>
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{msg.time}</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{msg.text}</p>
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
                        </div>
                    </div>

                </>
            </div>
        })
    }
    return (
        <>
            <div className='bg-gray-200 mb-24'>{renderMessages()}</div>
        </>
    )
}

export default Messages