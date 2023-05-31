function NewPost(){
    return <>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="New post..."
          className="w-full resize-none rounded-md border bg-gray-800 my-3 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>

            </>
}

export default NewPost