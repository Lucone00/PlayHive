function NewPost(){
    return <>
            <textarea
            name="message"
            id="message"
            placeholder="New post..."
            className="rounded-md border border-transparent bg-gray-800 my-6 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
            ></textarea>
    </>
}

export default NewPost