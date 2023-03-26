import React from 'react';

const ToolGrid = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {items.map((item, index) => (
                <div key={index} className="border border-gray-300 rounded overflow-hidden">
                    <div className="relative pb-9/16">
                        <img
                            className="absolute h-full w-full object-cover"
                            src={item.image}
                            alt={item.title}
                        />
                    </div>

                    <a href={item.url} className='color-blue'>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </a>

                </div>
            ))}
        </div>
    );
};

export default ToolGrid;