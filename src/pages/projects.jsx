import React from 'react';

const ProjectsPage = () => {
    return (
        <div className="total-wrapper mx-auto mt-4">
            <div className="grid-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Bloque de contenido */}
                <div className="centered-box-grid border border-gray-200 rounded-lg p-4 shadow">
                    <div className="box-header font-bold text-lg mb-2 text-center">
                        Priorities
                    </div>
                    <div className="box-content">
                        <div className="preview text-sm">
                            Keep track of your most important tasks at a glance!
                            <p className="mt-3 flex justify-center">
                                <img src="images/python.svg" alt="Python Logo" className="h-5 w-auto mr-2"/>
                                Python
                                <img src="images/qt.svg" alt="Qt Logo" className="h-5 w-auto ml-2"/>
                                PyQt5
                            </p>
                        </div>
                        <div className="expandible">
                            {/* ... otros contenidos ... */}
                        </div>
                        <button className="toggle-content mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            🞥
                        </button>
                    </div>
                </div>

                {/* Repetir para otros bloques */}
            </div>
        </div>
    );
};

export default ProjectsPage;
