import React from 'react';
import Pdf from 'react-to-pdf';

const ref = React.createRef();

const Table = ({ formData, data }) => {

    const maxX = data.reduce((prev, current) => parseFloat(current.X) > prev ? current.X : prev, -Infinity)
    const minX = data.reduce((prev, current) => parseFloat(current.X) < prev ? current.X : prev, Infinity)
    const maxY = data.reduce((prev, current) => parseFloat(current.Y) > prev ? current.Y : prev, -Infinity)
    const minY = data.reduce((prev, current) => parseFloat(current.Y) < prev ? current.Y : prev, Infinity)
    const maxZ = data.reduce((prev, current) => parseFloat(current.Z) > prev ? current.Z : prev, -Infinity)
    const minZ = data.reduce((prev, current) => parseFloat(current.Z) < prev ? current.Z : prev, Infinity)



    return (
        <div className='w-1/2 mx-auto text-gray-900 text-center'>
            <div ref={ref}>
                <p className='text-xl font-semibold text-center'>projectName: {formData.projectName}</p>
                <p className='text-xl font-semibold text-center'>Description: {formData.projectDescription}</p>
                <p className='text-xl font-semibold text-center'>Client: {formData.client}</p>
                <p className='text-xl font-semibold text-center'>Contractor: {formData.contractor}</p>

                <table className=' w-full'>
                    <thead className='border-b'>
                        <tr>
                            <th></th>
                            <th>Max</th>
                            <th>Min</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b'>
                            <th>X</th>
                            <td>{maxX}</td>
                            <td>{minX}</td>
                        </tr>

                        <tr className='border-b'>
                            <th>Y</th>
                            <td>{maxY}</td>
                            <td>{minY}</td>
                        </tr>

                        <tr className='border-b'>
                            <th>Z</th>
                            <td>{maxZ}</td>
                            <td>{minZ}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Pdf targetRef={ref} filename='XYZ Engine.pdf'>
            {({ toPdf }) => <button onClick={toPdf} className='my-10 bg-gradient-to-r from-blue-600 to-yellow-100 text-black font-bold py-3 px-10 rounded hover:from-yellow-100 hover:to-blue-600'>Download PDF</button>}
            </Pdf>
        </div>
    );
};

export default Table;