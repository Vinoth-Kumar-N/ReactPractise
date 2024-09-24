import React from 'react'
import ABoutPng from '../assets/img/about.png';

const About = () => {
    return (
        <>
            <div className="container h-[75vh] mt-[2rem]">

                <div className="div1 h-[90%] overflow-auto flex justify-around items-start">

                    <div className="w-4/6 h-[80%] flex flex-col items-center justify-center">
                        <h1 className="text-2xl">Know Who <span className="text-2xl font-extrabold text-purple-700">I"M</span></h1><br /><br />
                        <div className="h-[4rem] w-[70%]">
                            <p className="text-xl font-bold tracking-wide leading-relaxed">Hi! Everyone , I am Vinoth Kumar from Coimbatore, India.
                                I am currently pursuing My B.Tech in Information Technology at Sri Shakthi Institute of Engineering and Technology.
                                I am a passionate Web Developer and a Tech Enthusiast.
                                I am a self-motivated person who is always ready to learn new things.</p>
                        </div>
                    </div>
                    <div className="w-2/6 flex justify-center items-center mt-20 shrink-0">
                        <img src={ABoutPng} alt="" className="w-[600px] h-[400px]" />
                    </div>

                </div>


                <div className="div2 h-[40rem] flex flex-col items-center justify-center">
                    <h1 className="text-center text-2xl font-bold">Proffessional Skillset</h1>
                    <div className="h-auto w-[70vw] flex flex-wrap justify-center gap-20">
                        <div className="h-[5rem] w-[6rem] border-solid border-blue-700 p-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 80 80">
                                <path fill="#8bb7f0" d="M46.5,40c0,3.593-2.907,6.5-6.5,6.5s-6.5-2.907-6.5-6.5s2.907-6.5,6.5-6.5S46.5,36.407,46.5,40z"></path><path fill="#4e7ab5" d="M40,47c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S43.859,47,40,47z M40,34c-3.309,0-6,2.691-6,6 s2.691,6,6,6s6-2.691,6-6S43.309,34,40,34z"></path><g><path fill="#8bb7f0" d="M24.474,75.503c-1.711,0-3.269-0.392-4.632-1.164c-2.28-1.293-3.856-3.521-4.686-6.62 c-0.965-3.607-0.85-8.398,0.332-13.878C5.956,50.562,0.5,45.531,0.5,40c0-5.532,5.455-10.562,14.987-13.84 c-1.182-5.481-1.298-10.272-0.333-13.879c0.83-3.1,2.406-5.328,4.685-6.62c1.362-0.772,2.921-1.164,4.632-1.164 c4.388,0,9.891,2.73,15.531,7.698c5.64-4.963,11.141-7.691,15.524-7.691c1.711,0,3.269,0.392,4.632,1.164 c2.277,1.291,3.854,3.515,4.684,6.611c0.966,3.606,0.85,8.398-0.333,13.88C74.043,29.437,79.5,34.468,79.5,40 s-5.457,10.563-14.991,13.842c1.182,5.481,1.298,10.272,0.332,13.878c-0.83,3.097-2.405,5.321-4.68,6.612 c-1.364,0.772-2.923,1.164-4.633,1.164c-4.386,0-9.889-2.728-15.527-7.689C34.361,72.774,28.859,75.503,24.474,75.503z M19.337,55.006c-0.991,4.717-1.102,8.747-0.316,11.679c0.542,2.026,1.481,3.431,2.794,4.175c0.753,0.427,1.648,0.644,2.659,0.644 c3.394,0,7.862-2.282,12.621-6.437c-2.385-2.402-4.713-5.121-6.928-8.091C26.336,56.56,22.696,55.898,19.337,55.006z M42.906,65.065c4.758,4.151,9.227,6.431,12.621,6.432c1.011,0,1.906-0.217,2.661-0.644c1.309-0.742,2.246-2.144,2.787-4.167 c0.786-2.934,0.676-6.963-0.315-11.679c-3.362,0.892-7.003,1.554-10.833,1.97C47.613,59.947,45.288,62.665,42.906,65.065z M35.566,57.393c1.452,1.776,2.938,3.433,4.434,4.94c1.492-1.506,2.979-3.163,4.43-4.94C42.939,57.464,41.454,57.5,40,57.5 C38.545,57.5,37.059,57.464,35.566,57.393z M32.349,53.179C34.844,53.392,37.417,53.5,40,53.5c2.585,0,5.155-0.108,7.646-0.32 c1.486-2.084,2.903-4.268,4.214-6.495c1.268-2.155,2.461-4.404,3.547-6.686c-1.083-2.276-2.275-4.524-3.546-6.684 c-1.308-2.222-2.725-4.406-4.215-6.495C45.157,26.608,42.587,26.5,40,26.5c-2.588,0-5.159,0.108-7.647,0.321 c-1.49,2.086-2.909,4.27-4.219,6.495c-1.27,2.159-2.462,4.407-3.546,6.686c1.082,2.274,2.274,4.522,3.545,6.684 C29.437,48.901,30.854,51.084,32.349,53.179z M57.491,44.779c-0.706,1.346-1.438,2.666-2.185,3.934 c-0.753,1.282-1.554,2.568-2.386,3.836c2.374-0.366,4.645-0.835,6.771-1.4C59.101,49.1,58.362,46.963,57.491,44.779z M20.304,51.148c2.127,0.564,4.397,1.034,6.768,1.4c-0.837-1.276-1.638-2.563-2.386-3.835c-0.745-1.267-1.478-2.585-2.183-3.931 C21.636,46.956,20.898,49.091,20.304,51.148z M59.816,40c1.528,3.391,2.773,6.743,3.708,9.977C70.926,47.373,75.5,43.574,75.5,40 s-4.574-7.373-11.976-9.977C62.591,33.257,61.345,36.609,59.816,40z M16.472,30.025C9.073,32.628,4.5,36.427,4.5,40 c0,3.574,4.573,7.373,11.974,9.976c0.934-3.235,2.179-6.587,3.705-9.974C18.652,36.614,17.407,33.262,16.472,30.025z M20.303,28.852c0.594,2.054,1.332,4.19,2.2,6.368c0.704-1.342,1.436-2.661,2.184-3.932c0.752-1.279,1.553-2.565,2.388-3.836 C24.701,27.817,22.431,28.287,20.303,28.852z M52.922,27.451c0.837,1.277,1.638,2.563,2.386,3.837 c0.746,1.267,1.479,2.586,2.185,3.932c0.869-2.177,1.607-4.313,2.201-6.369C57.564,28.286,55.294,27.816,52.922,27.451z M24.471,8.497c-1.011,0-1.905,0.216-2.657,0.644c-1.312,0.744-2.252,2.149-2.795,4.175c-0.785,2.935-0.675,6.964,0.317,11.679 c3.36-0.892,7.002-1.555,10.834-1.971c2.217-2.971,4.545-5.688,6.927-8.088C32.337,10.779,27.866,8.497,24.471,8.497z M49.828,23.023c3.83,0.416,7.471,1.078,10.833,1.97c0.992-4.716,1.103-8.746,0.316-11.68c-0.542-2.022-1.48-3.424-2.79-4.166 c-0.754-0.427-1.649-0.644-2.661-0.644c-3.393,0-7.86,2.281-12.619,6.433C45.287,17.335,47.613,20.053,49.828,23.023z M40,22.5 c1.454,0,2.939,0.036,4.431,0.107c-1.45-1.774-2.936-3.43-4.429-4.938c-1.497,1.51-2.982,3.166-4.432,4.938 C37.061,22.536,38.546,22.5,40,22.5z"></path><path fill="#4e7ab5" d="M24.471,4.997c4.494,0,9.996,2.91,15.532,7.867c5.535-4.953,11.034-7.86,15.524-7.86 c1.623,0,3.099,0.37,4.386,1.099c2.156,1.222,3.652,3.343,4.446,6.306c1.077,3.917,0.851,8.74-0.434,14.08 C73.147,29.57,79,34.431,79,40s-5.853,10.43-15.076,13.512c1.341,5.773,1.566,10.726,0.434,14.079 c-0.794,2.962-2.289,5.084-4.443,6.306C58.626,74.627,57.455,75,55.833,75c-0.001,0-0.416,0-0.417,0 c-4.492,0-9.882-2.91-15.416-7.861c-5.535,4.956-11.035,7.864-15.527,7.864c-1.623,0-3.099-0.37-4.386-1.099 c-2.158-1.225-3.655-3.349-4.448-6.314c-1.19-3.717-0.95-8.603,0.434-14.079C6.852,50.429,1,45.569,1,40 c0-5.568,5.852-10.429,15.072-13.511C15.385,23.43,14.946,20.59,14.931,18c-0.012-2.046,0.267-3.949,0.707-5.59 c0.794-2.966,2.29-5.09,4.448-6.314C21.372,5.366,22.848,4.997,24.471,4.997 M18.958,25.614c3.477-0.955,7.338-1.677,11.483-2.117 c2.382-3.21,4.875-6.096,7.386-8.584c-4.872-4.346-9.616-6.917-13.356-6.917c-1.099,0-2.075,0.238-2.904,0.709 c-1.433,0.813-2.452,2.32-3.031,4.481C17.678,16.388,17.873,20.716,18.958,25.614 M61.039,25.613 c1.085-4.898,1.28-9.227,0.422-12.429c-0.578-2.157-1.597-3.661-3.027-4.472c-0.83-0.471-1.809-0.709-2.907-0.709 c-3.737,0-8.478,2.568-13.349,6.91c2.51,2.488,5,5.374,7.38,8.583C53.701,23.936,57.562,24.658,61.039,25.613 M34.477,23.166 c1.802-0.107,3.609-0.2,5.488-0.2c1.879,0,3.755,0.094,5.557,0.2c-1.808-2.279-3.664-4.361-5.521-6.204 C38.144,18.805,36.287,20.887,34.477,23.166 M40,54c2.761,0,5.404-0.121,7.918-0.342c1.519-2.117,2.988-4.365,4.372-6.719 c1.353-2.299,2.577-4.626,3.67-6.939c-1.093-2.313-2.317-4.639-3.669-6.937c-1.385-2.355-2.853-4.602-4.373-6.719 C45.405,26.121,42.762,26,40,26s-5.406,0.121-7.92,0.343c-1.521,2.117-2.991,4.365-4.376,6.719 c-1.352,2.299-2.576,4.626-3.669,6.939c1.093,2.313,2.316,4.639,3.668,6.937c1.385,2.354,2.854,4.602,4.374,6.719 C34.592,53.879,37.237,54,40,54 M57.546,36.413c1.125-2.709,2.056-5.369,2.766-7.913c-2.553-0.702-5.373-1.282-8.428-1.707 c1.028,1.527,2.029,3.11,2.992,4.748C55.83,33.16,56.717,34.788,57.546,36.413 M22.449,36.414c0.828-1.625,1.716-3.253,2.668-4.873 c0.964-1.638,1.966-3.22,2.995-4.747c-3.055,0.424-5.875,1.005-8.428,1.707C20.394,31.045,21.325,33.704,22.449,36.414 M63.188,50.622C71.264,47.886,76,43.866,76,40s-4.736-7.886-12.812-10.622c-0.953,3.405-2.269,6.983-3.92,10.621 C60.919,43.638,62.235,47.216,63.188,50.622 M16.81,50.621c0.952-3.404,2.267-6.982,3.918-10.619 c-1.651-3.638-2.967-7.217-3.919-10.622C8.734,32.116,4,36.135,4,40C4,43.866,8.735,47.885,16.81,50.621 M51.884,53.207 c3.055-0.424,5.875-1.004,8.428-1.707c-0.711-2.544-1.642-5.204-2.766-7.914c-0.829,1.625-1.717,3.253-2.67,4.873 C53.913,50.097,52.912,51.68,51.884,53.207 M28.109,53.206c-1.028-1.527-2.029-3.109-2.993-4.746 c-0.952-1.619-1.839-3.246-2.667-4.87c-1.124,2.708-2.054,5.367-2.764,7.91C22.237,52.201,25.056,52.781,28.109,53.206 M24.474,72.003c3.739,0,8.481-2.57,13.352-6.914c-2.513-2.489-5.005-5.376-7.388-8.587c-4.143-0.439-8.002-1.161-11.478-2.116 c-1.084,4.898-1.279,9.226-0.422,12.428c0.578,2.16,1.598,3.667,3.03,4.48C22.396,71.765,23.375,72.003,24.474,72.003 M55.527,71.997L55.527,71.997c1.099,0,2.076-0.238,2.907-0.709c1.43-0.811,2.447-2.315,3.024-4.473 c0.858-3.203,0.663-7.531-0.421-12.428c-3.477,0.955-7.337,1.677-11.481,2.116c-2.38,3.21-4.871,6.096-7.381,8.585 C47.046,69.428,51.788,71.996,55.527,71.997 M40,63.04c1.857-1.844,3.713-3.927,5.522-6.206c-1.801,0.107-3.559,0.333-5.439,0.333 c-1.881,0-3.807-0.226-5.609-0.333C36.284,59.114,38.142,61.197,40,63.04 M24.116,4.072c-1.799,0-3.085,0.338-4.523,1.153 c-2.399,1.361-4.055,3.691-4.921,6.926c-0.96,3.587-0.877,8.302,0.236,13.681C5.419,29.189,0,34.325,0,40 c0,5.676,5.42,10.811,14.909,14.168c-1.113,5.379-1.196,10.094-0.235,13.681c0.865,3.233,2.52,5.563,4.921,6.926 c1.44,0.816,3.17,1.163,4.968,1.163c4.487,0,9.753-2.535,15.438-7.466c5.684,4.926,11.039,7.524,15.525,7.525 c1.799,0,3.441-0.413,4.881-1.229c2.397-1.359,4.051-3.686,4.916-6.917c0.961-3.588,0.878-8.303-0.235-13.681 C74.579,50.812,80,45.676,80,40s-5.42-10.812-14.911-14.169c1.114-5.38,1.196-10.095,0.235-13.682 c-0.866-3.231-2.521-5.558-4.919-6.917c-1.439-0.815-3.081-1.229-4.879-1.229c-4.485,0-9.839,2.599-15.524,7.527 c-5.686-4.932-11.066-7.461-15.554-7.461L24.116,4.072z M19.72,24.377c-0.462-2.324-0.772-4.502-0.789-6.412 c-0.015-1.72,0.221-3.217,0.57-4.521c0.507-1.892,1.368-3.194,2.559-3.87c0.676-0.384,1.5-0.644,2.423-0.644 c3.181,0,7.367,2.178,11.883,6.034c-2.221,2.273-4.392,4.819-6.466,7.585C26.315,22.949,22.897,23.562,19.72,24.377L19.72,24.377z M43.638,14.966c4.515-3.853,8.711-5.963,11.888-5.963c0.924,0,1.737,0.195,2.414,0.579c1.189,0.674,2.049,1.973,2.555,3.861 c0.874,2.818,0.761,6.564-0.218,10.933c-3.177-0.814-6.594-1.428-10.178-1.826C48.026,19.785,45.857,17.239,43.638,14.966 L43.638,14.966z M36.673,22.06c1.096-1.3,2.209-2.53,3.328-3.678c1.119,1.148,2.231,2.378,3.326,3.678 C42.208,22.02,41.095,22,40,22S37.793,22.02,36.673,22.06L36.673,22.06z M32.625,27.3c2.405-0.199,4.883-0.341,7.375-0.341 c2.491,0,4.969,0.142,7.373,0.341c1.432,2.019,2.796,4.126,4.056,6.269c1.222,2.078,2.373,4.239,3.423,6.43 c-1.051,2.192-2.202,4.354-3.424,6.432c-1.261,2.144-2.624,4.25-4.056,6.269c-2.403,0.199-4.881,0.466-7.372,0.466 c-2.493,0-4.972-0.268-7.378-0.467c-1.433-2.018-2.797-4.125-4.058-6.269c-1.222-2.077-2.372-4.238-3.422-6.43 c1.05-2.192,2.201-4.354,3.423-6.432C29.827,31.425,31.192,29.318,32.625,27.3L32.625,27.3z M57.422,34.024 c-0.549-1.018-1.112-2.018-1.683-2.99c-0.57-0.969-1.167-1.942-1.785-2.909c1.774,0.302,3.485,0.663,5.114,1.08 C58.601,30.771,58.05,32.383,57.422,34.024L57.422,34.024z M20.928,29.205c1.629-0.417,3.34-0.778,5.114-1.08 c-0.619,0.967-1.216,1.94-1.786,2.908c-0.571,0.972-1.134,1.972-1.683,2.99C21.945,32.384,21.395,30.772,20.928,29.205 L20.928,29.205z M60.365,39.999c1.415-3.162,2.587-6.292,3.49-9.326C70.758,33.192,75,36.721,75,40s-4.242,6.808-11.145,9.327 C62.951,46.292,61.78,43.161,60.365,39.999L60.365,39.999z M16.142,49.326C9.241,46.807,5,43.278,5,40s4.241-6.807,11.141-9.326 c0.903,3.035,2.074,6.165,3.489,9.327C18.216,43.162,17.045,46.292,16.142,49.326L16.142,49.326z M53.953,51.876 c0.618-0.968,1.216-1.941,1.785-2.909c0.572-0.972,1.135-1.973,1.684-2.991c0.628,1.641,1.178,3.254,1.646,4.821 C57.438,51.212,55.727,51.574,53.953,51.876L53.953,51.876z M20.929,50.795c0.467-1.566,1.017-3.177,1.644-4.816 c0.548,1.017,1.111,2.017,1.682,2.988c0.569,0.968,1.166,1.94,1.785,2.908C24.267,51.572,22.557,51.211,20.929,50.795 L20.929,50.795z M24.474,71.003c-0.924,0-1.736-0.195-2.413-0.579c-1.19-0.676-2.051-1.977-2.557-3.869 c-0.831-2.845-0.737-6.592,0.218-10.933c3.176,0.814,6.592,1.428,10.175,1.826c2.075,2.766,4.246,5.313,6.468,7.588 C31.85,68.893,27.653,71.004,24.474,71.003L24.474,71.003L24.474,71.003z M50.098,57.45c3.584-0.399,7.001-1.012,10.178-1.826 c1.105,4.74,1.192,8.518,0.217,10.932c-0.505,1.889-1.364,3.188-2.552,3.861c-0.678,0.384-1.49,0.579-2.413,0.579v1l-0.001-1 c-3.18,0-7.377-2.11-11.891-5.961C45.856,62.762,48.025,60.216,50.098,57.45L50.098,57.45z M40,61.62 c-1.12-1.148-2.234-2.379-3.33-3.68C37.79,57.98,38.904,58,40,58c1.095,0,2.208-0.02,3.327-0.06 C42.232,59.241,41.119,60.472,40,61.62L40,61.62z"></path></g>
                            </svg>
                        </div>
                        <div className="h-[5rem] w-[6rem] border-solid border-blue-700 p-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path>
                            </svg>
                        </div>
                        <div className="h-[5rem] w-[6rem] border-solid border-blue-700 p-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
                            </svg>
                        </div>
                        <div className="h-[5rem] w-[6rem] border-solid border-blue-700 p-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                <path d="M11.425 18L17.842 29 24.258 18zM24.259 16L17.842 5 11.425 16zM27.741 16L40.575 16 34.158 4.999zM19.575 4L26 15.014 32.424 4zM38.575 32L32.158 21 25.742 32zm-12.834 2l6.417 11 6.417-11zm-3.482 0H9.425l6.417 11zM30.425 46L24 34.986 17.576 46z"></path>
                            </svg>
                        </div>
                        <div className="h-[5rem] w-[6rem] border-solid border-blue-700 p-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
                            </svg>
                        </div>
                        <div className="h-[5rem] w-[6rem] border-solid border-blue-700 p-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
                            </svg>
                        </div>
                        <div className="h-[5rem] w-[6rem] border-solid border-blue-700 p-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                                <path d="M 31.488281 2 C 24.800781 1.878906 18.332031 4.046875 13.015625 8.25 C 6.9375 13.058594 3.09375 19.9375 2.195313 27.632813 C 1.296875 35.328125 3.449219 42.910156 8.25 48.984375 C 13.054688 55.0625 19.9375 58.90625 27.632813 59.804688 C 28.777344 59.9375 29.921875 60.003906 31.058594 60.003906 C 37.550781 60.003906 43.8125 57.835938 48.984375 53.75 C 55.0625 48.941406 58.902344 42.058594 59.800781 34.367188 C 60.703125 26.671875 58.550781 19.089844 53.75 13.015625 C 48.941406 6.9375 42.0625 3.09375 34.367188 2.195313 C 33.40625 2.082031 32.445313 2.019531 31.488281 2 Z M 30.945313 3.996094 C 32.003906 3.996094 33.070313 4.058594 34.136719 4.183594 C 48.921875 5.914063 59.546875 19.351563 57.816406 34.136719 C 56.980469 41.300781 53.402344 47.707031 47.746094 52.179688 C 42.085938 56.652344 35.023438 58.660156 27.863281 57.816406 C 13.078125 56.089844 2.453125 42.648438 4.183594 27.863281 C 5.019531 20.699219 8.597656 14.292969 14.253906 9.820313 C 19.070313 6.011719 24.898438 3.996094 30.945313 3.996094 Z M 34.125 9.117188 C 33.996094 9.097656 33.863281 9.105469 33.730469 9.140625 C 33.195313 9.277344 32.871094 9.820313 33.003906 10.355469 C 33.8125 13.535156 32.214844 14.941406 29.324219 17.160156 C 27.621094 18.46875 25.691406 19.953125 24.546875 22.210938 C 22.21875 27.242188 26.984375 30.722656 28.546875 31.867188 C 28.726563 31.996094 28.933594 32.0625 29.136719 32.0625 C 29.445313 32.0625 29.75 31.917969 29.945313 31.652344 C 30.269531 31.203125 30.175781 30.578125 29.730469 30.253906 C 26.265625 27.722656 25.226563 25.5 26.34375 23.082031 C 27.269531 21.261719 28.933594 19.984375 30.542969 18.75 C 33.152344 16.746094 36.113281 14.472656 34.941406 9.863281 C 34.839844 9.460938 34.507813 9.179688 34.125 9.117188 Z M 39.0625 17.167969 C 38.9375 17.148438 38.800781 17.152344 38.667969 17.1875 C 38.394531 17.253906 31.929688 18.90625 29.8125 22.597656 C 29.09375 23.847656 28.933594 25.179688 29.332031 26.558594 C 29.460938 26.996094 29.859375 27.28125 30.292969 27.28125 C 30.386719 27.28125 30.480469 27.265625 30.574219 27.238281 C 31.101563 27.085938 31.40625 26.53125 31.253906 26 C 31.007813 25.152344 31.101563 24.363281 31.546875 23.59375 C 32.949219 21.144531 37.511719 19.539063 39.152344 19.125 C 39.6875 18.992188 40.015625 18.449219 39.878906 17.914063 C 39.78125 17.511719 39.449219 17.226563 39.0625 17.167969 Z M 14.109375 17.230469 C 13.855469 17.269531 13.613281 17.402344 13.449219 17.621094 C 13.121094 18.0625 13.210938 18.691406 13.65625 19.019531 L 15.257813 20.214844 C 15.4375 20.347656 15.648438 20.410156 15.855469 20.410156 C 16.160156 20.410156 16.460938 20.273438 16.65625 20.011719 C 16.984375 19.570313 16.894531 18.941406 16.453125 18.609375 L 14.847656 17.417969 C 14.625 17.253906 14.359375 17.191406 14.109375 17.230469 Z M 49.847656 19.40625 C 49.722656 19.421875 49.59375 19.464844 49.472656 19.535156 C 49 19.820313 48.84375 20.433594 49.125 20.90625 C 49.515625 21.5625 49.875 22.246094 50.1875 22.9375 C 50.359375 23.304688 50.722656 23.523438 51.101563 23.523438 C 51.242188 23.523438 51.382813 23.496094 51.515625 23.433594 C 52.019531 23.203125 52.242188 22.613281 52.011719 22.109375 C 51.664063 21.347656 51.273438 20.601563 50.84375 19.886719 C 50.632813 19.527344 50.234375 19.351563 49.847656 19.40625 Z M 11.496094 22.117188 C 11.105469 22.125 10.738281 22.363281 10.589844 22.75 C 10.382813 23.265625 10.632813 23.84375 11.144531 24.046875 L 13.003906 24.785156 C 13.125 24.835938 13.25 24.859375 13.375 24.859375 C 13.769531 24.859375 14.148438 24.621094 14.304688 24.226563 C 14.507813 23.710938 14.257813 23.132813 13.746094 22.925781 L 11.886719 22.1875 C 11.757813 22.136719 11.625 22.113281 11.496094 22.117188 Z M 52.667969 25.652344 C 52.539063 25.628906 52.402344 25.636719 52.269531 25.667969 C 51.734375 25.792969 51.398438 26.328125 51.523438 26.867188 C 52.347656 30.414063 52.238281 34.125 51.214844 37.601563 C 51.058594 38.128906 51.359375 38.6875 51.890625 38.84375 C 51.984375 38.871094 52.078125 38.886719 52.171875 38.886719 C 52.605469 38.886719 53.003906 38.605469 53.128906 38.167969 C 54.253906 34.359375 54.371094 30.296875 53.46875 26.414063 C 53.375 26.011719 53.050781 25.71875 52.667969 25.652344 Z M 10.261719 27.566406 C 9.710938 27.503906 9.214844 27.894531 9.148438 28.445313 C 9.085938 28.992188 9.476563 29.488281 10.027344 29.554688 L 12.011719 29.785156 C 12.050781 29.792969 12.09375 29.796875 12.128906 29.796875 C 12.628906 29.796875 13.0625 29.417969 13.121094 28.910156 C 13.183594 28.359375 12.792969 27.863281 12.246094 27.800781 Z M 31.933594 27.953125 C 31.679688 27.933594 31.417969 28.011719 31.207031 28.191406 C 30.789063 28.554688 30.746094 29.1875 31.109375 29.605469 C 31.710938 30.296875 31.753906 30.953125 31.25 31.722656 C 30.949219 32.1875 31.078125 32.804688 31.539063 33.109375 C 31.707031 33.21875 31.898438 33.269531 32.085938 33.269531 C 32.410156 33.269531 32.734375 33.113281 32.921875 32.820313 C 33.914063 31.308594 33.800781 29.65625 32.617188 28.292969 C 32.4375 28.082031 32.1875 27.96875 31.933594 27.953125 Z M 41.910156 30.730469 C 41.261719 30.710938 40.589844 30.816406 39.933594 31.046875 C 39.410156 31.230469 39.136719 31.800781 39.316406 32.320313 C 39.5 32.839844 40.074219 33.117188 40.59375 32.933594 C 41.875 32.480469 42.902344 32.832031 43.433594 33.308594 C 43.707031 33.554688 44.140625 34.085938 43.953125 34.890625 C 43.640625 36.273438 41.742188 37.585938 38.886719 38.402344 C 38.355469 38.550781 38.046875 39.105469 38.199219 39.636719 C 38.324219 40.074219 38.726563 40.359375 39.160156 40.359375 C 39.25 40.359375 39.34375 40.347656 39.4375 40.324219 C 44.394531 38.910156 45.617188 36.59375 45.90625 35.34375 C 46.207031 34.039063 45.78125 32.722656 44.765625 31.816406 C 44 31.132813 42.988281 30.761719 41.910156 30.730469 Z M 25.589844 30.796875 C 25.40625 30.820313 21.6875 30.808594 18.859375 32.414063 C 17.59375 33.195313 17.875 34.132813 17.992188 34.402344 C 18.3125 35.140625 19.585938 35.644531 21.390625 35.9375 C 20.667969 36.582031 20.628906 37.246094 20.792969 37.769531 C 21.027344 38.527344 21.898438 39.132813 23.175781 39.5625 C 22.710938 39.894531 22.425781 40.277344 22.332031 40.730469 C 22.253906 41.09375 22.25 41.8125 23.066406 42.484375 C 24.140625 43.363281 26.648438 44.015625 29.601563 44.015625 C 31.945313 44.015625 34.574219 43.605469 36.984375 42.570313 C 37.492188 42.351563 37.730469 41.765625 37.511719 41.257813 C 37.292969 40.75 36.703125 40.511719 36.199219 40.734375 C 31.320313 42.820313 25.859375 41.9375 24.515625 41.082031 C 24.699219 40.988281 25.003906 40.859375 25.484375 40.726563 C 25.5 40.722656 26.65625 40.371094 27.871094 40.363281 C 27.921875 40.363281 27.96875 40.339844 28.019531 40.332031 C 28.363281 40.34375 28.710938 40.355469 29.066406 40.355469 C 31.703125 40.355469 34.609375 39.996094 37.238281 39.226563 C 37.769531 39.070313 38.074219 38.515625 37.917969 37.984375 C 37.761719 37.457031 37.207031 37.152344 36.675781 37.308594 C 30.300781 39.171875 24.191406 38.160156 22.878906 37.300781 C 23.078125 37.167969 23.449219 36.96875 24.125 36.742188 C 24.523438 36.617188 25.738281 36.296875 26.621094 36.28125 C 26.625 36.28125 26.628906 36.28125 26.636719 36.28125 C 30.621094 36.261719 35.109375 35.765625 38.09375 34.964844 C 38.628906 34.820313 38.945313 34.273438 38.800781 33.738281 C 38.660156 33.207031 38.109375 32.886719 37.578125 33.03125 C 34.105469 33.964844 30.042969 34.300781 26.660156 34.296875 C 26.636719 34.296875 26.617188 34.285156 26.59375 34.28125 C 26.519531 34.285156 26.4375 34.292969 26.359375 34.296875 C 23.839844 34.28125 21.726563 34.074219 20.574219 33.789063 C 22.816406 32.808594 25.554688 32.796875 25.585938 32.796875 C 26.136719 32.796875 26.585938 32.351563 26.585938 31.796875 C 26.585938 31.246094 26.140625 30.800781 25.589844 30.796875 Z M 12.058594 32.894531 L 10.078125 33.183594 C 9.53125 33.261719 9.15625 33.769531 9.234375 34.316406 C 9.308594 34.8125 9.734375 35.171875 10.222656 35.171875 C 10.269531 35.171875 10.316406 35.167969 10.367188 35.160156 L 12.347656 34.871094 C 12.894531 34.792969 13.269531 34.285156 13.191406 33.738281 C 13.109375 33.191406 12.597656 32.804688 12.058594 32.894531 Z M 13.582031 37.78125 C 13.453125 37.78125 13.320313 37.808594 13.195313 37.863281 L 11.359375 38.65625 C 10.851563 38.875 10.617188 39.460938 10.835938 39.96875 C 11 40.347656 11.367188 40.574219 11.753906 40.574219 C 11.886719 40.574219 12.019531 40.546875 12.152344 40.488281 L 13.988281 39.699219 C 14.496094 39.476563 14.730469 38.890625 14.511719 38.386719 C 14.34375 38.003906 13.972656 37.777344 13.582031 37.78125 Z M 21 41.503906 C 19.351563 41.378906 17.136719 42.066406 16.078125 42.699219 C 14.847656 43.4375 14.671875 44.242188 14.738281 44.785156 C 14.90625 46.113281 16.625 46.628906 17.234375 46.8125 C 20.847656 47.71875 24.660156 48.097656 28.238281 48.097656 C 36.175781 48.101563 42.933594 46.230469 43.671875 44.109375 C 43.90625 43.429688 43.714844 42.503906 42.472656 41.941406 C 41.972656 41.714844 41.378906 41.9375 41.152344 42.441406 C 40.945313 42.902344 41.113281 43.433594 41.523438 43.699219 C 39.492188 45.25 28.5625 47.59375 17.765625 44.886719 C 17.324219 44.75 17.050781 44.628906 16.890625 44.539063 C 17.730469 43.867188 20.550781 43.1875 21.246094 43.566406 C 21.695313 43.878906 22.316406 43.769531 22.632813 43.324219 C 22.949219 42.871094 22.839844 42.246094 22.390625 41.925781 C 22.03125 41.675781 21.546875 41.546875 21 41.503906 Z M 43.71875 45.171875 C 43.148438 45.136719 42.6875 45.542969 42.640625 46.09375 C 42.523438 47.632813 35.769531 49.441406 25.453125 48.78125 C 24.90625 48.769531 24.429688 49.167969 24.390625 49.71875 C 24.359375 50.269531 24.773438 50.742188 25.328125 50.78125 C 25.550781 50.792969 27.21875 50.894531 29.496094 50.894531 C 35.085938 50.894531 44.324219 50.28125 44.636719 46.25 C 44.679688 45.695313 44.269531 45.214844 43.71875 45.171875 Z"></path>
                            </svg>
                        </div>
                        <div className="h-[5rem] w-[6rem] border-solid border-blue-700 p-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"></path><path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"></path><path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"></path><path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"></path>
                            </svg>
                        </div>


                    </div>
                </div>

                <div className="div3 h-[40vh] flex flex-col items-center justify-center">
                    <h1 className="text-center text-2xl font-bold">Tools I Use</h1>
                    <div className="h-full w-[70vw]  flex flex-wrap justify-center gap-20">
                        <div className="h-[5rem] w-[6rem] border-solid border-blue-700 p-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                                <path d="M 31.880859 3 C 27.661475 3.013642 23.379516 3.9528594 19.330078 5.9199219 C 12.416078 9.2789219 7.1204219 15.247719 4.6074219 22.511719 C -0.63657812 37.637719 7.3749531 54.149578 22.501953 59.392578 C 37.628953 64.635578 54.140766 56.624047 59.384766 41.498047 C 61.928766 34.228047 61.453453 26.240266 58.064453 19.322266 C 53.036797 8.9744219 42.663731 2.9651371 31.880859 3 z M 31.533203 4.9863281 C 34.613636 4.9329984 37.755719 5.4107969 40.835938 6.4785156 C 47.596938 8.8225156 53.151391 13.755359 56.275391 20.193359 C 59.400391 26.631359 59.837141 34.048547 57.494141 40.810547 C 52.613141 54.890547 37.243109 62.34875 23.162109 57.46875 C 9.0811094 52.58875 1.6239062 37.217719 6.5039062 23.136719 C 10.316406 12.135938 20.531658 5.1767914 31.533203 4.9863281 z M 31.638672 8.3183594 C 30.803672 8.3063594 29.968719 8.3399688 29.136719 8.4179688 C 28.584719 8.4359688 28.152875 8.8982188 28.171875 9.4492188 C 28.189875 10.001219 28.652125 10.433063 29.203125 10.414062 C 29.244125 10.413063 29.287125 10.409344 29.328125 10.402344 C 30.080125 10.324344 30.834844 10.286063 31.589844 10.289062 C 32.136844 10.213062 32.517406 9.7081094 32.441406 9.1621094 C 32.382406 8.7381094 32.059672 8.3983594 31.638672 8.3183594 z M 25.052734 9.2421875 C 24.923656 9.2280156 24.7885 9.2397969 24.65625 9.2792969 C 17.61925 11.420297 12.025656 16.787469 9.5976562 23.730469 C 9.4016563 24.246469 9.6617344 24.823531 10.177734 25.019531 C 10.693734 25.215531 11.270797 24.957406 11.466797 24.441406 C 11.473797 24.424406 11.479375 24.406672 11.484375 24.388672 L 11.449219 24.423828 C 13.664219 18.065828 18.787469 13.147359 25.230469 11.193359 C 25.759469 11.035359 26.058391 10.478219 25.900391 9.9492188 C 25.781891 9.5524687 25.439969 9.2847031 25.052734 9.2421875 z M 44.9375 14.75 C 42.5555 14.75 40.626953 16.6805 40.626953 19.0625 C 40.626953 21.4445 42.5565 23.376953 44.9375 23.376953 C 45.5515 23.376953 46.133109 23.243719 46.662109 23.011719 L 43.498047 19.742188 C 43.432047 19.674187 43.396391 19.581328 43.400391 19.486328 C 43.403391 19.391328 43.446578 19.301281 43.517578 19.238281 L 47.535156 15.640625 C 46.811156 15.089625 45.9175 14.75 44.9375 14.75 z M 48.0625 16.105469 L 44.253906 19.517578 L 47.298828 22.664062 C 48.471828 21.893062 49.248047 20.5715 49.248047 19.0625 C 49.248047 17.9145 48.7935 16.878469 48.0625 16.105469 z M 47.982422 18.152344 C 48.117234 18.144234 48.249953 18.21475 48.314453 18.34375 C 48.332453 18.38075 48.7595 19.26225 48.1875 20.40625 C 48.1265 20.52925 48.003 20.599609 47.875 20.599609 C 47.823 20.599609 47.76875 20.5875 47.71875 20.5625 C 47.54575 20.4765 47.4755 20.26775 47.5625 20.09375 C 47.9715 19.27675 47.6985 18.677344 47.6875 18.652344 C 47.6055 18.479344 47.677609 18.2715 47.849609 18.1875 C 47.892609 18.16675 47.937484 18.155047 47.982422 18.152344 z M 39.408203 21.658203 C 38.765203 21.685953 38.0355 21.842 37.25 22.125 C 34.125 23.25 30.375 27.375 30.375 27.375 L 27.367188 30.863281 L 29.835938 33.289062 L 41.044922 21.962891 C 40.607422 21.731891 40.051203 21.630453 39.408203 21.658203 z M 41.601562 22.396484 L 30.333984 33.78125 L 31.789062 35.212891 L 40.25 26.630859 C 40.275 26.606859 42.099766 24.806031 42.009766 23.207031 C 41.926766 22.890031 41.791562 22.615484 41.601562 22.396484 z M 41.771484 25.876953 C 41.285484 26.589953 40.785188 27.085953 40.742188 27.126953 L 32.287109 35.701172 L 33.410156 36.806641 C 33.524156 36.702641 33.634047 36.606 33.748047 36.5 C 39.841047 30.85 41.123484 28.439953 41.771484 25.876953 z M 26.908203 31.394531 L 24.125 34.625 L 29.228516 33.675781 L 26.908203 31.394531 z M 29.720703 34.158203 L 27.962891 35.978516 L 31.083984 35.498047 L 29.720703 34.158203 z M 31.705078 36.111328 L 27.160156 36.810547 L 18.828125 45.433594 L 22.324219 48.871094 L 22.5 48.875 L 21.625 45.25 C 21.625 45.25 26.445578 43.060391 32.892578 37.275391 L 31.705078 36.111328 z M 51.742188 37.121094 C 51.358984 37.191078 51.037266 37.482469 50.947266 37.886719 C 50.834266 38.393719 51.127047 38.903594 51.623047 39.058594 L 53.552734 39.574219 C 54.091734 39.694219 54.626094 39.355406 54.746094 38.816406 C 54.859094 38.309406 54.564359 37.799531 54.068359 37.644531 L 52.140625 37.128906 C 52.005875 37.098906 51.869922 37.097766 51.742188 37.121094 z M 50.042969 41.828125 C 49.654844 41.794 49.265766 41.990219 49.072266 42.355469 C 48.826266 42.819469 48.981734 43.394875 49.427734 43.671875 L 51.158203 44.667969 C 51.640203 44.942969 52.254297 44.774969 52.529297 44.292969 C 52.804297 43.810969 52.636297 43.196875 52.154297 42.921875 L 50.423828 41.941406 C 50.301828 41.876656 50.172344 41.8395 50.042969 41.828125 z M 46.832031 45.832031 C 46.576406 45.832031 46.322453 45.93 46.126953 46.125 C 45.736953 46.515 45.736953 47.147109 46.126953 47.537109 L 47.539062 48.951172 C 47.929063 49.341172 48.561172 49.341172 48.951172 48.951172 C 49.341172 48.561172 49.341172 47.927109 48.951172 47.537109 L 47.539062 46.125 C 47.344063 45.93 47.087656 45.832031 46.832031 45.832031 z M 18.341797 45.9375 L 15.625 48.75 L 21.308594 48.853516 L 18.341797 45.9375 z M 42.669922 48.9375 C 42.541453 48.953781 42.415875 48.995453 42.296875 49.064453 C 41.821875 49.342453 41.659547 49.953688 41.935547 50.429688 L 42.925781 52.152344 C 43.184781 52.640344 43.788391 52.825406 44.275391 52.566406 C 44.763391 52.307406 44.948453 51.703797 44.689453 51.216797 C 44.678453 51.196797 44.66825 51.17525 44.65625 51.15625 L 43.660156 49.425781 C 43.451656 49.068781 43.055328 48.888656 42.669922 48.9375 z M 38.236328 50.886719 C 38.107875 50.867922 37.975297 50.873453 37.841797 50.908203 C 37.839797 50.909203 37.838891 50.908203 37.837891 50.908203 C 37.304891 51.050203 36.985906 51.599813 37.128906 52.132812 C 37.129906 52.134813 37.129859 52.135672 37.130859 52.138672 L 37.646484 54.068359 C 37.811484 54.595359 38.372437 54.887656 38.898438 54.722656 C 39.394438 54.567656 39.689172 54.059734 39.576172 53.552734 L 39.060547 51.623047 C 38.956297 51.222547 38.621688 50.943109 38.236328 50.886719 z"></path>
                            </svg>
                        </div>
                        <div className="h-[5rem] w-[6rem] border-solid border-blue-700 p-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#29b6f6" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"></path><path fill="#0277bd" d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
                            </svg>
                        </div>
                        <div className="h-[5rem] w-[6rem] border-solid border-blue-700 p-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                <path d="M44.62 13.13c-.23-.21-.52-.33-.83-.33-.02 0-.05.01-.08.01l-29.86 1.92c-.63.04-1.13.58-1.13 1.21v28.75c0 .34.14.65.38.88.25.23.57.35.91.33l29.86-1.93C44.51 43.93 45 43.4 45 42.76V14.02C45 13.68 44.87 13.36 44.62 13.13zM38.11 20.92c-.6.19-.79.2-.79.2v17.24c-1.02.55-1.86.81-2.74.81-1.07 0-1.68-.24-2.5-1.5-1.74-2.69-7.41-11.81-7.41-11.81v11.45l2.23.47c0 0-.06 1.3-2.01 1.45-1.71.13-5.44.32-5.44.32 0-.47.1-1.12.84-1.31.35-.09 1.4-.37 1.4-.37V22.42h-2.24c0-1.03.3-1.83 1.38-1.91l5.79-.33 7.73 11.92V21.49l-2.24-.19c0-.93.9-1.5 1.67-1.58l5.04-.28C38.82 20.09 38.79 20.7 38.11 20.92zM4.98 8.54l5.74 5.74v29.54L5.6 37.66c-.41-.58-.62-1.25-.62-1.96V8.54zM42.72 10.91l-29.06 1.83c-.99.07-1.95-.3-2.65-.99L6.24 6.97l27.19-1.89c.81-.07 1.62.17 2.28.66L42.72 10.91z"></path>
                            </svg>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default About