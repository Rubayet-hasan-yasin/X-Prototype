
const File_input = () => {
    return (
        <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-blue-400 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-700'>
                      <p>CSV</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
    );
};

export default File_input;