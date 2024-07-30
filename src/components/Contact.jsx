import React from 'react'

const Contact = () => {
  return (
    <div className='Contact grid items-center justify-center'>
      <div className='border Glass w-96 h-80 flex flex-col items-center justify-center'>
        <p className="text-xs text-purple-600 font-semibold">Get In Touch</p>
        <h1 className="text-3xl font-semibold text-white">Contact</h1>
        <form className="[&>*]:w-72 [&>*]:mt-4">
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="Email"/>
          <textArea placeholder="Message" rows="4"/>
          <input type="submit" value="send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact