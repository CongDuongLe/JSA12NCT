import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center'>
    <form method='POST' action="https://getform.io/f/fb30206f-fab7-405c-9eb1-8be84eab84f0" className='flex flex-col max-w-[600px] w-full'>
        <div className='py-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Give me some email - to Duongle240300@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2 rounded-md' type="text" placeholder='Your Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type="email" placeholder='Your Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2 rounded-md' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-lg'>Let's Hiring me for your work</button>
    </form>
</div>
)
}

export default Contact