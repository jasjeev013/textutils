import React from 'react'

export default function About(props) {
    return (
        <div className='container my-5'>
            <div className="card text-center">
                <div className="card-header" style={{
                    backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
                    color: props.mode === 'dark' ? 'white' : '#212529'
                
                }}>
                    <h2>--------- About Us ---------</h2>
                </div>
                <div className="card-body" style={{
                    backgroundColor: props.mode === 'dark' ? '#0d2236' : 'white',
                    color: props.mode === 'dark' ? 'white' : '#0d2236'
                
                }}>
                    <h5 className="card-title fst-italic text-decoration-underline">A special project to manupilate and using text in other ways.</h5>
                    <p className="card-text my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero reprehenderit vitae fugiat modi, corrupti, consequuntur quidem nisi eligendi atque distinctio dolorum veniam. Beatae voluptatum quos ipsum ratione aliquam, iste consectetur error est amet nam harum maiores? Id, sint saepe delectus ipsam et optio cum voluptate? Maxime sequi maiores atque consequatur!. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores natus ex distinctio voluptate voluptas voluptatum tenetur, sequi, consequuntur atque porro aliquam eos ad inventore deserunt a necessitatibus adipisci? Ratione incidunt inventore dicta officia aspernatur.</p>
                </div>
                
            </div>
        </div>
    )
}
