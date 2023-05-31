function NewPost(){
    return <>
            <div className="col-span-1 md:col-span-2 mx-6">
                <textarea
                name="message"
                id="message"
                placeholder="New post..."
                className="w-full rounded-md border border-transparent bg-gray-800 mt-6 py-3 px-6 text-base font-medium text-[#6B7280] focus:border-red-400 focus:shadow-md"
                ></textarea>
                <div>
                <div className="flex items-center justify-between bg-gray-900">
                <div className="icons flex text-gray-500 m-2">
                    <svg
                        className="mr-2 cursor-pointer hover:text-gray-700 p-1 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                    </svg>
                    <p>Upload file...</p>
                    </div>
                    <div className="p-4 backdrop-blur-md hover:bg-gray-700 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </div>
                </div>
                </div>
            </div>
    </>
}

export default NewPost