import React from 'react';

const Table = ({formData, data}) => {

    const maxX = data.reduce((prev, current) => parseFloat(current.X) > prev ? current.X : prev, -Infinity)
    const minX = data.reduce((prev, current) => parseFloat(current.X) < prev ? current.X : prev, Infinity)
    const maxY = data.reduce((prev, current) => parseFloat(current.Y) > prev ? current.Y : prev, -Infinity)
    const minY = data.reduce((prev, current) => parseFloat(current.Y) < prev ? current.Y : prev, Infinity)
    const maxZ = data.reduce((prev, current) => parseFloat(current.Z) > prev ? current.Z : prev, -Infinity)
    const minZ = data.reduce((prev, current) => parseFloat(current.Z) < prev ? current.Z : prev, Infinity)



    return (
        <div className='w-1/2 mx-auto'>
            <p>{formData.projectName}</p>
            <p>{formData.projectDescription}</p>
            <p>{formData.client}</p>
            <p>{formData.contractor}</p>

            <table className='text-white w-full'>
                <thead className='border-b'>
                    <tr>
                        <th></th>
                        <th>Max</th>
                        <th>Min</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
};

export default Table;